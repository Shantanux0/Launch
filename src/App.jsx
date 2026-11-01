import React, { Component, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/site/Navbar";
import { HeroSection } from "./components/site/HeroSection";
import { ProcessSection } from "./components/site/ProcessSection";
import { WorkSection } from "./components/site/WorkSection";
import { CultureSection } from "./components/site/CultureSection";
import { ClientsSection } from "./components/site/ClientsSection";
import { CTASection } from "./components/site/CTASection";
import { FAQSection } from "./components/site/FAQSection";
import { Footer } from "./components/site/Footer";
import { ContactDialog } from "./components/site/ContactDialog";
import { BackToTop, Loader } from "./components/site/Extras";
import { executeScrollTo } from "./components/site/shared";
import { TalkPage } from "./pages/TalkPage";
import { CareersPage } from "./pages/CareersPage";
import { NotFoundPage } from "./pages/NotFoundPage";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <NotFoundPage
          error={this.state.error}
          onReset={() => window.location.reload()}
          onContact={() => {
            window.location.href = "/talk";
          }}
        />
      );
    }
    return this.props.children;
  }
}

const useCurrentPath = () => {
  const getPath = () => {
    if (typeof window === "undefined") return "/";
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

  return path;
};

const TopRouteProgressBar = ({ currentPath }) => {
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const t = setTimeout(() => setAnimating(false), 500);
    return () => clearTimeout(t);
  }, [currentPath]);

  if (!animating) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[6000] h-[3px] pointer-events-none overflow-hidden bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-ly-yellow via-amber-400 to-[#10B981] shadow-xs"
        initial={{ width: "0%", opacity: 1 }}
        animate={{ width: "100%", opacity: [1, 1, 0] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => {
    scrollToTarget("/talk");
  };
  const currentPath = useCurrentPath();

  // Handle direct scroll targets or instant scroll to top:
  useEffect(() => {
    let pending = null;
    try {
      pending = sessionStorage.getItem("hs_pending_scroll");
    } catch (e) {}

    if (pending) {
      sessionStorage.removeItem("hs_pending_scroll");
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (executeScrollTo(pending) || attempts > 25) {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentPath]);

  const renderCurrentPage = () => {
    if (currentPath === "/talk" || currentPath === "/contact") {
      return (
        <>
          <Loader key="talk-loader" duration={1200} />
          <TalkPage onContact={openContact} />
        </>
      );
    }
    if (currentPath === "/careers") {
      return (
        <>
          <Loader key="careers-loader" duration={1200} />
          <CareersPage onContact={openContact} />
        </>
      );
    }
    if (currentPath === "/" || currentPath === "" || currentPath === "/home") {
      return (
        <div className="App font-gilroy text-ly-black">
          <Loader key="home-loader" duration={1200} />
          <Navbar onContact={openContact} />
          <main className="overflow-x-clip">
            <HeroSection onContact={openContact} />
            <ProcessSection />
            <WorkSection onContact={openContact} />
            <CultureSection />
            <ClientsSection />
            <CTASection onContact={openContact} />
            <FAQSection onContact={openContact} />
          </main>
          <Footer onContact={openContact} />
          <BackToTop />
        </div>
      );
    }
    // Any unrecognized URL renders the friendly 404 Page!
    return <NotFoundPage onContact={openContact} />;
  };

  return (
    <ErrorBoundary>
      <TopRouteProgressBar currentPath={currentPath} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPath}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="w-full min-h-screen"
        >
          {renderCurrentPage()}
        </motion.div>
      </AnimatePresence>
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      <Toaster position="top-center" />
    </ErrorBoundary>
  );
}

export default App;
