// Editable site content for HumStack.in. Copy is based on HumStack's own company description.
export const SITE_URL = "https://www.humstack.in/";
export const INSTAGRAM_URL = "https://www.instagram.com/humstack.in/";
export const TAGLINE = "Build. Launch. Grow.";

export const NAV_LINKS = [
  { label: "Services", target: "solutions" },
  { label: "About", target: "culture" },
  { label: "Careers", target: "/careers" },
];

export const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "7", label: "Core Services" },
];

export const SOLUTIONS = [
  { title: "Website Development", desc: "Business websites, e-commerce stores and web applications." },
  { title: "Mobile App Development", desc: "Android applications and cross-platform mobile solutions." },
  { title: "Custom Software", desc: "Backend systems, APIs and business management software." },
  { title: "AI Solutions", desc: "AI-powered applications, chatbots and workflow automation." },
  { title: "Cloud & Deployment", desc: "Hosting, server configuration, Docker and CI/CD." },
  { title: "Digital Marketing", desc: "Social media management, content creation and SEO." },
  { title: "Project Assistance", desc: "Final-year project guidance, development support, documentation, presentation and viva preparation." },
];

export const SERVICE_OPTIONS = SOLUTIONS.map((s) => s.title);

export const PROCESS = [
  {
    key: "dew",
    label: "Understand",
    desc: "Understand the idea",
    detail: "We dive deep into your target audience, business goals, and core pain points to map a crystal-clear product roadmap.",
    deliverables: ["User Discovery", "Market Research", "Product Scope"],
    quote: "Slow and thoughtful listening lays the strongest foundation.",
  },
  {
    key: "sprout",
    label: "Plan",
    desc: "Plan the right solution",
    detail: "We architect the tech stack, data models, milestones, and deliverables to ensure rapid, dependable execution.",
    deliverables: ["System Architecture", "Tech Stack Selection", "Timeline & Milestones"],
    quote: "Clear paths make the crawl smooth and swift!",
  },
  {
    key: "mushroom",
    label: "Design",
    desc: "Design the experience",
    detail: "We craft user flows, wireframes, and high-fidelity interactive UI with joyful micro-interactions and design systems.",
    deliverables: ["UI / UX Systems", "Interactive Prototypes", "Design System"],
    quote: "Every curve and detail brings genuine delight.",
  },
  {
    key: "clover",
    label: "Develop",
    desc: "Develop and test",
    detail: "We turn designs into clean, scalable, and responsive code with automated testing, CI/CD, and robust APIs.",
    deliverables: ["Fullstack Code", "API Integrations", "Security & Testing"],
    quote: "Sturdy code is built shell-strong, line by line.",
  },
  {
    key: "shell",
    label: "Launch",
    desc: "Launch the product",
    detail: "We deploy to production cloud infrastructure, monitor performance, and ensure a seamless go-live day.",
    deliverables: ["Cloud Deployment", "Domain & SSL", "Go-Live Monitoring"],
    quote: "Pop the shell out and say hello to the world!",
  },
  {
    key: "flower",
    label: "Maintain",
    desc: "Maintain and improve",
    detail: "We provide continuous updates, feature enhancements, speed optimizations, and ongoing technology support.",
    deliverables: ["Performance Tuning", "Feature Iterations", "Dedicated Support"],
    quote: "A garden thrives with steady, loving care.",
  },
];

