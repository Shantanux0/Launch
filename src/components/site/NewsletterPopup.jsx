import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { X } from "lucide-react";
import { ArrowRight } from "./shared";
import { subscribeEmail } from "./Footer";

/** Floating newsletter bar from the reference: appears after a short delay, expands to an email field. */
export const NewsletterPopup = () => {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("hs-news-closed")) return;
    const t = setTimeout(() => setShow(true), 9000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setShow(false);
    sessionStorage.setItem("hs-news-closed", "1");
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!expanded) return setExpanded(true);
    try {
      const s = await subscribeEmail(email);
      setStatus(s);
      setTimeout(close, 3500);
    } catch {
      toast.error("Error? Don't worry. Check your email and retry.");
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 md:bottom-12 inset-x-0 z-[4000] flex justify-center px-4 pointer-events-none"
          data-testid="newsletter-popup"
        >
          <div className="relative bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] px-4 py-4 pointer-events-auto max-w-[889px] w-full md:w-auto">
            {status ? (
              <p className="font-gilroy text-sm md:text-xl text-ly-black" data-testid="newsletter-popup-status">
                {status === "already_subscribed" ? "Signing up twice to our newsletter? Thanks for so much love!" : "You are signed up! A surprise is awaiting you in your email."}
              </p>
            ) : (
              <form onSubmit={submit} className="flex gap-3 md:gap-6 items-center">
                {expanded ? (
                  <label className="flex flex-col w-full md:w-[354px]">
                    <span className="font-gilroy text-ly-tertiary text-sm">Email</span>
                    <input autoFocus required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-b border-ly-black text-base md:text-xl outline-none py-1" data-testid="newsletter-popup-email" />
                  </label>
                ) : (
                  <p className="font-gilroy text-sm md:text-xl text-ly-black">Design solutions, trusted by 100s of businesses, delivered to your inbox.</p>
                )}
                <button type="submit" className="group shrink-0 flex items-center gap-2 md:gap-6 rounded-full bg-ly-yellow font-gilroy text-[11px] md:text-base px-[13px] md:px-6 py-[7px] md:py-4 transition-transform hover:scale-[1.03]" data-testid="newsletter-popup-signup">
                  Sign Me Up <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
            <button onClick={close} className="absolute -top-3 -right-3 w-6 h-6 md:w-8 md:h-8 rounded-full bg-ly-yellow flex items-center justify-center" aria-label="Close" data-testid="newsletter-popup-close">
              <X className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;

