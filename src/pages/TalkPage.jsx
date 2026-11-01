import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Mail, MessageCircle, Clock, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, MapPin, Instagram } from "lucide-react";
import { SnailMark } from "../components/site/SnailLogo";
import { SnailMascot } from "../components/site/SnailMascot";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { SERVICE_OPTIONS } from "../data/content";

const BACKEND_URL = (typeof process !== "undefined" && process.env?.REACT_APP_BACKEND_URL) || "";
const API = `${BACKEND_URL}/api`;

const STAGES = [
  "Have a new idea / Concept",
  "Ready to design & build MVP",
  "Upgrading an existing product",
  "Need dedicated ongoing tech support",
];

const BUDGETS = [
  "₹50k - ₹1.5L",
  "₹1.5L - ₹3L",
  "₹3L - ₹6L",
  "₹6L+",
  "Discuss with team",
];

export const TalkPage = ({ onContact }) => {
  const [selectedServices, setSelectedServices] = useState(["Website Development"]);
  const [stage, setStage] = useState(STAGES[0]);
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [busy, setBusy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (title) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? (prev.length > 1 ? prev.filter((s) => s !== title) : prev) : [...prev, title]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (BACKEND_URL) {
        await axios.post(`${API}/contact`, {
          ...form,
          services: selectedServices,
          stage,
          budget,
        });
      }
      setSubmitted(true);
      toast.success("Thank you! Your message has landed in our studio inbox.");
    } catch {
      toast.error("Couldn't send that right now. Please try again or reach out on WhatsApp.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="bg-white min-h-screen text-ly-black select-none">
      <Navbar onContact={onContact} />

      {/* Main Content */}
      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          {/* Header Banner */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <h1 className="font-gilroy font-light text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-ly-black">
              Let’s talk about what we can build, together.
            </h1>
            <p className="font-inter text-ly-gray text-base sm:text-lg md:text-xl font-normal mt-4 leading-relaxed">
              Whether you're starting from a napkin sketch or scaling a live software platform, we take the time to understand your vision and build dependable technology around it.
            </p>
          </div>

          {/* Form and Studio Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Comprehensive Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200/80 shadow-md">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-ly-yellow/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-ly-black" />
                  </div>
                  <h3 className="font-gilroy font-bold text-3xl sm:text-4xl text-ly-black mb-3">
                    Message Received!
                  </h3>
                  <p className="font-inter text-ly-gray text-base sm:text-lg max-w-md leading-relaxed mb-6">
                    Our team is reviewing your project details. You'll receive a personal reply in your inbox within 24 hours.
                  </p>
                  <p className="font-pen text-2xl text-ly-black mb-8">
                    "Slow, steady, and crafted with care." 🐌✨
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="font-gilroy font-medium text-sm rounded-full border border-ly-black px-6 py-2.5 hover:bg-ly-yellow transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Step 1: Services Selector */}
                  <div>
                    <label className="block font-gilroy font-semibold text-lg text-ly-black mb-1">
                      1. What services are you looking for?
                    </label>
                    <p className="font-inter text-xs sm:text-sm text-ly-gray mb-3.5">
                      Select all that apply to your project scope
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-2.5">
                      {SERVICE_OPTIONS.map((srv) => {
                        const active = selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`font-inter text-xs sm:text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                              active
                                ? "bg-ly-black text-white border-ly-black shadow-xs scale-[1.02]"
                                : "bg-ly-ivory text-ly-black border-gray-200 hover:border-ly-black/40 hover:bg-gray-100"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Project Stage */}
                  <div>
                    <label className="block font-gilroy font-semibold text-lg text-ly-black mb-1">
                      2. Where are you currently in the process?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                      {STAGES.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setStage(s)}
                          className={`font-inter text-left text-xs sm:text-sm px-4 py-3 rounded-2xl border transition-all cursor-pointer ${
                            stage === s
                              ? "border-ly-black bg-ly-yellow/15 font-medium text-ly-black shadow-xs ring-1 ring-ly-black"
                              : "border-gray-200 bg-white text-ly-gray hover:border-gray-300"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Contact Details */}
                  <div>
                    <label className="block font-gilroy font-semibold text-lg text-ly-black mb-3">
                      3. Tell us about yourself and your idea
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="font-inter text-xs text-ly-gray block mb-1">Your Name *</span>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Shantanu Kale"
                          className="w-full font-inter text-sm sm:text-base px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-ly-black focus:ring-1 focus:ring-ly-black transition-all"
                        />
                      </div>
                      <div>
                        <span className="font-inter text-xs text-ly-gray block mb-1">Email Address *</span>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="shantanu@company.com"
                          className="w-full font-inter text-sm sm:text-base px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-ly-black focus:ring-1 focus:ring-ly-black transition-all"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="font-inter text-xs text-ly-gray block mb-1">Phone or WhatsApp (Optional)</span>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full font-inter text-sm sm:text-base px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-ly-black focus:ring-1 focus:ring-ly-black transition-all"
                      />
                    </div>

                    <div className="mt-4">
                      <span className="font-inter text-xs text-ly-gray block mb-1">Project Summary &amp; Goals *</span>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us a bit about what you want to build, who it's for, and any specific timelines..."
                        className="w-full font-inter text-sm sm:text-base px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-ly-black focus:ring-1 focus:ring-ly-black transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={busy}
                      className="w-full group inline-flex items-center justify-center gap-3 bg-ly-black hover:bg-black text-white font-gilroy font-medium text-base sm:text-lg py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60 cursor-pointer"
                    >
                      <span>{busy ? "Sending Message..." : "Send Your Project Message"}</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <p className="font-inter text-xs text-ly-gray text-center mt-3 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      We respect your privacy. No pushy sales calls, strictly NDA-friendly.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Studio Info & Snail Illustration */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Snail Studio Cozy Card */}
              <div className="bg-gradient-to-br from-[#FFF9C4]/40 via-[#E8F5E9]/50 to-[#E1F5FE]/40 rounded-3xl p-6 sm:p-7 border border-gray-200/70 relative overflow-hidden">
                <div className="flex items-center justify-end mb-3">
                  <SnailMark className="w-7 h-7" />
                </div>
                <h3 className="font-gilroy font-semibold text-2xl text-ly-black tracking-tight">
                  Slow down. Let's make something remarkable.
                </h3>
                <p className="font-inter text-ly-gray text-sm mt-2 leading-relaxed">
                  We believe personal attention to detail and honest engineering advice lead to products that stand the test of time.
                </p>

                {/* Consultation Themed Illustration */}
                <div className="mt-5 rounded-2xl overflow-hidden border border-gray-200/60 shadow-xs relative group">
                  <img
                    src="/img/talk-consultation-illustration.jpg"
                    alt="HumStack friendly consultation with cute snail mascot"
                    className="w-full h-auto object-cover max-h-[240px] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/92 backdrop-blur-xs rounded-xl px-3 py-1.5 flex items-center justify-between border border-gray-200/60">
                    <span className="font-gilroy font-semibold text-xs text-ly-black">
                      1:1 Discovery &amp; Strategy
                    </span>
                    <span className="font-pen text-sm text-ly-black">No rushed code.</span>
                  </div>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-xs flex flex-col gap-4">
                <h4 className="font-gilroy font-semibold text-lg text-ly-black">
                  Direct Studio Channels
                </h4>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-ly-ivory/60 hover:bg-ly-ivory transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center text-ly-black shrink-0">
                    <Mail className="w-5 h-5 text-ly-black" />
                  </div>
                  <div>
                    <span className="font-inter text-xs text-ly-gray block">Email Us</span>
                    <a href="mailto:hello@humstack.in" className="font-gilroy font-semibold text-sm sm:text-base text-ly-black hover:underline">
                      hello@humstack.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-ly-ivory/60 hover:bg-ly-ivory transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center text-ly-black shrink-0">
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="font-inter text-xs text-ly-gray block">WhatsApp / Call</span>
                    <span className="font-gilroy font-semibold text-sm sm:text-base text-ly-black">
                      +91 98765 43210
                    </span>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/humstack.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-ly-ivory/60 hover:bg-ly-ivory transition-colors group cursor-pointer"
                  data-testid="contact-instagram-link"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center text-rose-500 shrink-0 group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <span className="font-inter text-xs text-ly-gray block">Instagram</span>
                    <span className="font-gilroy font-semibold text-sm sm:text-base text-ly-black group-hover:underline">
                      @humstack.in
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-ly-ivory/60 hover:bg-ly-ivory transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center text-ly-black shrink-0">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="font-inter text-xs text-ly-gray block">Response Guarantee</span>
                    <span className="font-inter font-medium text-xs sm:text-sm text-ly-black">
                      Reply guaranteed within 24 hours
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-ly-ivory/60 hover:bg-ly-ivory transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center text-ly-black shrink-0">
                    <MapPin className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <span className="font-inter text-xs text-ly-gray block">Studio Location</span>
                    <span className="font-inter font-medium text-xs sm:text-sm text-ly-black">
                      Pune, Maharashtra, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onContact={onContact} />
    </div>
  );
};

export default TalkPage;
