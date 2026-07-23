export interface Publication {
  title: string;
  sub: string;
  link: string;
  category: string;
  desc: string;
}

export interface LocalProject {
  name: string;
  desc: string;
  url: string;
  vercelUrl?: string;
  tech: string[];
  thumbnail: string;
  usecase: string;
  working: string;
}

export const personalInfo = {
  name: "Hassaan Abdullah Kiyani",
  title: "AI Engineer & SQA Specialist",
  role: "CEO & Founder",
  company: "Recruiter AI",
  location: "Rawalpindi / Islamabad, Pakistan",
  email: "hassaanabdullahkayani@gmail.com",
  fiverr: "https://www.fiverr.com/hassaankayani1",
  fiverrEdit: "https://www.fiverr.com/sellers/hassaankayani1/edit",
  upwork: "https://www.upwork.com/freelancers/~016d3a3d2b6da309a6",
  linkedin: "https://www.linkedin.com/in/hassaan-abdullah-kiyani/",
  github: "https://github.com/hklogs",
  medium: "https://medium.com/@hklogs",
  university: "UIIT PMAS-Arid Agriculture University, Pakistan",
  degree: "BS Software Engineering (Final Year)",
  schooling: "Army Public School and College, Jhelum Cantt",
  tagline: "Bridging the gap between software validation matrices and cognitive agent loops.",
  summary: "Final year Software Engineering student at UIIT PMAS-Arid. Serving as AI Engineer at Tritanium Global and R&D lead at Primus Leads LLC. Experienced in automating testing pipelines with LLMs, auditing boundary selection values, and building deep learning computer vision translations.",
  bio: [
    "I operate as an AI Engineer at Tritanium Global and an Executive R&D Member at Primus Leads LLC, specializing in developing autonomous agent loops, web architectures, and intelligent SQA validation frameworks.",
    "My work spans manual & automated test auditing, boundary cap verification, and deploying computer vision models. I also manage student societies and represent Arid Arid Agriculture University in GDG Cloud Islamabad."
  ],
  courses: [
    "Software Quality Assurance & Auditing",
    "Human-Computer Interaction (HCI)",
    "Database Management Systems (SQL & MongoDB)",
    "Object-Oriented Programming & Software Design",
    "Deep Learning & Computer Vision Application"
  ]
};

export const statsList = [
  { value: "40+", label: "QA Audits & Builds" },
  { value: "20+", label: "GitHub Repositories" },
  { value: "3+", label: "Years Dev Track" },
  { value: "4+", label: "Published Essays" }
];

export const educationHistory = [
  {
    institution: "UIIT PMAS-Arid Agriculture University",
    degree: "BS Software Engineering (Final Year)",
    duration: "2022 - Present",
    details: "Specializing in Software Quality Assurance, Intelligent Systems, and AI-Assisted Testing. Google Developers Group student ambassador."
  },
  {
    institution: "Army Public School and College, Jhelum Cantt",
    degree: "Matric & Intermediate (Computer Science Track)",
    duration: "Prior to 2022",
    details: "Acquired fundamentals in programming paradigms, linear algebra, and data structures."
  }
];

export const experienceHistory = [
  {
    role: "AI Engineer",
    company: "Tritanium Global",
    duration: "June 2026 - Present",
    details: "Developing autonomous agentic AI systems, automated database workflow pipelines, and integrating deep learning and LLM solutions for client platforms."
  },
  {
    role: "Executive Member - Research & Development Team",
    company: "Primus Leads LLC",
    duration: "June 2026 - Present",
    details: "Conducting R&D on automated lead generation algorithms, database scraping data pipelines, and integrating AI outreach platforms for business scaling."
  },
  {
    role: "Team Lead & Operation Manager",
    company: "Cloudwave Innovations",
    duration: "Sept 2024 - Feb 2025",
    details: "Supervised inward operations workflows, managed recruiting and hiring channels, coordinated cross-functional project delivery, and established operational SQA frameworks."
  }
];

