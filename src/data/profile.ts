// Single source of truth for the site's content.
// Edit text here; the components only handle layout.

export const profile = {
  name: 'Madhan Kumar Tammineni',
  shortName: 'Madhan',
  roles: ['AI Engineer', 'Software Engineer', 'Developer'],
  tagline:
    'I build AI and full-stack software for healthcare and research: RAG assistants, multi-agent systems, and the portals scientists actually use.',
  location: 'Memphis, TN',
  status: 'Open to full-time roles · M.S. CS, Dec 2026',
  email: 'madhant120@gmail.com',
  links: {
    github: 'https://github.com/Madhan120-prog',
    linkedin: 'https://www.linkedin.com/in/madhan120',
  },
  // Set to a path under /public (e.g. '/resume.pdf') to show a "Download resume" button.
  resumeUrl: null as string | null,
};

// Monitor-style readouts shown in the hero.
export const vitals = [
  { label: 'EXP', value: '4+', unit: 'yrs', color: 'green' },
  { label: 'USERS', value: '12M+', unit: 'served', color: 'cyan' },
  { label: 'LATENCY', value: '−42', unit: '%', color: 'amber' },
  { label: 'TICKETS', value: '−25', unit: '%', color: 'pink' },
] as const;

export const about = {
  intro: [
    "Hi, I'm Madhan 👋. I'm a software engineer with about four years across industry, research, and a St. Jude internship. These days I spend most of my time on AI products: retrieval-augmented assistants, tool-using agents, and evaluating how LLMs actually behave.",
    'I started out shipping React apps at 12M+ user scale, moved into healthcare workflow platforms, and most recently built a research portal and an AI lab assistant for a gene therapy team. I like owning a feature end to end, from system design to the deploy, with tests and guardrails built in.',
  ],
  facts: [
    { emoji: '🎓', label: 'M.S. Computer Science', detail: 'University of Memphis · Dec 2026' },
    { emoji: '🧬', label: 'Research software', detail: "St. Jude Children's Research Hospital" },
    { emoji: '🤖', label: 'AI / LLM engineering', detail: 'RAG · agents · evals · guardrails' },
    { emoji: '☁️', label: 'AWS Certified', detail: 'AI Practitioner · Sep 2026' },
  ],
  now: [
    'Finishing my M.S. in Computer Science',
    'Building TigerMind, a multi-agent university assistant',
    'Researching LLM instruction-following & federated learning defenses',
  ],
};

export type Job = {
  role: string;
  company: string;
  place: string;
  period: string;
  emoji: string;
  summary: string;
  points: string[];
  tech: string[];
};

