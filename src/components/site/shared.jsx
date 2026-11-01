export const executeScrollTo = (target) => {
  const norm =
    target === "services" ? "solutions" :
    target === "about" ? "culture" :
    target;

  if (norm === "solutions") {
    const hero = document.getElementById("hero-scroll");
    if (hero) {
      const top = hero.offsetTop + (hero.offsetHeight - window.innerHeight) * 0.62;
      window.scrollTo({ top, behavior: "smooth" });
      return true;
    }
  }

  const el = document.getElementById(norm);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
    return true;
  }
  return false;
};

export const scrollToTarget = (target, onContact) => {
  const norm =
    target === "services" ? "solutions" :
    target === "about" ? "culture" :
    target;

  if (norm === "contact" || norm === "/talk") {
    if (window.location.pathname !== "/talk") {
      window.history.pushState({}, "", "/talk");
      window.dispatchEvent(new Event("popstate"));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (norm === "/careers") {
    if (window.location.pathname !== "/careers") {
      window.history.pushState({}, "", "/careers");
      window.dispatchEvent(new Event("popstate"));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (norm === "/" || norm === "top" || norm === "home") {
    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new Event("popstate"));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // Anchor targets on the home page (e.g. "solutions" / Services, "culture" / About, "faq", etc.)
  if (window.location.pathname !== "/") {
    try {
      sessionStorage.setItem("hs_pending_scroll", norm);
    } catch (e) {}
    window.history.pushState({}, "", `/#${norm}`);
    window.dispatchEvent(new Event("popstate"));

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (executeScrollTo(norm) || attempts > 30) {
        clearInterval(interval);
      }
    }, 40);
    return;
  }

  // Already on home page: execute scroll directly
  executeScrollTo(norm);
};

export const ArrowRight = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Dark pill button used throughout (reference `.secondary`). */
export const PillButton = ({ children, onClick, className = "", testId, type = "button" }) => (
  <button
    type={type}
    onClick={onClick}
    data-testid={testId}
    className={`pill-btn group inline-flex items-center gap-4 rounded-full bg-ly-black text-white font-gilroy font-medium text-base md:text-lg px-6 md:px-8 py-3 md:py-[13px] transition-all duration-300 ease-out hover:bg-ly-yellow hover:text-ly-black shadow-sm active:scale-95 ${className}`}
  >
    {children}
    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
  </button>
);

export const SectionHeading = ({ title, subtitle, light = false, className = "" }) => (
  <div className={className}>
    <h2 className={`font-gilroy font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] tracking-tight ${light ? "text-white" : "text-ly-black"}`}>{title}</h2>
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center mt-1.5">
      <p className={`font-inter font-normal text-sm sm:text-base md:text-lg whitespace-nowrap ${light ? "text-white/85" : "text-ly-gray"}`}>{subtitle}</p>
      <span className="h-px w-full md:max-w-[273px] bg-ly-grey opacity-60" />
    </div>
  </div>
);