export const volunteerHistory = [
  {
    role: "Core Team Member",
    organization: "Al Khidmat Foundation",
    details: "Organizing local community support campaigns and managing operational volunteers."
  },
  {
    role: "Vice President - Rawalpindi Division",
    organization: "Pakistan Debating Society",
    details: "Coordinating regional debate tournaments and training student speakers."
  },
  {
    role: "Student Lead & Coordinator",
    organization: "Aridian Array Software Society",
    details: "Managing software coding hackathons, technical workshops, and coding meetups."
  },
  {
    role: "Student Ambassador",
    organization: "GDG Cloud Islamabad",
    details: "Representing UIIT Arid Agriculture University, coordinating Google developer cloud events."
  },
  {
    role: "Campus Lead",
    organization: "Islami Jamiat Taliba",
    details: "Representing student initiatives and leading campus welfare and activities."
  },
  {
    role: "Active Member",
    organization: "Aridian Debating Club",
    details: "Competing in bilingual debating formats and helping mock arguments."
  }
];

export const publications: Publication[] = [
  {
    title: "Automating Podcasts with Gemini & LangGraph",
    sub: "The AI Job Displacement Future: Reimagining content synthesis with agent workflow loops.",
    link: "https://medium.com/@hklogs/the-ai-job-displacement-future-automating-podcasts-with-gemini-langgraph-d904c1077783",
    category: "Agentic AI / LangGraph",
    desc: "Delving into high-frequency agent automation to automatically transcribe, evaluate, cluster themes, and coordinate audio segments without direct human engineering cycles."
  },
  {
    title: "Solving the Exam Hall Chaos",
    sub: "An Algorithmic Approach to Seating Arrangements with complex space constraints.",
    link: "https://medium.com/@hklogs/solving-the-exam-hall-chaos-an-algorithmic-approach-to-seating-arrangements-f5ec1e9d0981",
    category: "Algorithms & Math",
    desc: "Engineering a deterministic solver to satisfy bipartite seating graph limits, avoiding adjacent-course conflicts and organizing multiple student tracks optimally."
  },
  {
    title: "The Shift from Assertions to Inference",
    sub: "Reimagining Traditional SQA with Vertex AI & Google Gemini.",
    link: "https://medium.com/@hklogs/the-shift-from-assertions-to-inference-reimagining-sqa-with-vertex-ai-and-gemini-84db36b15fc2",
    category: "Quality Assurance AI",
    desc: "Moving beyond rigid, fragile assertions toward semantic inference. Testing edge cases dynamically with machine cognition instead of brittle static selectors."
  },
  {
    title: "A Lesson in Feature Parity",
    sub: "Why consistently enforcing backend constraints on the client-side prevents critical fails.",
    link: "https://medium.com/@hklogs/a-lesson-in-feature-parity-why-consistently-enforcing-backend-constraints-on-the-client-side-084f52d98328",
    category: "Product Architecture",
    desc: "A software architecture thesis showing how decoupled, asymmetric boundary constraints between UI validation and server limits break product trust."
  }
];