export const experience: Job[] = [
  {
    role: 'Software Engineering Intern · AI & Full-Stack',
    company: "St. Jude Children's Research Hospital",
    place: 'Memphis, TN',
    period: 'Mar 2026 – Aug 2026',
    emoji: '🧬',
    summary: 'Built a research portal and an AI assistant for a gene therapy lab.',
    points: [
      'Built VIA Portal (React, Vite, FastAPI, Pandas), a full-stack app where researchers upload integration-site data and explore it in an embedded IGV.js genome browser.',
      'Prototyped a RAG research assistant that answers lab questions with source citations from internal protocols and notes, tested in an isolated environment so sensitive data never left it.',
      "Integrated Google DeepMind's AlphaGenome API as a live pipeline step, with hg19→hg38 liftover and batch scoring of ~900 integration-site queries, replacing hours of manual review.",
      'Wrote back-end parsers that turn R objects and .bed/.wig/.bigwig uploads into cell-type tracks, plus hotspot ranking, a genome-wide density heatmap, and file comparison.',
      'Containerized a five-step bash + R sequencing pipeline behind a FastAPI page, so researchers upload FASTQ files and download results without installing bwa, samtools, or R.',
    ],
    tech: ['Python', 'FastAPI', 'React', 'Vite', 'RAG', 'ChromaDB', 'Docker', 'R'],
  },
  {
    role: 'Graduate Research Assistant',
    company: 'University of Memphis · CFIA Lab',
    place: 'Memphis, TN',
    period: 'Feb 2025 – Present',
    emoji: '🔬',
    summary: 'LLM evaluation and federated-learning security research.',
    points: [
      'Designed a controlled evaluation of how ChatGPT, Gemini, and Claude follow instructions and report on their own behavior, using a 35-prompt test set and scoring scheme.',
      'Train and benchmark SVM, Random Forest, MLP, and CNN models (AlexNet, GoogLeNet) for a federated-learning defense against data and model poisoning across IID and non-IID settings.',
      'Extending an edge-deployed ensemble filter for adversarial detection to federated chest X-ray and CT imaging, with per-client logging and automatic exclusion of anomalous clients.',
      "Build and maintain the center's and a faculty member's websites (HTML, CSS, JS) through the university CMS.",
    ],
    tech: ['Python', 'PyTorch', 'scikit-learn', 'Flower', 'LLM evals'],
  },
  {
    role: 'Software Engineer · Application & Workflow Development',
    company: 'Carelon Global Solutions',
    place: 'Hyderabad, India',
    period: 'Sep 2023 – Jan 2025',
    emoji: '🏥',
    summary: 'Workflow applications for a large healthcare organization.',
    points: [
      'Turned business requirements into data models, forms, approval flows, and server-side logic on ServiceNow (JavaScript, Business Rules, Script Includes).',
      'Automated low-priority ticket handling with event-driven flows, cutting ticket volume 25% and saving ~15% of analyst time.',
      'Built REST integrations and scripted APIs to sync records with internal systems, removing manual copy work between teams.',
      'Built a self-service portal front end, wrote automated tests, managed dev → test → prod releases, and designed role-based access for healthcare compliance.',
    ],
    tech: ['JavaScript', 'REST APIs', 'ServiceNow', 'AngularJS', 'Flow Designer'],
  },
  {
    role: 'Software Engineer · Full-Stack (alongside B.Tech)',
    company: 'LTIMindtree',
    place: 'India',
    period: 'Feb 2022 – Jul 2023',
    emoji: '🛒',
    summary: 'React apps and services for a 12M+ MAU commerce platform.',
    points: [
      'Cut cross-service API latency 42% by moving order and inventory sync from REST polling to WebSocket push across 3 downstream services.',
      'Built reusable React, Redux, and JavaScript components for seller- and customer-facing apps serving 12M+ monthly users, reducing duplicate UI code across 5 teams by 20%.',
      'Migrated legacy JavaScript to TypeScript and added Jest + React Testing Library coverage, catching regressions earlier.',
      'Provisioned AWS (EC2, S3, IAM) with Terraform and set up CloudWatch monitoring for data-ingestion proofs of concept.',
    ],
    tech: ['React', 'Redux', 'TypeScript', 'WebSockets', 'AWS', 'Terraform'],
  },
];

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  emoji: string;
  blurb: string;
  details: string[];
  tech: string[];
  repo?: string;
  demo?: string;
  status?: string;
  accent: 'green' | 'cyan' | 'amber' | 'pink' | 'violet';
};

