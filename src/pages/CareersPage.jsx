import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  Sparkles,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Heart,
  BookOpen,
  Coffee,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Send,
  X,
  Mail,
  Paperclip,
  ShieldCheck
} from "lucide-react";
import { SnailMark } from "../components/site/SnailLogo";
import { SnailMascot } from "../components/site/SnailMascot";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";

const CULTURE_PILLARS = [
  {
    title: "Thoughtful Craft over Rush",
    desc: "We take immense pride in building shell-strong architecture and joyful, accessible designs. Quality is never traded for quick hacks.",
    icon: Sparkles,
  },
  {
    title: "Remote-First Autonomy",
    desc: "Work from wherever you feel inspired and energized. We respect your focus hours and organize around asynchronous communication.",
    icon: MapPin,
  },
  {
    title: "Continuous Learning",
    desc: "Weekly Learning Saturdays, book stipends, and dedicated exploration time to build side-projects and experiment with AI tools.",
    icon: BookOpen,
  },
  {
    title: "Holistic Wellness",
    desc: "Sensible project deadlines, zero weekend crunch culture, and genuine respect for your family, hobbies, and downtime.",
    icon: Heart,
  },
];

const AvatarSvg = ({ type = "guy-glasses", color = "#059669" }) => {
  switch (type) {
    case "guy-glasses":
      return (
        <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16" fill="none">
          <path d="M26 32 C 24 20, 36 12, 54 16 C 58 22, 58 32, 56 38 Z" fill="#1E293B" />
          <ellipse cx="40" cy="40" rx="14" ry="16" fill="#FDE6D2" />
          <path d="M26 32 C 28 20, 52 18, 54 28 C 50 25, 34 26, 26 32 Z" fill="#1E293B" />
          <circle cx="35" cy="39" r="4.5" stroke="#1E293B" strokeWidth="1.8" fill="none" />
          <circle cx="45" cy="39" r="4.5" stroke="#1E293B" strokeWidth="1.8" fill="none" />
          <line x1="39.5" y1="39" x2="40.5" y2="39" stroke="#1E293B" strokeWidth="1.8" />
          <circle cx="35" cy="39" r="1.2" fill="#1E293B" />
          <circle cx="45" cy="39" r="1.2" fill="#1E293B" />
          <path d="M37 47 Q 40 50 43 47" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <rect x="36" y="54" width="8" height="6" fill="#FCD5B5" />
          <path d="M24 68 C 24 59, 33 58, 40 58 C 47 58, 56 59, 56 68 Z" fill={color} />
        </svg>
      );
    case "girl-bun":
      return (
        <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16" fill="none">
          <circle cx="40" cy="14" r="8" fill="#1E293B" />
          <circle cx="40" cy="32" r="17" fill="#1E293B" />
          <ellipse cx="40" cy="40" rx="13" ry="15" fill="#FDE6D2" />
          <path d="M28 32 C 32 26, 48 26, 52 32 C 46 29, 34 29, 28 32 Z" fill="#1E293B" />
          <circle cx="35" cy="39" r="1.5" fill="#1E293B" />
          <circle cx="45" cy="39" r="1.5" fill="#1E293B" />
          <circle cx="32" cy="43" r="2.2" fill="#FCA5A5" opacity="0.6" />
          <circle cx="48" cy="43" r="2.2" fill="#FCA5A5" opacity="0.6" />
          <path d="M37 46 Q 40 49 43 46" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <rect x="36" y="53" width="8" height="6" fill="#FCD5B5" />
          <path d="M25 68 C 25 58, 33 57, 40 57 C 47 57, 55 58, 55 68 Z" fill={color} />
        </svg>
      );
    case "guy-beard":
      return (
        <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16" fill="none">
          <path d="M26 34 C 24 18, 56 18, 54 34 Z" fill="#1E293B" />
          <ellipse cx="40" cy="40" rx="14" ry="16" fill="#FDE6D2" />
          <path d="M33 34 Q 36 33 38 34" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M42 34 Q 44 33 47 34" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="35" cy="38" r="1.5" fill="#1E293B" />
          <circle cx="45" cy="38" r="1.5" fill="#1E293B" />
          <path d="M31 43 C 31 55, 49 55, 49 43 C 45 46, 35 46, 31 43 Z" fill="#1E293B" />
          <path d="M37 46 Q 40 48 43 46" stroke="#FDE6D2" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          <path d="M24 68 C 24 59, 33 58, 40 58 C 47 58, 56 59, 56 68 Z" fill={color} />
        </svg>
      );
    case "girl-curly":
      return (
        <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16" fill="none">
          <circle cx="30" cy="30" r="10" fill="#1E293B" />
          <circle cx="50" cy="30" r="10" fill="#1E293B" />
          <circle cx="26" cy="42" r="9" fill="#1E293B" />
          <circle cx="54" cy="42" r="9" fill="#1E293B" />
          <circle cx="40" cy="22" r="10" fill="#1E293B" />
          <ellipse cx="40" cy="40" rx="13" ry="15" fill="#FDE6D2" />
          <circle cx="35" cy="38" r="1.5" fill="#1E293B" />
          <circle cx="45" cy="38" r="1.5" fill="#1E293B" />
          <path d="M37 46 Q 40 49 43 46" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <rect x="36" y="53" width="8" height="6" fill="#FCD5B5" />
          <path d="M25 68 C 25 58, 33 57, 40 57 C 47 57, 55 58, 55 68 Z" fill={color} />
        </svg>
      );
    case "guy-beanie":
      return (
        <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16" fill="none">
          <path d="M27 30 C 27 18, 53 18, 53 30 Z" fill="#E11D48" />
          <rect x="25" y="28" width="30" height="4" rx="2" fill="#BE123C" />
          <ellipse cx="40" cy="42" rx="13" ry="14" fill="#FDE6D2" />
          <circle cx="35" cy="40" r="1.5" fill="#1E293B" />
          <circle cx="45" cy="40" r="1.5" fill="#1E293B" />
          <path d="M37 48 Q 40 51 43 48" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <rect x="36" y="54" width="8" height="6" fill="#FCD5B5" />
          <path d="M25 68 C 25 59, 33 58, 40 58 C 47 58, 55 59, 55 68 Z" fill={color} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16" fill="none">
          <path d="M26 32 C 26 18, 54 18, 54 32 Z" fill="#1E293B" />
          <ellipse cx="40" cy="40" rx="13" ry="15" fill="#FDE6D2" />
          <circle cx="35" cy="38" r="1.5" fill="#1E293B" />
          <circle cx="45" cy="38" r="1.5" fill="#1E293B" />
          <path d="M37 46 Q 40 49 43 46" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <rect x="36" y="53" width="8" height="6" fill="#FCD5B5" />
          <path d="M25 68 C 25 58, 33 57, 40 57 C 47 57, 55 58, 55 68 Z" fill={color} />
        </svg>
      );
  }
};