// "Who we work with" slides (reuses the reference Work slider layout)
export const META_LABELS = ["What we build", "How we help", "Popular services"];
export const WORK = [
  {
    name: "Startups & Founders",
    desc: "Turn a fresh idea into a working product you can put in front of users.",
    meta: ["MVPs, web & mobile apps", "Plan, build and launch", "Web, Mobile, Cloud"],
    img: "/img/startups-founders.jpeg",
  },
  {
    name: "Small & Medium Businesses",
    desc: "Bring your business online and run it smoothly with the right software.",
    meta: ["Websites, business software", "Build, host and maintain", "Web, Custom Software"],
    img: "/img/small-business.jpeg",
  },
  {
    name: "E-commerce & D2C Brands",
    desc: "Launch a store that sells, then grow it with content and search.",
    meta: ["Online stores, apps", "Launch and grow", "Web, Digital Marketing"],
    img: "/img/ecommerce-d2c.jpeg",
  },
  {
    name: "Entrepreneurs",
    desc: "Get the technology side handled, so you can focus on the business.",
    meta: ["Websites, automations", "End-to-end support", "Web, AI Solutions"],
    img: "/img/entrepreneurs.jpeg",
  },
  {
    name: "Students",
    desc: "Guidance and support for academic and final-year projects, all the way to the viva.",
    meta: ["Final-year projects", "Development, docs, viva prep", "Project Assistance"],
    img: "/img/students.jpeg",
  },
  {
    name: "Established Companies",
    desc: "Extend your team with backend systems, AI and reliable deployments.",
    meta: ["APIs, AI tools, pipelines", "Develop, deploy, improve", "Custom Software, Cloud"],
    img: "/img/established-companies.jpeg",
  },
];

export const CULTURE = [
  {
    tab: "Our mission",
    lead: "Our",
    word: "Mission",
    highlight: "Accessible & useful",
    caption: "To make technology accessible and useful by helping people and businesses transform their ideas into practical digital solutions.",
    img: "/img/culture-mission.jpeg",
  },
  {
    tab: "Our vision",
    lead: "Our",
    word: "Vision",
    highlight: "A trusted partner",
    caption: "To become a trusted technology partner for individuals, startups and businesses looking to build something meaningful.",
    img: "/img/culture-vision.jpeg",
  },
  {
    tab: "Our promise",
    lead: "Our",
    word: "Promise",
    highlight: TAGLINE,
    caption: "We turn ideas into working technology, then help you launch it and keep it growing.",
    img: "/img/culture-promise.jpeg",
  },
];

// Capabilities grid (reuses the reference Clients grid layout)
export const CLIENTS = [
  "Business websites", "E-commerce stores", "Web applications", "Android apps", "Cross-platform apps",
  "Backend systems", "APIs", "Business software", "AI-powered apps", "Chatbots",
  "Workflow automation", "Hosting & servers", "Docker", "CI/CD", "Social media",
  "Content creation", "SEO", "Final-year projects", "Documentation", "Viva preparation",
];

export const COLLAB_IMG = "/img/image-1.jpeg";

export const FAQS = [
  { q: "What does HumStack do?", a: "HumStack is a creative technology and digital solutions company that turns ideas into working technology. We build websites, mobile apps, custom software and AI solutions, handle cloud & deployment, and run digital marketing." },
  { q: "Who do you work with?", fav: true, a: "Startups and founders, small and medium-sized businesses, e-commerce and D2C brands, entrepreneurs, students working on academic projects, and established companies." },
  { q: "Do you help students with final-year projects?", fav: true, a: "Yes. Our Project Assistance covers final-year project guidance, development support, documentation, presentation and viva preparation." },
  { q: "Can you host and deploy my product too?", a: "Yes. Our Cloud & Deployment service covers hosting, server configuration, Docker and CI/CD, and we keep maintaining and improving the product after launch." },
  { q: "How does a project with HumStack work?", a: "We follow six steps: understand the idea, plan the right solution, design the experience, develop and test, launch the product, then maintain and improve it." },
  { q: "How do I start?", a: "Tap Speak With Us or Contact Us, pick the service you need and send a short message about your idea. We'll get back to you." },
];

export const FOOTER_LINKS_A = [
  { label: "Home", target: "/" }, { label: "Services", target: "solutions" }, { label: "Approach", target: "process" },
  { label: "Who We Work With", target: "work" }, { label: "Let's Talk", target: "/talk" },
];
export const FOOTER_LINKS_B = [
  { label: "About", target: "culture" }, { label: "Careers", target: "/careers" }, { label: "Capabilities", target: "clients" }, { label: "FAQs", target: "faq" },
];