export const projects: Project[] = [
  {
    slug: 'patient-records',
    title: 'Integrated Patient Records & AI Clinical Assistant',
    kicker: 'Healthcare · RAG · Multi-agent',
    emoji: '🩺',
    blurb:
      'Six hospital data systems merged into one patient timeline, with an assistant that answers plain-English questions about a patient, with citations.',
    details: [
      'Unified six data sources (SQLite, JSON, dbm, shelve, CSV) into one timeline using a Master Patient Index pattern.',
      'RAG pipeline with ChromaDB, local embeddings, and patient-scoped filtering, feeding a hand-built multi-agent layer with a synthesizer pass.',
      'Safety checks: citation verification, dosage-language flags, and local MedGemma image queries via Ollama.',
      'JWT auth with physician / nurse / admin roles, and every AI query written to an audit trail.',
    ],
    tech: ['React', 'FastAPI', 'MongoDB', 'ChromaDB', 'Ollama', 'MedGemma'],
    repo: 'https://github.com/Madhan120-prog/integrated-patient-system',
    accent: 'green',
  },
  {
    slug: 'tigermind',
    title: 'TigerMind',
    kicker: 'Multi-agent · LangGraph',
    emoji: '🐯',
    blurb:
      'A university assistant that routes student questions to specialized agents, with a stateful advising flow that pauses for a human.',
    details: [
      'Router-based multi-agent design with a config-driven retrieval agent across eight domains.',
      'LangGraph advising flow with human-in-the-loop pause and resume.',
      'Parallel fan-out for questions that span multiple domains.',
      'Citation and data-freshness guardrails, plus eval scenarios for the router and advising flow.',
    ],
    tech: ['Python', 'FastAPI', 'LangGraph', 'Claude API', 'ChromaDB', 'React'],
    repo: 'https://github.com/Madhan120-prog/tigermind',
    status: 'In progress',
    accent: 'amber',
  },
  {
    slug: 'via-portal',
    title: 'VIA Portal',
    kicker: 'Research software · Genomics',
    emoji: '🧬',
    blurb:
      'A web portal where gene therapy researchers upload integration-site data and explore it in an interactive genome browser.',
    details: [
      'React + FastAPI app with an embedded IGV.js genome browser replacing static tables.',
      'Parsers for R objects and .txt/.bed/.wig/.bigwig files into cell-type-specific tracks.',
      'Automated hotspot detection with CSV export, genome-wide density heatmap, and side-by-side comparison.',
      'AlphaGenome API integrated as a live prediction step (~900 queries, hg19→hg38 liftover).',
      'Built at St. Jude; the code is internal, so this is a case study rather than a repo link.',
    ],
    tech: ['React', 'Vite', 'FastAPI', 'Pandas', 'IGV.js', 'AlphaGenome'],
    accent: 'cyan',
  },
  {
    slug: 'autocab',
    title: 'AutoCAB / wfrec',
    kicker: 'St. Jude BioHackathon · KIDS26',
    emoji: '⏺️',
    blurb:
      'Cross-platform recording-status UI for a workflow recorder: macOS menu bar, Windows tray, and a floating overlay. Delivered solo in ~3 days.',
    details: [
      'Status UI wired into the backend daemon and CLI.',
      'Native integrations via pyobjc (macOS) and tkinter (Windows / overlay).',
      'Unit test suite and GitHub Actions CI from day one.',
    ],
    tech: ['Python', 'asyncio', 'pyobjc', 'tkinter', 'GitHub Actions'],
    repo: 'https://github.com/stjude-biohackathon/KIDS26-Team6',
    accent: 'pink',
  },
  {
    slug: 'qrf',
    title: 'QRF: Veteran Peer Support',
    kicker: 'Mobile · Peer support',
    emoji: '🎖️',
    blurb:
      'A mobile app that alerts opted-in veterans nearby for peer support by push notification and SMS.',
    details: [
      'Built the test suite from scratch.',
      'Fixed a sign-in bug that left new users without a profile.',
    ],
    tech: ['React Native', 'Push notifications', 'SMS', 'Testing'],
    status: 'iOS deployed',
    accent: 'violet',
  },
];

export const skillGroups = [
  {
    name: 'AI / LLM',
    emoji: '🧠',
    color: 'green',
    items: ['RAG', 'LangGraph', 'Tool-calling agents', 'Prompt engineering', 'LLM evaluation', 'Guardrails', 'ChromaDB', 'sentence-transformers', 'Ollama', 'PyTorch', 'scikit-learn'],
  },
  {
    name: 'Back end & data',
    emoji: '⚙️',
    color: 'cyan',
    items: ['Python', 'FastAPI', 'REST', 'WebSockets', 'Pandas', 'MongoDB', 'SQL', 'JWT / RBAC', 'R'],
  },
  {
    name: 'Front end',
    emoji: '🎨',
    color: 'amber',
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Redux', 'React Native', 'HTML / CSS', 'IGV.js'],
  },
  {
    name: 'Cloud & delivery',
    emoji: '🚀',
    color: 'pink',
    items: ['AWS (EC2, S3, IAM, Bedrock)', 'Terraform', 'Docker', 'GitHub Actions', 'Jest', 'React Testing Library', 'Git', 'ServiceNow'],
  },
] as const;

// "Also worth knowing": smaller wins that don't fit the main timeline.
export const extras = [
  { emoji: '🔎', title: '+15% click-through', text: 'Plugged a Python ML inference service into an existing REST layer to improve product-search relevance at LTIMindtree.' },
  { emoji: '📊', title: '−30% manual tracking', text: 'Built Power BI dashboards for the CFIA research center.' },
  { emoji: '🏅', title: 'Fellowship', text: 'Peter I. Neathery Fellowship and International Graduate Merit Scholarship, University of Memphis.' },
  { emoji: '☁️', title: 'AWS Certified AI Practitioner', text: 'Sep 2026: GenAI, RAG, Bedrock, responsible AI. Cloud Practitioner in progress.' },
];

export const education = [
  { school: 'University of Memphis', degree: 'M.S. Computer Science', detail: 'GPA 3.5 · Expected Dec 2026', emoji: '🐯' },
  { school: 'Sreenidhi Institute of Science & Technology', degree: 'B.Tech, Electronics & Communication', detail: 'GPA 8.44 / 10 · 2023', emoji: '📡' },
];