const DEPARTMENT_ROLES = [
  {
    category: "UI UX Design",
    roles: [
      { name: "UI designers", avatar: "guy-glasses", color: "#059669", hiring: true, roleId: "uiux-designer" },
      { name: "UX designers", avatar: "girl-bun", color: "#10B981", hiring: false },
      { name: "UX researchers", avatar: "guy-smile", color: "#047857", hiring: true, roleId: "uiux-designer" },
      { name: "Design managers", avatar: "girl-curly", color: "#065F46", hiring: false },
    ],
  },
  {
    category: "Marketing",
    roles: [
      { name: "Content writers", avatar: "girl-bun", color: "#10B981", hiring: false },
      { name: "SEO executives", avatar: "girl-curly", color: "#059669", hiring: false },
      { name: "Digital marketing managers", avatar: "guy-beard", color: "#047857", hiring: false },
    ],
  },
  {
    category: "Development",
    roles: [
      { name: "Frontend developers", avatar: "guy-beanie", color: "#059669", hiring: true, roleId: "frontend-eng" },
      { name: "Backend developers", avatar: "girl-curly", color: "#10B981", hiring: true, roleId: "backend-cloud" },
      { name: "Full stack developers", avatar: "guy-glasses", color: "#047857", hiring: true, roleId: "backend-cloud" },
      { name: "QA test engineer", avatar: "guy-smile", color: "#065F46", hiring: false },
    ],
  },
  {
    category: "Business & Innovation",
    roles: [
      { name: "AI specialists", avatar: "girl-bun", color: "#F59E0B", hiring: true, roleId: "ai-engineer" },
      { name: "Growth leads", avatar: "guy-beard", color: "#059669", hiring: false },
      { name: "Tech apprentices", avatar: "guy-glasses", color: "#EAB308", hiring: true, roleId: "apprentice-intern" },
    ],
  },
];