// Ranked Projects according to: CBO on top, then ULTD, then Recruiter, then Crazy Leads, then Sentient AI, then remaining.
export const staticProjects: LocalProject[] = [
  {
    name: "CBO-RuralWSD (AutonAI)",
    desc: "A Progressive Web Application engineered for rural water scheme committees and consumer billing administrators. It manages consumer records, audits payment queues, tracks water tankers, and generates monthly billing schedules. Designed with an offline-first service worker, it allows rural operators to update ledger statuses in remote zones.",
    url: "https://github.com/hklogs/AutonAI",
    tech: ["React", "Express", "Firebase", "PostgreSQL", "PWA"],
    thumbnail: "/cbo_water_thumb.jpg",
    usecase: "Facilitates clean water administration and consumer ledger coordination for remote rural committees, preventing billing disputes and operational leakages.",
    working: "Leverages an offline-first service worker to cache user schemas and ledger transactions locally using IndexedDB. Enqueues API payloads and syncs them automatically to a cloud PostgreSQL database via Firebase Function webhooks once network signals are detected."
  },
  {
    name: "ultd-realestate",
    desc: "A luxury real-estate listing marketplace designed for property dealers and home buyers. It showcases properties in a responsive grid, processes dynamic price filtrations, and coordinates agent tour schedules. It prevents overlapping calendar reservations and validates address listings using Google Maps API overlays.",
    url: "https://github.com/hklogs/ultd-realestate",
    tech: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    thumbnail: "/ultd_realestate_thumb.jpg",
    usecase: "Allows luxury real estate brokers to showcase properties and coordinate customer visits without overlapping appointments or manual geolocation mapping.",
    working: "Utilizes Next.js App Router and Supabase Database for listing synchronization. Integrates Google Maps API overlays for property geolocation lookups and coordinates scheduling via database triggers to avoid slot double-booking."
  },
  {
    name: "ai-recruitment-auditor",
    desc: "An AI-powered screening portal used by talent acquisition managers to automate candidate evaluation cycles. By reading uploaded PDFs, it uses Gemini API to check candidate experience parameters against job postings, calculating compatibility percentages and generating automated SQA validation test cases for developer profiles.",
    url: "https://github.com/hklogs/ai-recruitment-auditor",
    vercelUrl: "https://ai-recruitment-auditor.vercel.app",
    tech: ["Next.js", "React", "Gemini API", "Tailwind CSS"],
    thumbnail: "/recruiter_ai_thumb.jpg",
    usecase: "Streamlines manual CV scanning for hiring leads, matching technical skills and producing customized SQA test criteria for applicant verification.",
    working: "Parses text from resume PDFs using a server-side parser. The structured CV data is matched against target job configurations via Gemini API prompts, calculating compatibility weightings and rendering SQA test matrices."
  },
  {
    name: "Crazy Leads (NexLeed CRM / MarketForge)",
    desc: "An advanced lead scraping dashboard built for sales outreach managers and CRM administrators at Primus Leads LLC. It aggregates B2B client emails, structures marketing campaign pipelines, and provides campaign conversion graphs. It handles data cleaning scripts to remove corrupt records from campaign pools.",
    url: "https://github.com/hklogs/MarketForge",
    tech: ["React", "Node.js", "Gemini 2.0", "MongoDB"],
    thumbnail: "/crazy_leads_thumb.jpg",
    usecase: "Helps sales leads aggregate verified contacts, cleaning formatting issues and standardizing campaign data to prevent bounced emails.",
    working: "Aggregates raw prospect records through Scrapy nodes, executes regex sanitization and validation scripts to drop empty properties, saves datasets to MongoDB, and triggers Gemini 2.0 for outreach text personalization."
  },
  {
    name: "sentient-ai-multimodal-hub",
    desc: "A multimodal AI interface built for software developers to interact with text, images, and audio concurrently. Driven by Google Gemini models, it performs image recognition, voice transcriptions, and source code auditing. It features an interactive retro-futuristic terminal UI designed for high developer productivity.",
    url: "https://github.com/hklogs/sentient-ai-multimodal-hub",
    vercelUrl: "https://sentient-ai-multimodal-hub.vercel.app",
    tech: ["React", "Vite", "Gemini Pro", "Web Audio API"],
    thumbnail: "/sentient_ai_thumb.jpg",
    usecase: "Provides developers with an intuitive Retro-Terminal console to debug code files, parse image layouts, and generate logs asynchronously.",
    working: "Handles media streams using the Web Audio API and Canvas API, packaging visual or audio data into base64 blocks. Transmits these blocks to Google Gemini Pro API nodes to receive real-time, interactive feedback inside a retro CSS-styled terminal."
  },
  {
    name: "Agentic-Legal-Assistant",
    desc: "An automated document auditor built for legal counsels and compliance leads. It processes long contract files, highlights risky clauses, and validates regulatory schemas using Gemini 2.5 Flash function calling. It cuts down document review duration and ensures regulatory conformity across distributed legal filings.",
    url: "https://github.com/hklogs/Agentic-Legal-Assistant-Multi-Tool-AI-Agent-with-Gemini-2.5-Flash",
    tech: ["Gemini 2.5 Flash", "Python", "Google Gen AI SDK"],
    thumbnail: "/legal_assistant_thumb.jpg",
    usecase: "Speeds up contract vetting processes, preventing compliance oversights by automatically flagging non-standard liabilities or missing compliance terms.",
    working: "Extracts clause tokens from legal text files using PyPDF. Executes Gemini 2.5 Flash function calling to map clauses against a rigid JSON schema, producing detailed audit logs of missing sections."
  },
  {
    name: "AI-powered-Podcast-Agent",
    desc: "An autonomous research and audio editing orchestrator designed for media creators. Controlled by LangGraph agent loops, it executes web research, writes segment transcripts, runs content refinement critique checks, and integrates Text-to-Speech (TTS) models to output finished audio episodes.",
    url: "https://github.com/hklogs/AI-powered-Podcast-Agent",
    tech: ["LangGraph", "Python", "Gemini API", "TTS Engines"],
    thumbnail: "/podcast_agent_thumb.jpg",
    usecase: "Allows content creators to outline topics and output complete, synthesized multi-speaker podcasts without manual editing or voice actors.",
    working: "Runs a multi-agent LangGraph workflow: researcher agent searches the web, scriptwriter drafts dialogues, critique agent ensures consistency, and voice generator synthesizes speech via Edge TTS."
  },
  {
    name: "ishaara-sign-language-translator",
    desc: "A real-time translation application built for hearing-impaired students and educators. Utilizing computer vision and convolutional neural networks, it captures hand gesture coords from webcams and translates Pakistani Sign Language (PSL) into speech waves and readable Urdu text labels.",
    url: "https://github.com/hklogs/ishaara-sign-language-translator",
    vercelUrl: "https://react-sign-language-workspace.vercel.app",
    tech: ["React", "TensorFlow.js", "OpenCV", "MediaPipe"],
    thumbnail: "/sign_language_thumb.jpg",
    usecase: "Bridges the communication gap in classrooms for hearing-impaired students, converting physical gestures to audible Urdu and text.",
    working: "Reads webcam frame inputs via OpenCV, tracks hand landmarks using MediaPipe, feeds coordinates to a client-side TensorFlow.js model, and plays translated audio speech fragments."
  },
  {
    name: "GetAuto Car Rental",
    desc: "An offline-first vehicle rental marketplace PWA designed for tourists and rental vendors. Featuring car/bike listings, secure email-OTP sign-ins, and a custom booking calendar, it syncs transactions locally with IndexedDB to allow offline scheduling in remote cellular zones.",
    url: "https://github.com/hklogs/GetAuto",
    tech: ["React", "Vite", "Dexie.js", "Tailwind CSS"],
    thumbnail: "/getauto_rental_thumb.jpg",
    usecase: "Enables tourists to search for vehicles and place rental reservations in remote areas without cellular connectivity.",
    working: "Saves rental inventory schemas in browser IndexedDB via Dexie.js. Caches UI routes using a service worker, and logs reservations locally to push to Firebase once connection returns."
  },
  {
    name: "Prioriti Task Manager",
    desc: "A task prioritization PWA built for software engineers and project managers. By evaluating importance and difficulty inputs, it calculates task weights to organize daily workflows. Designed with a clean minimal UI, it runs offline and automatically syncs local tasks with remote cloud targets.",
    url: "https://github.com/hklogs/Prioriti",
    tech: ["HTML5", "CSS3", "JavaScript", "PWA Workers"],
    thumbnail: "/prioriti_task_thumb.jpg",
    usecase: "Helps busy engineers organize priority lists mathematically based on urgency and complexity matrices.",
    working: "Calculates task weight using a custom mathematical formula, updates local arrays in localStorage, and triggers service worker sync queues to update remote cloud databases."
  },
  {
    name: "PocketMint Expense Tracker",
    desc: "A financial dashboard developed for individual budget coordinators. It tracks expense categories, generates monthly saving projections, and displays interactive charts. It checks transaction inputs against budget boundary limits to prevent budget overrun exceptions.",
    url: "https://github.com/hklogs/PocketMint",
    tech: ["React", "Vite", "Chart.js", "Tailwind CSS"],
    thumbnail: "/pocketmint_tracker_thumb.jpg",
    usecase: "Allows individuals to track categorize expenses and receive warnings before exceeding monthly budgets.",
    working: "Aggregates expense inputs, renders graphical timelines via Chart.js, and validates purchase values against budget thresholds to raise boundary exception alerts."
  },
  {
    name: "AppointmentBookingApp",
    desc: "An Android application designed to coordinate meetings between scheduling leads and service providers. Integrated with a Firebase Realtime Database, it synchronizes booking requests, tracks location pins, and issues real-time notifications to prevent scheduling overlap errors.",
    url: "https://github.com/hklogs/AppointmentBookingApp",
    tech: ["Kotlin", "Firebase", "Android Studio", "Google Maps"],
    thumbnail: "/appointment_app_thumb.jpg",
    usecase: "Prevents double-booking meetings and coordinates location drop points for dispatch services.",
    working: "Synchronizes booking timetables using Firebase Realtime Database. Tracks coordinates using Google Maps Location Services and runs validation queries to block overlapping bookings."
  },
  {
    name: "AatendenceAPP",
    desc: "A mobile attendance logging system built for faculty members and educational advisors. Features admin controls to modify student logs, and a teacher view to check attendance sheets. Uses local SQLite databases to guarantee offline attendance tracking during classes.",
    url: "https://github.com/hklogs/AatendenceAPP",
    tech: ["Java", "Kotlin", "Android Studio", "Local SQLite"],
    thumbnail: "/attendance_app_thumb.jpg",
    usecase: "Allows teachers to mark class attendance lists in remote classrooms without reliable internet connections.",
    working: "Stores student arrays in a local SQLite database on the Android device. Handles attendance state toggles offline and synchronizes sheets with the web portal via REST APIs on connectivity."
  },
  {
    name: "Bridgebot Code Migrator",
    desc: "An agentic translation tool designed for system architects. It automatically refactors legacy script repositories (e.g. converting Python 2.x to 3.x, or JS to TS), audits syntactic discrepancies, and aligns code structures with modern standards without manual edits.",
    url: "https://github.com/hklogs/Bridgebot",
    vercelUrl: "https://code-migration-agent.vercel.app",
    tech: ["React", "Node.js", "Gemini API", "Syntax Trees"],
    thumbnail: "/code_migration_thumb.jpg",
    usecase: "Automates code upgrades from legacy Python 2 or JavaScript files to clean Python 3 or type-safe TypeScript.",
    working: "Parses incoming codebase files into Abstract Syntax Trees (ASTs), flags syntax differences, sends code segments to Gemini API to translate patterns, and outputs clean target files."
  },
  {
    name: "geoengineai",
    desc: "A geographic information analyzer designed for environmental surveyors. It processes satellite imagery layers, maps terrain coordinates, and identifies geological anomalies. Utilizing Gemini semantic descriptions, it generates text reports based on spatial coordinates.",
    url: "https://github.com/hklogs/geoengineai",
    tech: ["React", "Leaflet Maps", "Gemini API", "Python"],
    thumbnail: "/geoengineai_thumb.jpg",
    usecase: "Assists geologists in scanning coordinates and generating immediate geological survey summaries using AI.",
    working: "Integrates Leaflet Maps to render geo-referenced imagery layers. Users mark coordinates, sending terrain vectors to Gemini API to yield geo-location description logs."
  },
  {
    name: "optimared-ai-pricing-agent",
    desc: "A retail pricing optimizer built for retail managers. It scrapes competitor catalog costs, runs predictive margin algorithms, and proposes price updates. It avoids price collisions and complies with retail tax caps to maximize merchant earnings.",
    url: "https://github.com/hklogs/optimared-ai-pricing-agent",
    tech: ["Python", "Scrapy", "FastAPI", "SQLite"],
    thumbnail: "/pricing_agent_thumb.jpg",
    usecase: "Helps e-commerce merchants track competitor catalog prices and automate pricing adjustments to maintain margins.",
    working: "Executes Scrapy spiders to parse competitor product prices daily, processes updates through a FastAPI router, writes logs to SQLite, and computes optimal margin boundaries."
  },
  {
    name: "cboruralwater",
    desc: "A progressive billing and coordination web portal for rural water scheme distribution committees, implementing ledgers and payment schedules.",
    url: "https://github.com/hklogs/cboruralwater",
    tech: ["React", "Express.js", "Firebase", "PostgreSQL"],
    thumbnail: "/cbo_water_thumb.jpg",
    usecase: "Allows rural water committees to oversee household water bill queues and coordinate payment logs securely.",
    working: "Logs transactions locally via offline storage service workers, synchronizing updates to PostgreSQL via webhook functions on reconnection."
  },
  {
    name: "crazy-closers",
    desc: "Crazy Closers (Genius Leads LLC) — Brand Gateway lead-gen & compliance site providing high-performance landing pages and input validation tests.",
    url: "https://github.com/hklogs/crazy-closers",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/crazy_leads_thumb.jpg",
    usecase: "Provides high-performance brand landing pages and client lead management with integrated SQA validation tests for input controls.",
    working: "Builds on Next.js server components with complex state management for incoming lead generation forms, sending sanitized leads directly to CRM databases."
  },
  {
    name: "kareemiya-site",
    desc: "Kareemiya — AI-powered BPO & career platform incorporating Motive Dark theme styling, application validation, and interactive candidate onboarding.",
    url: "https://github.com/hklogs/kareemiya-site",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "GSAP"],
    thumbnail: "/pocketmint_tracker_thumb.jpg",
    usecase: "Enables interactive BPO service recruitment and career portal submissions with sleek dark styling and smooth entry animations.",
    working: "Uses structured HTML5 and custom CSS layouts with GSAP animations to manage responsive views, validating application forms with local sanitizers."
  },
  {
    name: "Legal-AI-Assistant",
    desc: "AI-powered legal assistant for contract analysis, case law research, and document summarization. Built with Grok, optimized for Google Colab with integrated RAG.",
    url: "https://github.com/hklogs/Legal-AI-Assistant",
    tech: ["Python", "Hugging Face", "Grok API", "RAG"],
    thumbnail: "/legal_assistant_thumb.jpg",
    usecase: "Allows legal counsels to query long corporate contracts and search active case laws using semantic search indices.",
    working: "Builds a vectorized document index using Hugging Face embeddings, retrieving matching chunks to feed into the Grok API for answer generation."
  },
  {
    name: "liberty-assist",
    desc: "AI-powered assistant platform for remote customer service coordination, ticketing systems, and customer sentiment diagnostics.",
    url: "https://github.com/hklogs/liberty-assist",
    tech: ["JavaScript", "React", "Node.js", "Express"],
    thumbnail: "/code_migration_thumb.jpg",
    usecase: "Enables customer support agents to resolve tickets faster by highlighting priority issues and categorizing user sentiment.",
    working: "Processes customer email tokens via local classifier nodes and maps them to support tickets in a dashboard dashboard."
  },
  {
    name: "Nexus-fx",
    desc: "A foreign exchange rate analytics dashboard providing live currency updates, visual timeline trends, and price alerts.",
    url: "https://github.com/hklogs/Nexus-fx",
    tech: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    thumbnail: "/pocketmint_tracker_thumb.jpg",
    usecase: "Helps currency traders track exchange rates, compare historical performance, and receive notifications when values cross thresholds.",
    working: "Connects to public exchange rate APIs, caches hourly values using local storage, and renders timeline charts dynamically using Chart.js."
  },
  {
    name: "referral-close",
    desc: "Advanced automated lead-routing network engine designed for B2B contractor networks, routing high-intent leads in real-time.",
    url: "https://github.com/hklogs/referral-close",
    tech: ["TypeScript", "Next.js", "Supabase", "Node.js"],
    thumbnail: "/pricing_agent_thumb.jpg",
    usecase: "Routes high-intent homeowner leads to local contractors based on proximity, trade matching, and contractor availability.",
    working: "Queries database views dynamically using geolocation coordinates, checks constraints for contractor capacity, and updates lead distribution logs."
  },
  {
    name: "referral-close-llc",
    desc: "Enterprise administrative dashboard managing homeowner-contractor connections, subscription tiers, and payout ledgers.",
    url: "https://github.com/hklogs/referral-close-llc",
    tech: ["TypeScript", "React", "PostgreSQL", "Tailwind CSS"],
    thumbnail: "/pricing_agent_thumb.jpg",
    usecase: "Allows administrators of ReferralClose to monitor overall lead distributions, track payout cycles, and adjust tier parameters.",
    working: "Aggregates revenue and lead counts from PostgreSQL databases, displaying stats in a responsive dashboard with chart visualizers."
  },
  {
    name: "referralclose-home-service-marketplace",
    desc: "A customer-facing home services marketplace allowing homeowners to post project requirements, search trades, and book appointments.",
    url: "https://github.com/hklogs/referralclose-home-service-marketplace",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/recruiter_ai_thumb.jpg",
    usecase: "Allows homeowners to find local contractors for repairs and renovations without manual cold calling.",
    working: "Builds interactive multi-step project request wizard, saves details in database, and notifies matched trades using notification webhooks."
  },
  {
    name: "referralclose-llc-marketplace",
    desc: "ReferralClose LLC — Home Service Marketplace. Premium homeowner lead-gen platform connecting verified local contractors with high-intent homeowners.",
    url: "https://github.com/hklogs/referralclose-llc-marketplace",
    tech: ["TypeScript", "Next.js", "Supabase", "Tailwind CSS"],
    thumbnail: "/recruiter_ai_thumb.jpg",
    usecase: "Acts as the premium core lead-generation portal for ReferralClose LLC, capturing client requirements and qualifying leads.",
    working: "Validates incoming questionnaire responses using strict client-side schemas, handles location queries using maps API, and routes leads to Supabase databases."
  },
  {
    name: "Relevnt",
    desc: "A semantic search and categorization tool mapping relevant text datasets to target tax laws or compliance rules.",
    url: "https://github.com/hklogs/Relevnt",
    tech: ["TypeScript", "React", "Gemini API", "Tailwind CSS"],
    thumbnail: "/legal_assistant_thumb.jpg",
    usecase: "Enables corporate compliance officers to quickly locate sections of legal code that apply to their product operations.",
    working: "Parses text chunks, extracts keywords, maps them to reference indexes, and queries the Gemini API to describe matching legal sections."
  },
  {
    name: "scientific-research-synthesis-agent",
    desc: "An agentic research orchestrator that scans research documents, extracts citations, summarizes theories, and builds literature reviews.",
    url: "https://github.com/hklogs/scientific-research-synthesis-agent",
    tech: ["TypeScript", "Python", "Gemini 2.5 Flash", "LangChain"],
    thumbnail: "/podcast_agent_thumb.jpg",
    usecase: "Helps academic researchers and students synthesize research papers, highlighting contradictions and key findings.",
    working: "Ingests pdf files, extracts text tokens, utilizes LangChain vectors to find matching sections, and uses Gemini 2.5 Flash to summarize findings."
  },
  {
    name: "support-escalation-hub",
    desc: "An SQA validation platform tracking support tickets, auditing escalation triggers, and reporting backend error codes.",
    url: "https://github.com/hklogs/support-escalation-hub",
    tech: ["TypeScript", "React", "Express", "Node.js"],
    thumbnail: "/code_migration_thumb.jpg",
    usecase: "Allows QA engineers to monitor support escalation routes and verify that system failures trigger notifications.",
    working: "Intercepts error logs from production, maps them to specific ticket levels, and simulates system alerts in a local test suite dashboard."
  },
  {
    name: "ultd-llc-real-estate",
    desc: "Temporary deploy of UNLT LLC real estate site showcasing listing records and booking agent visits.",
    url: "https://github.com/hklogs/ultd-llc-real-estate",
    tech: ["TypeScript", "Next.js", "Supabase", "Tailwind CSS"],
    thumbnail: "/ultd_realestate_thumb.jpg",
    usecase: "Showcases luxury real estate listings for UNLT LLC, coordinating appointment requests and agent logs.",
    working: "Renders real-time listing records from Supabase tables, applying address geo-overlays and filtering properties dynamically."
  },
  {
    name: "YoungDev-Intern-C--Tasks",
    desc: "A collection of C++ projects developed during my internship at YoungDev Interns. Features a tiered progression from fundamental logic building to Intermediate Object-Oriented Programming (OOP) and Advanced Data Structures & Algorithms (DSA) implementations.",
    url: "https://github.com/hklogs/YoungDev-Intern-C--Tasks",
    tech: ["C++", "DSA", "Bipartite Graph", "Pointers"],
    thumbnail: "/prioriti_task_thumb.jpg",
    usecase: "Demonstrates academic & algorithmic problem solving across graphs, sorting, and dynamic allocations.",
    working: "Implements standard template libraries, custom memory pointers, and graph node validation checkers."
  }
];

