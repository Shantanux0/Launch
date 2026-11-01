import React from "react";
import { motion } from "framer-motion";
import { SnailMascot } from "../components/site/SnailMascot";
import { SnailMark } from "../components/site/SnailLogo";
import { Home, MessageSquare, RefreshCw } from "lucide-react";
import { scrollToTarget } from "../components/site/shared";

export const NotFoundPage = ({ error = null, onReset = null, onContact = null }) => {
  const isError = Boolean(error);

  const goHome = () => {
    scrollToTarget("/");
  };

  const goTalk = () => {
    scrollToTarget("/talk", onContact);
  };

  return (
    <div className="min-h-screen bg-white text-ly-black flex flex-col justify-between select-none relative overflow-hidden">
      {/* Top minimal header */}
      <header className="px-6 md:px-16 py-6 flex items-center justify-between border-b border-gray-100 relative z-20">
        <button onClick={goHome} className="flex items-center gap-2.5 cursor-pointer">
          <SnailMark className="w-9 h-9" />
          <span className="font-gilroy font-semibold text-lg tracking-[0.16em] text-ly-black">
            HUMSTACK
          </span>
        </button>

        <button
          onClick={goTalk}
          className="font-gilroy text-sm font-medium px-5 py-2 rounded-full border border-ly-black hover:bg-ly-yellow transition-colors cursor-pointer"
        >
          Let's Talk
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          {/* Giant backdrop numbers */}
          <div className="font-gilroy font-light text-[100px] sm:text-[140px] md:text-[170px] leading-none text-gray-100 select-none -mb-16 md:-mb-24">
            {isError ? "500" : "404"}
          </div>

          {/* Animated Swirling Snail Mascot */}
          <motion.div
            animate={{
              rotate: [-3, 5, -2, 4, 0],
              y: [0, -10, 0],
              scale: [1, 1.05, 0.96, 1],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-48 sm:w-60 md:w-72 h-auto relative mb-4 drop-shadow-md cursor-pointer"
            onClick={goHome}
            title="Click to crawl home!"
          >
            <SnailMascot className="w-full h-auto" animated={true} trail={true} />

            {/* Swirling sparkles around snail */}
            <motion.span
              animate={{
                scale: [0.8, 1.3, 0.8],
                rotate: [0, 180, 360],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute -top-3 -right-2 text-2xl select-none"
            >
              ✨
            </motion.span>
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                y: [0, -6, 0],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{ duration: 2.4, repeat: Infinity, delay: 0.8 }}
              className="absolute bottom-2 -left-3 text-lg select-none"
            >
              🌿
            </motion.span>
          </motion.div>

          {/* Snail message in font-pen as requested */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-pen text-3xl sm:text-4xl md:text-5xl text-ly-black leading-snug px-4 max-w-xl"
          >
            {isError
              ? '"Oops! Even strong shells hit a rough bump..."'
              : '"Looks like this little shell took a wrong turn in the garden!"'}
          </motion.h1>

          <p className="font-inter text-ly-gray text-base sm:text-lg mt-3 sm:mt-4 max-w-md leading-relaxed px-4">
            {isError
              ? (error?.message || "Something unexpected happened behind the scenes. Don't worry, our team has been notified.")
              : "We couldn't find the page you crawled looking for. Slow down, breathe, and let's head back home together."}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {isError && onReset ? (
              <button
                onClick={onReset}
                className="group inline-flex items-center gap-2 bg-ly-black text-white font-gilroy font-medium text-sm sm:text-base px-6 py-3 rounded-full hover:bg-black transition-all shadow-md cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 transition-transform group-hover:rotate-180 duration-500" />
                <span>Reload Page</span>
              </button>
            ) : (
              <button
                onClick={goHome}
                className="group inline-flex items-center gap-2.5 bg-ly-black text-white font-gilroy font-medium text-sm sm:text-base px-7 py-3 rounded-full hover:bg-ly-yellow hover:text-ly-black transition-all duration-300 shadow-md cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Crawl Back Home</span>
              </button>
            )}

            <button
              onClick={goTalk}
              className="inline-flex items-center gap-2 bg-ly-ivory text-ly-black font-gilroy font-medium text-sm sm:text-base px-6 py-3 rounded-full border border-gray-200 hover:border-ly-black transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Let's Talk</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer credit */}
      <footer className="py-4 text-center border-t border-gray-100 font-inter text-xs text-ly-gray">
        HumStack • Turning ideas into working technology
      </footer>
    </div>
  );
};

export default NotFoundPage;