const OPEN_ROLES = [
  {
    id: "frontend-eng",
    title: "Senior Frontend Engineer",
    dept: "Engineering",
    type: "Full-time",
    exp: "2 - 4 years",
    location: "Remote (India)",
    summary: "Lead the frontend architecture of high-polish web applications, fluid micro-interactions, and reactive user interfaces using React, Next.js, and Tailwind CSS.",
    responsibilities: [
      "Translate Figma design systems into pixel-perfect, accessible, and performant React components.",
      "Build delightful animations and micro-interactions using Framer Motion.",
      "Collaborate closely with backend engineers on clean RESTful and WebSocket API integrations.",
      "Write clean, maintainable, and well-tested code that scales gracefully.",
    ],
    requirements: [
      "2+ years of professional experience with modern React, JavaScript/TypeScript, and Tailwind CSS.",
      "Deep understanding of responsive layout techniques, CSS animations, and web accessibility.",
      "Passion for typography, spacing, and micro-interactions.",
      "Comfortable working asynchronously in a collaborative remote team.",
    ],
  },
  {
    id: "uiux-designer",
    title: "UI / UX Designer",
    dept: "Design",
    type: "Full-time",
    exp: "1 - 3 years",
    location: "Remote (India)",
    summary: "Craft intuitive user journeys, wireframes, visual design systems, and delightful interaction prototypes for our startups, founders, and enterprise partners.",
    responsibilities: [
      "Conduct user research, journey mapping, and information architecture design.",
      "Design modern, high-fidelity UI screens in Figma with robust reusable component variants.",
      "Define motion guidelines and interactive states for key moments of delight.",
      "Partner with engineers during handoff to ensure design integrity throughout the build.",
    ],
    requirements: [
      "Proven portfolio showcasing thoughtful product design, typography, and clear design rationale.",
      "Proficiency with Figma, Auto Layout, and design system maintenance.",
      "Strong empathetic communication and ability to present design decisions.",
    ],
  },
  {
    id: "backend-cloud",
    title: "Fullstack / Backend Developer",
    dept: "Engineering",
    type: "Full-time",
    exp: "2 - 5 years",
    location: "Remote (India)",
    summary: "Architect reliable backend services, database schemas, secure APIs, and deployment pipelines across modern cloud platforms.",
    responsibilities: [
      "Design and maintain scalable APIs using Python (FastAPI/Django) or Node.js.",
      "Model PostgreSQL and MongoDB databases with emphasis on performance and security.",
      "Set up containerized deployments with Docker, CI/CD, and cloud infrastructure.",
      "Implement real-time features, background worker queues, and third-party API integrations.",
    ],
    requirements: [
      "Solid foundation in Python or Node.js with production experience.",
      "Experience with relational databases, indexing, and query optimization.",
      "Familiarity with cloud hosting (AWS / GCP / VPS), Docker, and Git workflows.",
    ],
  },
  {
    id: "ai-engineer",
    title: "AI & Automation Specialist",
    dept: "AI Solutions",
    type: "Full-time",
    exp: "1 - 3 years",
    location: "Remote (India)",
    summary: "Build intelligent agent workflows, chatbot solutions, RAG pipelines, and automated business tools using state-of-the-art LLMs and APIs.",
    responsibilities: [
      "Develop conversational agents, customer support bots, and internal workflow automations.",
      "Integrate vector databases, embeddings, and prompt orchestration frameworks.",
      "Benchmark model accuracy, latency, and cost efficiency across LLM providers.",
    ],
    requirements: [
      "Hands-on experience with LLM APIs (OpenAI, Anthropic, Gemini, open-source models).",
      "Proficiency in Python and API integration.",
      "Curiosity about agentic workflows, function calling, and structured outputs.",
    ],
  },
  {
    id: "apprentice-intern",
    title: "Engineering & Design Apprentice",
    dept: "Internship",
    type: "Paid Internship (6 months)",
    exp: "Freshers / Students",
    location: "Remote (India)",
    summary: "A paid learning apprenticeship designed for passionate college students and recent graduates eager to master real-world product craft alongside experienced mentors.",
    responsibilities: [
      "Build real production features under 1-on-1 guidance from senior engineers and designers.",
      "Participate in code reviews, design critiques, and weekly tech deep-dives.",
      "Opportunity for permanent full-time conversion upon completion.",
    ],
    requirements: [
      "Demonstrated personal projects (GitHub, Figma files, or personal websites).",
      "Eagerness to learn, ask thoughtful questions, and receive constructive feedback.",
    ],
  },
];

