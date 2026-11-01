import React, { createContext, useContext, useEffect, useState } from "react";

const RouterContext = createContext({
  path: "/",
  navigate: () => {},
});

export const RouterProvider = ({ children }) => {
  const getPath = () => {
    if (typeof window === "undefined") return "/";
    // Check hash route first (e.g. #/careers, #/talk) or standard pathname
    const hash = window.location.hash.replace(/^#/, "");
    if (hash.startsWith("/")) return hash;
    return window.location.pathname || "/";
  };

  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onLocationChange = () => setPath(getPath());
    window.addEventListener("popstate", onLocationChange);
    window.addEventListener("hashchange", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("hashchange", onLocationChange);
    };
  }, []);

  const navigate = (to) => {
    if (to.startsWith("#") && !to.startsWith("#/")) {
      // Anchor scroll on current page
      const el = document.getElementById(to.replace(/^#/, ""));
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      }
      return;
    }

    if (to.startsWith("/")) {
      window.history.pushState({}, "", to);
      setPath(to);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);

export const Link = ({ to, children, className = "", onClick, ...props }) => {
  const { navigate } = useRouter();
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) return; // Allow opening in new tab
    e.preventDefault();
    onClick?.(e);
    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

