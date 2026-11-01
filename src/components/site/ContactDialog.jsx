import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ArrowRight } from "./shared";
import { SnailMascot } from "./SnailMascot";

const BACKEND_URL = (typeof process !== "undefined" && process.env?.REACT_APP_BACKEND_URL) || "";
const API = `${BACKEND_URL}/api`;
const EMPTY = { name: "", email: "", message: "" };

export const ContactDialog = ({ open, onOpenChange }) => {
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);

    const recipient = "hello@humstack.in";
    const subject = `Message from ${form.name.trim()} - HumStack`;
    const body = `Hello HumStack Team,

• Name: ${form.name.trim()}
• Email: ${form.email.trim()}

• Message:
${form.message.trim()}

--------------------------------------------------
Sent via HumStack.in contact form`;

    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      if (BACKEND_URL) {
        axios.post(`${API}/contact`, form).catch(() => {});
      }
      const a = document.createElement("a");
      a.href = mailto;
      a.target = "_self";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setSent(true);
      setForm(EMPTY);
      toast.success("Email client opened! Please click 'Send' in your mail app.");
    } catch {
      window.location.href = mailto;
    } finally {
      setBusy(false);
    }
  };

  const change = (v) => {
    onOpenChange(v);
    if (!v) setTimeout(() => setSent(false), 300);
  };

  return (
    <Dialog open={open} onOpenChange={change}>
      <DialogContent className="z-[6000] max-w-[930px] w-[calc(100%-2rem)] rounded-[16px] md:rounded-[24px] p-5 md:p-8 bg-white" data-testid="contact-dialog">
        <div className="flex items-start justify-between gap-4 pr-8">
          <div>
            <DialogTitle className="font-gilroy font-normal text-[20px] md:text-[32px] text-[#1E1E1E] leading-tight">You bring an idea, we make it happen!</DialogTitle>
            <DialogDescription className="font-inter text-ly-gray text-sm md:text-base mt-2">Send us a short message and the humstack team will reply.</DialogDescription>
          </div>
          <div className="hidden md:block w-28 shrink-0 snail-hover"><SnailMascot className="w-full h-auto" testId="dialog-snail-svg" /></div>
        </div>

        {sent ? (
          <div className="border rounded-[16px] p-8 md:p-10 flex flex-col items-start gap-4" data-testid="contact-success">
            <p className="font-pen text-3xl md:text-4xl text-ly-black">Got it! Your message is on its way.</p>
            <p className="font-inter text-ly-gray">We'll be waiting :) Expect a reply in your inbox.</p>
            <button onClick={() => setSent(false)} className="font-gilroy rounded-full border border-ly-black px-6 py-2 hover:bg-ly-yellow transition-colors" data-testid="contact-send-another">Send another</button>
          </div>
        ) : (
          <form onSubmit={submit} className="border rounded-[16px] p-4 md:p-6 flex flex-col gap-4" data-testid="contact-form">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="font-gilroy text-sm text-ly-tertiary">Your name</span>
                <Input required value={form.name} onChange={set("name")} className="h-12 text-base" data-testid="contact-name-input" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-gilroy text-sm text-ly-tertiary">Email</span>
                <Input required type="email" value={form.email} onChange={set("email")} className="h-12 text-base" data-testid="contact-email-input" />
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="font-gilroy text-sm text-ly-tertiary">Tell us about your idea</span>
              <Textarea required rows={4} value={form.message} onChange={set("message")} className="text-base resize-none" data-testid="contact-message-input" />
            </label>
            <button type="submit" disabled={busy} className="group self-start flex items-center gap-6 rounded-full bg-ly-black text-white font-gilroy text-base md:text-lg px-6 md:px-8 h-12 md:h-14 transition-colors duration-300 hover:bg-ly-yellow hover:text-ly-black disabled:opacity-60" data-testid="contact-submit-btn">
              {busy ? "Sending..." : "Send Message"} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;

