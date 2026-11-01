import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Heart, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { FOOTER_LINKS_A, FOOTER_LINKS_B } from "../../data/content";
import { ArrowRight, scrollToTarget } from "./shared";
import { SnailMark, HumStackMark } from "./SnailLogo";
import { SnailMascot } from "./SnailMascot";
import { FooterLandscape } from "./FooterLandscape";

const BACKEND_URL = (typeof process !== "undefined" && process.env?.REACT_APP_BACKEND_URL) || "";
const API = `${BACKEND_URL}/api`;

export const subscribeEmail = async (email) => {
  try {
    const { data } = await axios.post(`${API}/subscribe`, { email });
    return data.status;
  } catch (err) {
    if (!BACKEND_URL) {
      return "subscribed";
    }
    throw err;
  }
};

const Mailbox = () => (
  <div className="relative w-[140px] md:w-[180px]" aria-hidden="true">
    <svg viewBox="0 0 180 220" className="w-full h-auto">
      <circle cx="40" cy="190" r="60" fill="#5DBB3A" opacity="0.9" />
      <circle cx="110" cy="210" r="40" fill="#2FB36B" />
      <rect x="52" y="80" width="12" height="140" fill="#7FD3D1" />
      <path d="M50 90 C 50 60, 70 52, 100 52 L 150 52 L 150 110 L 50 110 Z" fill="#FAE100" />
      <path d="M150 52 C 166 52, 172 66, 172 80 L 172 110 L 150 110 Z" fill="#E3C600" />
      <rect x="160" y="40" width="4" height="30" fill="#F26B5B" />
      <rect x="160" y="40" width="14" height="10" fill="#F26B5B" />
    </svg>
    <div className="absolute top-[6%] left-[18%] w-[62%]">
      <SnailMascot className="w-full h-auto" testId="footer-snail-svg" />
    </div>
  </div>
);

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      const s = await subscribeEmail(email);
      toast.success(s === "already_subscribed" ? "Signing up twice? Thanks for so much love!" : "You are signed up! Watch your inbox.");
      setEmail("");
    } catch {
      toast.error("Error? Don't worry. Check your email and retry.");
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="bg-[#0F3B30] relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-4 md:px-16 pt-10 md:pt-14 pb-0">
        <div className="hidden md:block self-end"><Mailbox /></div>
        <div className="flex-1 md:pb-14">
          <p className="font-gilroy font-semibold text-white text-xl md:text-2xl max-w-[600px] leading-snug">Design solutions, trusted by 50s of businesses, delivered to your inbox.</p>
          <p className="font-inter text-white/80 text-sm mt-3">News, trends, case studies: you name it, you get it.</p>
        </div>
        <form onSubmit={submit} className="flex-1 flex flex-col gap-6 pb-12 md:pb-14" data-testid="footer-newsletter-form">
          <label className="flex flex-col">
            <span className="font-inter text-ly-grey text-sm">Email Address</span>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="bg-transparent border-b border-white text-white font-inter text-lg py-3 outline-none focus:border-ly-yellow transition-colors" data-testid="footer-newsletter-email" />
          </label>
          <button disabled={busy} className="group self-start flex items-center gap-4 rounded-full border border-white text-white font-gilroy font-medium text-base md:text-lg px-7 py-3 transition-colors duration-300 hover:bg-ly-yellow hover:text-ly-black hover:border-ly-yellow disabled:opacity-60" data-testid="footer-newsletter-submit">
            {busy ? "Signing up..." : "Sign me up!"} <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

const LinkCol = ({ links, onContact }) => (
  <div className="flex flex-col">
    {links.map((l) => (
      <button key={l.label} onClick={() => scrollToTarget(l.target, onContact)} className="text-left font-inter text-white/85 text-sm md:text-base leading-[2.1] hover:text-ly-yellow transition-colors duration-300" data-testid={`footer-link-${l.label.toLowerCase()}`}>
        {l.label}
      </button>
    ))}
  </div>
);

export const Footer = ({ onContact }) => (
  <footer id="footer" className="relative z-20" data-testid="footer">
    <div className="bg-ly-ivory"><FooterLandscape className="w-full h-auto block" /></div>
    <div className="bg-gradient-to-b from-[#2E9B3E] via-[#0C8A55] to-[#077A50] px-4 md:px-16 pb-16 md:pb-24 -mt-px">
      <div className="flex flex-col lg:flex-row lg:justify-end border-b border-white/40 lg:border-none pb-6">
        <div className="lg:basis-[49%]">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col" data-testid="footer-brand">
              <span className="font-gilroy font-bold text-3xl md:text-[44px] tracking-[0.06em] text-white">HumStack</span>
            </div>
            <HumStackMark className="h-14 w-14 md:h-18 md:w-18 snail-mark-wiggle bg-white rounded-full shadow-md" />
          </div>
          <p className="flex items-center gap-2 mt-3 md:mt-4 font-inter text-xs md:text-sm text-white/80">Designed with love <Heart className="w-4 h-4 fill-ly-yellow text-ly-yellow" /></p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-10 pt-8 md:pt-10">
        <div className="grid grid-cols-2 gap-x-6 md:gap-x-16 lg:basis-[35%]">
          <LinkCol links={FOOTER_LINKS_A} onContact={onContact} />
          <LinkCol links={FOOTER_LINKS_B} onContact={onContact} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:basis-[49%] text-white font-inter">
          <div>
            <p className="text-sm text-white/80">humstack.in</p>
            <p className="mt-3 text-base" data-testid="footer-address">Pune, Maharashtra, India</p>
            <button onClick={onContact} className="mt-6 text-base underline underline-offset-4 decoration-ly-yellow hover:text-ly-yellow transition-colors" data-testid="footer-message-btn">Send us a message</button>
          </div>
          <div>
            <p className="text-base">We're quite social savvy</p>
            <div className="flex gap-3 mt-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/humstack.in/", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/humstack", label: "LinkedIn" },
                { Icon: Twitter, href: "https://twitter.com/humstack", label: "Twitter" },
                { Icon: Youtube, href: "https://youtube.com/@humstack", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-[#0F3B30] hover:bg-ly-yellow hover:text-ly-black text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  aria-label={`HumStack on ${label}`}
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Newsletter />
  </footer>
);

export default Footer;

