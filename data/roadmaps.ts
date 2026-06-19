export const roadmaps = [
  {
    slug: "frontend-developer",

    title: "Frontend Developer",

    description:
      "Master React, Next.js, TypeScript, UI engineering and modern frontend architecture.",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    category: "Frontend Development",

    difficulty: "Beginner to Advanced",

    duration: "6-8 Months",

    topics: [
      { title: "HTML & CSS", description: "Semantic HTML, Flexbox, Grid" },
      { title: "JavaScript", description: "ES6+, DOM, async programming" },
      { title: "React", description: "Components, hooks, state management" },
      { title: "Next.js", description: "SSR, routing, APIs" },
      { title: "TypeScript", description: "Type safety for large apps" },
    ],
  },

  {
    slug: "backend-developer",

    title: "Backend Developer",

    description:
      "Learn APIs, databases, authentication and scalable backend systems.",

    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",

    category: "Backend",

    difficulty: "Intermediate",

    duration: "5-7 Months",

    topics: [
      { title: "Node.js", description: "Runtime fundamentals" },
      { title: "Express.js", description: "REST API development" },
      { title: "Databases", description: "SQL & NoSQL systems" },
      { title: "Authentication", description: "JWT, sessions, OAuth" },
      { title: "System Design", description: "Scalable architecture basics" },
    ],
  },

  {
    slug: "fullstack-developer",

    title: "Fullstack Developer",

    description:
      "Become a production-ready developer with frontend + backend skills.",

    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",

    category: "Fullstack",

    difficulty: "Intermediate to Advanced",

    duration: "8-12 Months",

    topics: [
      { title: "Frontend", description: "React + UI systems" },
      { title: "Backend", description: "APIs and server logic" },
      { title: "Database", description: "PostgreSQL / MongoDB" },
      { title: "Auth Systems", description: "Secure login flows" },
      { title: "Deployment", description: "Vercel, AWS, CI/CD" },
    ],
  },

  {
    slug: "ai-engineer",

    title: "AI Engineer",

    description:
      "Learn ML, deep learning, LLMs and AI application development.",

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",

    category: "Artificial Intelligence",

    difficulty: "Advanced",

    duration: "8-10 Months",

    topics: [
      { title: "Python", description: "Core AI programming language" },
      { title: "Machine Learning", description: "Supervised & unsupervised learning" },
      { title: "Deep Learning", description: "Neural networks" },
      { title: "LLMs", description: "Transformers and AI models" },
      { title: "AI Apps", description: "Deploy AI products" },
    ],
  },

  {
    slug: "devops-engineer",

    title: "DevOps Engineer",

    description:
      "Master deployment, CI/CD, containers and cloud infrastructure.",

    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",

    category: "DevOps",

    difficulty: "Intermediate",

    duration: "6-9 Months",

    topics: [
      { title: "Linux", description: "Server fundamentals" },
      { title: "Docker", description: "Containerization" },
      { title: "CI/CD", description: "Automation pipelines" },
      { title: "Kubernetes", description: "Container orchestration" },
      { title: "Cloud", description: "AWS / Azure / GCP basics" },
    ],
  },

  {
    slug: "dsa-roadmap",

    title: "DSA & Competitive Programming",

    description:
      "Master algorithms, data structures and coding interviews.",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

    category: "Programming",

    difficulty: "Beginner to Advanced",

    duration: "4-6 Months",

    topics: [
      { title: "Arrays", description: "Basic problem solving" },
      { title: "Linked Lists", description: "Pointer-based structures" },
      { title: "Stacks & Queues", description: "Linear data structures" },
      { title: "Trees & Graphs", description: "Advanced structures" },
      { title: "DP", description: "Dynamic programming mastery" },
    ],
  },

  // =========================
  // NEW BEGINNER ROADMAPS
  // =========================

  {
    slug: "web-development-beginner",

    title: "Web Development Beginner",

    description:
      "Start your journey in web development from zero knowledge.",

    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd",

    category: "Beginner",

    difficulty: "Beginner",

    duration: "3-4 Months",

    topics: [
      { title: "Internet Basics", description: "How websites work" },
      { title: "HTML", description: "Structure of web pages" },
      { title: "CSS", description: "Styling websites" },
      { title: "JavaScript Basics", description: "Interactive websites" },
      { title: "Mini Projects", description: "Build simple apps" },
    ],
  },

  {
    slug: "python-beginner",

    title: "Python Beginner",

    description:
      "Learn programming fundamentals using Python.",

    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",

    category: "Beginner",

    difficulty: "Beginner",

    duration: "2-3 Months",

    topics: [
      { title: "Syntax", description: "Python basics" },
      { title: "Loops", description: "Control flow" },
      { title: "Functions", description: "Reusable code" },
      { title: "OOP Basics", description: "Object oriented programming" },
      { title: "Mini Projects", description: "Hands-on practice" },
    ],
  },

  {
    slug: "react-advanced",

    title: "Advanced React Developer",

    description:
      "Master advanced React concepts and performance optimization.",

    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",

    category: "Advanced",

    difficulty: "Advanced",

    duration: "3-5 Months",

    topics: [
      { title: "Hooks Deep Dive", description: "Advanced hooks usage" },
      { title: "State Management", description: "Redux / Zustand" },
      { title: "Performance", description: "Optimization techniques" },
      { title: "Architecture", description: "Scalable React apps" },
      { title: "Testing", description: "Unit + integration tests" },
    ],
  },

  {
    slug: "system-design",

    title: "System Design Mastery",

    description:
      "Learn how large-scale systems like Netflix and Uber are built.",

    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",

    category: "Advanced",

    difficulty: "Advanced",

    duration: "2-4 Months",

    topics: [
      { title: "Scalability", description: "Horizontal vs vertical scaling" },
      { title: "Load Balancing", description: "Traffic distribution" },
      { title: "Caching", description: "Redis, CDN concepts" },
      { title: "Databases", description: "SQL vs NoSQL design" },
      { title: "Microservices", description: "Distributed systems" },
    ],
  },
  // =========================
  // ADDITIONAL HIGH-DEMAND ROADMAPS
  // =========================

  {
    slug: "data-engineer",

    title: "Data Engineer",

    description:
      "Master data pipelines, big data tools, ETL processing, and data warehousing.",

    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",

    category: "Data Science & Engineering",

    difficulty: "Intermediate to Advanced",

    duration: "6-8 Months",

    topics: [
      { title: "SQL & Python", description: "Advanced querying and data scripting" },
      { title: "ETL / ELT", description: "Building data pipelines with Airflow" },
      { title: "Big Data Systems", description: "Hadoop, Spark, and Distributed Systems" },
      { title: "Data Warehousing", description: "Snowflake, BigQuery, and Redshift" },
      { title: "Data Modeling", description: "Star schemas and Lakehouse architecture" },
    ],
  },

  {
    slug: "cybersecurity-analyst",

    title: "Cybersecurity Analyst",

    description:
      "Learn network security, ethical hacking, threat hunting, and defensive security.",

    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",

    category: "Cybersecurity",

    difficulty: "Beginner to Advanced",

    duration: "5-7 Months",

    topics: [
      { title: "Networking Basics", description: "TCP/IP, OSI model, and routing" },
      { title: "Linux & Security", description: "Securing OS environments" },
      { title: "Penetration Testing", description: "Ethical hacking and vulnerability assessments" },
      { title: "SIEM Tools", description: "Monitoring threats with Splunk or Wireshark" },
      { title: "Cloud Security", description: "Securing modern cloud environments" },
    ],
  },

  {
    slug: "mobile-app-developer",

    title: "Mobile App Developer",

    description:
      "Build cross-platform mobile apps for iOS and Android using Flutter or React Native.",

    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",

    category: "Mobile Development",

    difficulty: "Intermediate",

    duration: "4-6 Months",

    topics: [
      { title: "Cross-Platform Frameworks", description: "React Native or Flutter fundamentals" },
      { title: "UI & Layouts", description: "Building responsive mobile views" },
      { title: "State Management", description: "Handling local and global app state" },
      { title: "Native Features", description: "Accessing camera, GPS, and local storage" },
      { title: "App Store Deployment", description: "Publishing to Google Play & Apple App Store" },
    ],
  },

  {
    slug: "cloud-engineer",

    title: "Cloud Engineer",

    description:
      "Master cloud infrastructure, serverless computing, and cloud architecture.",

    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",

    category: "Cloud Computing",

    difficulty: "Intermediate",

    duration: "5-6 Months",

    topics: [
      { title: "Cloud Fundamentals", description: "IAM, VPCs, and computing power" },
      { title: "Storage & DBs", description: "Cloud-native storage and databases" },
      { title: "Serverless Architecture", description: "AWS Lambda, Cloud Functions" },
      { title: "Infrastructure as Code", description: "Automating cloud setups with Terraform" },
      { title: "Monitoring & Costs", description: "CloudWatch, cost optimization strategies" },
    ],
  },

  {
    slug: "ui-ux-designer",

    title: "UI/UX Product Designer",

    description:
      "Master user research, wireframing, high-fidelity UI design, and prototyping in Figma.",

    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",

    category: "Design",

    difficulty: "Beginner to Intermediate",

    duration: "3-5 Months",

    topics: [
      { title: "UX Research", description: "User personas and user journey mapping" },
      { title: "Wireframing", description: "Low-fidelity wireframes and structural layouts" },
      { title: "Figma Mastery", description: "Components, auto-layout, and design systems" },
      { title: "UI Design Principles", description: "Typography, color theory, and spacing" },
      { title: "Prototyping & Testing", description: "Interactive animations and user testing" },
    ],
  },

  {
    slug: "blockchain-developer",

    title: "Blockchain & Web3 Developer",

    description:
      "Learn smart contracts, decentralized applications (dApps), and blockchain networks.",

    image:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247",

    category: "Web3",

    difficulty: "Advanced",

    duration: "6-8 Months",

    topics: [
      { title: "Blockchain Basics", description: "Cryptography, consensus, and nodes" },
      { title: "Solidity", description: "Writing Ethereum smart contracts" },
      { title: "Web3.js / Ethers.js", description: "Connecting frontends to the blockchain" },
      { title: "Smart Contract Security", description: "Auditing and common vulnerabilities" },
      { title: "Decentralized Apps", description: "Building and deploying full dApps" },
    ],
  }
];