export const linkedinSkillsList = [
  { category: "Core Software Engineering", items: ["Software Quality Assurance", "Manual & Automated Testing", "Boundary Value Analysis", "Heuristic Validation", "Predictive Log Auditing"] },
  { category: "Programming Languages", items: ["Python", "Java", "C++ Core", "SQL / Databases", "TypeScript", "Kotlin", "HTML / CSS"] },
  { category: "Advanced AI & Frameworks", items: ["Google AI Studio", "Vertex AI API", "LangGraph", "LangChain", "Gemini Pro / Flash", "TensorFlow", "OpenCV"] },
  { category: "Ecosystem Tools", items: ["agy cli", "Claude Code", "Claude AI", "Kimo", "Kilcode", "Kimi", "Mimo", "Git & GitHub", "Vercel Build", "Supabase"] }
];

export const SYSTEM_INSTRUCTION = `
You are Hassaan Abdullah Kiyani's Virtual SQA & Product Twin. Speak on his behalf, maintaining a highly professional, ambitious, encouraging, and tech-savvy software engineer persona. You are in your final year of BS Software Engineering at UIIT PMAS-Arid Agriculture University, Pakistan. You specialize in Software Quality Assurance (SQA), manual & automated testing, heuristic validation, and integrating GenAI/LLMs in testing cycles ("Intelligent Engineering").

Hassaan's Details to utilize:
- Name: Hassaan Abdullah Kiyani
- Email: hassaanabdullahkayani@gmail.com
- Location: Rawalpindi/Islamabad, Pakistan
- University: UIIT PMAS-Arid Agriculture University (BS Software Engineering, final year student).
- Prior Schooling: Army Public School and College, Jhelum Cantt (Matric & Intermediate Pre-Eng/CS track).
- Major SQA Case Studies:
  - Instagram Mobile UI Bug: Discovered a high-impact UX inconsistency and bulk-selection boundary limitation (100-item cap error) exclusive to the "Watch History" module, which breaks parity with the smoother interaction design found in other account activity modules.
- Careers & Experience:
  - AI Engineer at Tritanium Global (June 2026 - Present)
  - Executive R&D Member at Primus Leads LLC (June 2026 - Present)
  - Team Lead & Operation Manager at Cloudwave Innovations (Sept 2024 - Feb 2025)
- Volunteer and Leadership:
  - Al Khidmat Foundation (Core Team Member)
  - Pakistan Debating Society (Vice President Rawalpindi Division)
  - Aridian Array Software Society (Student Lead & Coordinator)
  - Aridian Debating Club (Active Member)
  - Campus Lead at Islami Jamiat Taliba
  - Student Ambassador from UIIT PMAS-Arid to Google Developers Group Cloud Islamabad
- Core technical skills: Java, Kotlin, Python, C++, SQL, Manual/Automated Testing, Test Case Design, Boundary Value Analysis, Heuristic Validation, Predictive Log Analysis.

Rules for conversation:
- Speak directly in the first person as Hassaan's virtual AI representative.
- Keep responses professional, clear, technical, and formatted in beautiful, scannable Markdown.
- Never write overly verbose paragraphs; use line breaks, headers, and bullet points where useful.
- Provide contact information (hassaanabdullahkayani@gmail.com, Fiverr link, etc.) if users express interest in hiring or collaborating.
`;