export const CareersPage = ({ onContact }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applyingRole, setApplyingRole] = useState(null);
  const [applicant, setApplicant] = useState({ name: "", email: "", portfolio: "", note: "", cvFile: null });
  const [busy, setBusy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedRole, setSubmittedRole] = useState(null);
  const [mailtoUrl, setMailtoUrl] = useState("");

  const openApply = (role) => {
    setApplyingRole(role);
    setSubmitted(false);
    setSubmittedRole(null);
    setMailtoUrl("");
    setApplyModalOpen(true);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setBusy(true);

    const roleTitle = applyingRole?.title || "General Application";
    const recipient = "hello@humstack.in";
    const subject = `Job Application: ${roleTitle} - ${applicant.name.trim()}`;
    const cvNotice = applicant.cvFile
      ? `• Attached Resume/CV: ${applicant.cvFile.name} (Please see attached PDF)`
      : `• Resume/CV: [Attached PDF file]`;

    const body = `Hello HumStack Hiring Team,

I would like to apply for the ${roleTitle} position at HumStack.

Here are my application details:

• Full Name: ${applicant.name.trim()}
• Email: ${applicant.email.trim()}
• Portfolio / GitHub / LinkedIn: ${applicant.portfolio.trim()}
${cvNotice}

• Why HumStack?
${applicant.note.trim() || "Excited to contribute to thoughtful technology at HumStack."}

--------------------------------------------------
[Note: Please ensure your Resume/CV PDF is attached to this email before clicking Send!]
Sent via HumStack.in Careers portal`;

    const url = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailtoUrl(url);

    // Trigger user's mail client:
    try {
      const a = document.createElement("a");
      a.href = url;
      a.target = "_self";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      window.location.href = url;
    }

    setSubmittedRole(applyingRole);
    setSubmitted(true);
    setBusy(false);
    toast.success("Email client opened! Please attach your CV PDF and click Send.");
  };

  return (
    <div className="bg-white min-h-screen text-ly-black select-none">
      <Navbar onContact={onContact} />

      {/* Hero Section */}
      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          {/* Header Copy */}
          <div className="max-w-3xl mb-12">
            <h1 className="font-gilroy font-light text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-ly-black">
              Build technology that matters, at a pace that lasts.
            </h1>
            <p className="font-inter text-ly-gray text-base sm:text-lg md:text-xl font-normal mt-4 leading-relaxed">
              We are a creative technology company founded on the belief that great craft requires focus, kindness, and steady dedication — not burnout culture.
            </p>
          </div>

          {/* Featured Generated Theme Illustration */}
          <div className="mb-16 md:mb-24 rounded-3xl overflow-hidden border border-gray-200/80 shadow-md relative bg-gradient-to-r from-sky-50 via-white to-emerald-50">
            <img
              src="/img/careers-team-illustration.jpg"
              alt="HumStack creative team working together with cute snail mascot"
              className="w-full h-auto max-h-[500px] object-cover object-center"
            />
          </div>

          {/* 4 Cultural Pillars */}
          <div className="mb-16 md:mb-24">
            <div className="mb-8 md:mb-10">
              <h2 className="font-gilroy font-semibold text-3xl sm:text-4xl text-ly-black tracking-tight">
                Our Work Principles
              </h2>
              <p className="font-inter text-ly-gray text-base mt-2">
                What it feels like to build software at HumStack every day
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CULTURE_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-ly-yellow/30 flex items-center justify-center mb-5 text-ly-black">
                        <Icon className="w-6 h-6 text-ly-black" />
                      </div>
                      <h3 className="font-gilroy font-semibold text-xl text-ly-black mb-2">
                        {pillar.title}
                      </h3>
                      <p className="font-inter text-ly-gray text-sm leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Department Roles Grid matching reference layout */}
          <div className="mb-20 md:mb-28">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-2 gap-2">
              <h2 className="font-gilroy font-light text-3xl sm:text-4xl text-ly-black tracking-tight">
                Teams &amp; Disciplines
              </h2>
              <span className="font-inter text-xs sm:text-sm text-ly-gray flex items-center gap-1.5">
                <span className="text-ly-black font-bold text-base leading-none">*</span> We are actively hiring for starred roles
              </span>
            </div>

            <div className="flex flex-col">
              {DEPARTMENT_ROLES.map((dept) => (
                <div
                  key={dept.category}
                  className="border-t border-gray-200/90 py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  <div className="lg:col-span-4">
                    <h3 className="font-gilroy font-normal text-2xl sm:text-3xl text-ly-black tracking-tight">
                      {dept.category}
                    </h3>
                  </div>

                  <div className="lg:col-span-8 flex flex-wrap gap-8 sm:gap-12 items-start">
                    {dept.roles.map((r) => (
                      <div
                        key={r.name}
                        onClick={() => {
                          if (r.roleId) {
                            setSelectedRole(r.roleId);
                            const el = document.getElementById("open-roles");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className={`flex flex-col items-center text-center group ${
                          r.hiring ? "cursor-pointer" : "cursor-default"
                        }`}
                        title={r.hiring ? `View opening for ${r.name}` : r.name}
                      >
                        <div className="relative mb-2.5 transition-transform duration-300 group-hover:scale-105">
                          <AvatarSvg type={r.avatar} color={r.color} />
                          {r.hiring && (
                            <span className="absolute -top-1 -right-2 text-xl font-bold text-ly-black select-none leading-none">
                              *
                            </span>
                          )}
                        </div>
                        <span
                          className={`font-inter text-xs sm:text-sm max-w-[110px] leading-snug transition-colors ${
                            r.hiring
                              ? "text-ly-black font-semibold group-hover:text-amber-600"
                              : "text-ly-gray font-normal"
                          }`}
                        >
                          {r.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions Job Board */}
          <div id="open-roles" className="mb-16 md:mb-24 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-10 gap-4">
              <div>
                <span className="font-gilroy font-bold text-xs uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 mb-2 inline-block">
                  Now Hiring
                </span>
                <h2 className="font-gilroy font-semibold text-3xl sm:text-4xl text-ly-black tracking-tight">
                  Open Opportunities
                </h2>
              </div>
              <span className="font-inter text-sm text-ly-gray">
                {OPEN_ROLES.length} active openings available
              </span>
            </div>

            {/* Roles Accordion List */}
            <div className="flex flex-col gap-4">
              {OPEN_ROLES.map((role) => {
                const isExpanded = selectedRole === role.id;
                return (
                  <div
                    key={role.id}
                    className="bg-white rounded-2xl border border-gray-200/80 shadow-xs transition-all overflow-hidden"
                  >
                    {/* Role Header */}
                    <button
                      onClick={() => setSelectedRole(isExpanded ? null : role.id)}
                      className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/70 transition-colors"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="font-inter text-xs font-semibold px-2.5 py-0.5 rounded-full bg-ly-ivory text-ly-black border border-gray-200">
                            {role.dept}
                          </span>
                          <span className="font-inter text-xs text-ly-gray">
                            {role.type} • {role.exp}
                          </span>
                        </div>
                        <h3 className="font-gilroy font-semibold text-xl sm:text-2xl text-ly-black">
                          {role.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-4 shrink-0">
                        <span className="hidden sm:inline-flex items-center gap-1 font-inter text-xs text-ly-gray">
                          <MapPin className="w-3.5 h-3.5" />
                          {role.location}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-ly-ivory flex items-center justify-center text-ly-black">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </div>
                    </button>

                    {/* Role Expanded Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6 pt-2 border-t border-gray-100"
                        >
                          <p className="font-inter text-ly-gray text-base leading-relaxed mb-6">
                            {role.summary}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <h4 className="font-gilroy font-semibold text-sm text-ly-black uppercase tracking-wider mb-3">
                                What you'll do:
                              </h4>
                              <ul className="flex flex-col gap-2">
                                {role.responsibilities.map((r, i) => (
                                  <li key={i} className="font-inter text-xs sm:text-sm text-ly-gray flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-ly-yellow mt-1.5 shrink-0" />
                                    <span>{r}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-gilroy font-semibold text-sm text-ly-black uppercase tracking-wider mb-3">
                                What we look for:
                              </h4>
                              <ul className="flex flex-col gap-2">
                                {role.requirements.map((req, i) => (
                                  <li key={i} className="font-inter text-xs sm:text-sm text-ly-gray flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <span className="font-inter text-xs text-ly-gray">
                              Flexible remote compensation + equipment stipend
                            </span>
                            <button
                              onClick={() => openApply(role)}
                              className="inline-flex items-center gap-2 bg-ly-black hover:bg-black text-white font-gilroy font-medium text-sm px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                            >
                              <span>Apply for this Role</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Open Pitch Card */}
          <div className="bg-gradient-to-r from-amber-50/80 via-yellow-50/50 to-emerald-50/80 rounded-3xl p-8 sm:p-12 border border-amber-200/60 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="font-pen text-2xl text-ly-black block mb-2">
                "Curious minds always find a home here." 🐌
              </span>
              <h3 className="font-gilroy font-bold text-2xl sm:text-3xl text-ly-black mb-2">
                Don’t see your exact role listed?
              </h3>
              <p className="font-inter text-ly-gray text-base leading-relaxed">
                If you love building delightful web software, thoughtful UI, or scalable systems, pitch your own role to us. We’re always eager to meet kind, craft-driven builders.
              </p>
            </div>
            <button
              onClick={() => openApply({ title: "Open Pitch / General Application" })}
              className="shrink-0 inline-flex items-center gap-2.5 bg-ly-black hover:bg-black text-white font-gilroy font-medium text-base px-8 py-3.5 rounded-full transition-colors shadow-sm hover:shadow cursor-pointer"
            >
              <span>Send Open Pitch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      {/* Application Modal */}
      <AnimatePresence>
        {applyModalOpen && (
          <div className="fixed inset-0 z-[6500] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-100 relative"
            >
              <button
                onClick={() => setApplyModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-ly-ivory flex items-center justify-center text-ly-black hover:bg-gray-200 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {submitted ? (
                <div className="py-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-ly-yellow/30 flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-ly-black" />
                  </div>
                  <h3 className="font-gilroy font-bold text-2xl sm:text-3xl text-ly-black mb-2">
                    Application Email Drafted!
                  </h3>
                  <p className="font-inter text-ly-gray text-sm sm:text-base max-w-sm leading-relaxed mb-4">
                    Your email app has opened with your application for <strong className="text-ly-black">{submittedRole?.title}</strong> addressed to <span className="font-semibold text-ly-black">hello@humstack.in</span>.
                  </p>

                  <div className="w-full bg-amber-50 border border-amber-200/90 rounded-2xl p-4 text-left mb-6">
                    <p className="font-gilroy font-semibold text-sm text-amber-950 mb-1 flex items-center gap-1.5">
                      <Paperclip className="w-4 h-4 text-amber-700" />
                      <span>Important: Attach your CV (PDF)</span>
                    </p>
                    <p className="font-inter text-xs text-amber-800 leading-relaxed">
                      {applicant.cvFile
                        ? `Don't forget to attach "${applicant.cvFile.name}" to your email before clicking Send!`
                        : "Don't forget to attach your Resume / CV PDF file to your email before clicking Send!"}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                    {mailtoUrl && (
                      <a
                        href={mailtoUrl}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-gilroy font-semibold text-sm rounded-full bg-ly-black text-white px-6 py-2.5 hover:bg-black transition-colors shadow-sm"
                      >
                        <span>Open Email Again</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      onClick={() => {
                        setApplyModalOpen(false);
                        setSubmitted(false);
                        setApplicant({ name: "", email: "", portfolio: "", note: "", cvFile: null });
                        setMailtoUrl("");
                      }}
                      className="w-full sm:w-auto font-gilroy font-medium text-sm rounded-full border border-ly-black px-6 py-2.5 hover:bg-ly-yellow transition-colors cursor-pointer"
                    >
                      Done / Close
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-5">
                    <span className="font-gilroy font-bold text-xs uppercase tracking-wider text-ly-gray block">
                      Application
                    </span>
                    <h3 className="font-gilroy font-semibold text-2xl text-ly-black mt-1">
                      {applyingRole?.title}
                    </h3>
                  </div>

                  <form onSubmit={handleApplySubmit} className="flex flex-col gap-4">
                    <div>
                      <span className="font-inter text-xs text-ly-gray block mb-1">Your Full Name *</span>
                      <input
                        type="text"
                        required
                        value={applicant.name}
                        onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full font-inter text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-ly-black"
                      />
                    </div>

                    <div>
                      <span className="font-inter text-xs text-ly-gray block mb-1">Email Address *</span>
                      <input
                        type="email"
                        required
                        value={applicant.email}
                        onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full font-inter text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-ly-black"
                      />
                    </div>

                    <div>
                      <span className="font-inter text-xs text-ly-gray block mb-1">Portfolio / GitHub / LinkedIn *</span>
                      <input
                        type="url"
                        required
                        value={applicant.portfolio}
                        onChange={(e) => setApplicant({ ...applicant, portfolio: e.target.value })}
                        placeholder="https://github.com/yourhandle or portfolio link"
                        className="w-full font-inter text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-ly-black"
                      />
                    </div>

                    {/* Resume / CV PDF File Input */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-inter text-xs text-ly-gray block">Resume / CV (PDF) *</span>
                        <span className="font-inter text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60 font-medium">
                          Attach in email
                        </span>
                      </div>
                      <label className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl border border-dashed border-gray-300 hover:border-ly-black bg-ly-ivory/50 hover:bg-ly-ivory transition-all cursor-pointer group">
                        <Paperclip className="w-4 h-4 text-ly-gray group-hover:text-ly-black transition-colors shrink-0" />
                        <span className="font-inter text-xs sm:text-sm text-ly-black truncate flex-1">
                          {applicant.cvFile ? applicant.cvFile.name : "Select your Resume / CV (.pdf)"}
                        </span>
                        <input
                          type="file"
                          accept=".pdf,application/pdf"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setApplicant((prev) => ({ ...prev, cvFile: file }));
                            }
                          }}
                        />
                        <span className="text-[11px] font-gilroy font-semibold uppercase px-2.5 py-1 bg-white border border-gray-200 rounded-md shadow-xs text-ly-black shrink-0">
                          {applicant.cvFile ? "Change" : "Browse"}
                        </span>
                      </label>
                      <p className="font-inter text-[11px] text-ly-gray mt-1 flex items-center gap-1">
                        <span>💡</span>
                        <span>Please also attach this PDF directly to the email draft before sending.</span>
                      </p>
                    </div>

                    <div>
                      <span className="font-inter text-xs text-ly-gray block mb-1">Why do you want to build with HumStack?</span>
                      <textarea
                        rows={3}
                        value={applicant.note}
                        onChange={(e) => setApplicant({ ...applicant, note: e.target.value })}
                        placeholder="Share a couple of sentences on what projects you love creating..."
                        className="w-full font-inter text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-ly-black resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={busy}
                        className="w-full inline-flex items-center justify-center gap-2 bg-ly-black hover:bg-black text-white font-gilroy font-medium text-base py-3.5 rounded-full transition-colors cursor-pointer"
                      >
                        <span>{busy ? "Opening Your Email..." : "Send Application (Opens Email)"}</span>
                        <Send className="w-4 h-4" />
                      </button>
                      <p className="font-inter text-[11px] text-ly-gray text-center mt-2.5 flex items-center justify-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        Pre-fills an email to hello@humstack.in — attach your CV PDF before sending.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer onContact={onContact} />
    </div>
  );
};

export default CareersPage;
