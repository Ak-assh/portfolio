import { Project, Experience, BlogPost, SkillCategory } from '../types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'CCL Analytics Dashboard',
    tag: 'Data Analysis',
    description: 'During internship at Central Coalfields Limited — designed and produced data-driven management reports from large operational and CSR datasets using pandas-based EDA pipelines and Excel-based visualisation workflows.',
    stack: ['Python', 'Pandas', 'NumPy', 'Excel', 'EDA', 'Data Reporting'],
    links: [{ name: 'Certificate', url: 'https://drive.google.com/file/d/1BIwwG3K_sBkDsxqjccW7TadtExlrmC2m/view?usp=drive_link' }],
    size: 'large'
  },
  {
    id: '02',
    title: 'Deployable Solar Antenna',
    tag: 'Aerospace / Hardware',
    description: 'Compact, lightweight deployable antenna integrated with solar panels for combined communication and power generation in CubeSat missions. Origami-inspired folding mechanism with actuator-based deployment system. Certified project.',
    stack: ['Aerospace Design', 'Structural Mechanics', 'CubeSat Systems'],
    links: [{ name: 'Certificate', url: 'https://drive.google.com/file/d/1CZxAKsEJYi6HApuO-XVxmkBo_hZCKnsQ/view?usp=sharing' }],
    size: 'tall'
  },
  {
    id: '03',
    title: 'AI Video Script Pipeline',
    tag: 'AI / Automation',
    description: 'End-to-end automation workflow built at Logicleap AI — Make.com + GPT APIs auto-generate complete video scripts from topic prompts, enabling scalable AI-based video content creation for clients.',
    stack: ['Make.com', 'OpenAI GPT', 'REST APIs', 'JavaScript'],
    links: [],
    size: 'medium'
  },
  {
    id: '04',
    title: 'Customer Segmentation System',
    tag: 'ML / Web App',
    description: 'Web-based ML application using K-Means clustering to segment customers based on purchasing behaviour and surface actionable business insights. Full-stack with Flask backend, interactive frontend, and Matplotlib/Seaborn data visualisation.',
    stack: ['Python', 'K-Means', 'Flask', 'HTML', 'CSS', 'JS', 'Matplotlib', 'Seaborn'],
    links: [],
    size: 'wide'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    period: 'July 2025 – Jan 2026',
    role: 'Software Engineer Intern',
    company: 'Logicleap AI Pvt. Ltd. — Bangalore',
    bullets: [
      'Built interactive frontend dashboards for client demonstrations',
      'Designed AI-driven automation workflows using Make.com + GPT APIs for video script generation',
      'Implemented data filtration and analytics pipelines to process datasets and extract insights',
      'Collaborated cross-functionally to align UI behavior with backend automation'
    ],
    stack: 'HTML, CSS, JavaScript, React, Figma, REST APIs, Make.com, OpenAI GPT APIs'
  },
  {
    id: 'exp2',
    period: 'April 2025 – May 2025',
    role: 'Data Analysis & Optimization Intern',
    company: 'Central Coalfields Limited — Ranchi',
    bullets: [
      'Data cleaning, preprocessing, and validation on operational and CSR datasets',
      'EDA to analyze performance metrics, identify trends, support process optimization',
      'Created data-driven reports to support informed management decision-making'
    ],
    stack: 'Python (Pandas, NumPy), Excel, Data Analysis, Reporting'
  },
  {
    id: 'exp3',
    period: '2022 – Present (Expected May 2026)',
    role: 'B.Tech — Computer Science Engineering',
    company: 'KIIT – Deemed University, Bhubaneswar · GPA: 7.22',
    bullets: [
      'Active member of Konnexions (KIIT IT Society) — official event photographer',
      'NSS Volunteer — community community development under National Service Scheme',
      'Coursework: DSA, DBMS, OS, OOP, Web Technologies'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  { name: 'Programming Languages', skills: 'Python, JavaScript, Java, C, C++, SQL' },
  { name: 'AI & Automation', skills: 'OpenAI GPT APIs, AI Prompt Engineering, Make.com, Data Analysis, K-Means Clustering' },
  { name: 'Web & Databases', skills: 'ReactJS, NodeJS, HTML, CSS, MySQL, REST APIs, Flask' },
  { name: 'Tools & Platforms', skills: 'Git, Figma, Lovable, Excel, Google Workspace, VS Code' },
  { name: 'Data & Analysis', skills: 'Pandas, NumPy, Matplotlib, Seaborn, EDA, Data Cleaning' },
  { name: 'Core Concepts', skills: 'OOPs, DBMS, Operating Systems, Agile, UI/UX Design' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post1',
    date: 'March 2025',
    title: 'Building AI Automation Workflows with Make.com and GPT APIs',
    excerpt: 'The real-world lessons from shipping production AI pipelines — pitfalls, patterns, and what nobody tells you about integrating LLMs into business workflows.',
    link: '#'
  },
  {
    id: 'post2',
    date: 'January 2025',
    title: 'What I Learned from Analysing Real-World Operational Data',
    excerpt: 'EDA on messy government datasets is nothing like Kaggle. Here\'s what hands-on data work at a public sector company actually looks like.',
    link: '#'
  },
  {
    id: 'post3',
    date: 'November 2024',
    title: 'From K-Means to a Full Web App: Shipping My First ML Project',
    excerpt: 'How I built a customer segmentation system end-to-end — from model to Flask backend to interactive frontend — and what I\'d do differently.',
    link: '#'
  }
];

export const PERSONAL_INFO = {
  name: 'Akash Kumar',
  email: 'akash2026ltr@gmail.com',
  phone: '+91 7667757538',
  github: 'https://github.com/Ak-assh',
  linkedin: 'https://www.linkedin.com/in/ak-assh/',
  figma: 'https://www.figma.com/@b3aebad0_ec2b_4',
  university: 'KIIT - Deemed University, Bhubaneswar',
  degree: 'B.Tech Computer Science Engineering',
  gpa: '7.22',
  graduation: 'Expected May 2026',
  info: 'Hi, I am',
  tagline: 'Software Engineer • UI/UX Designer • AI Builder',
  subTagline: 'Transforming complex ideas into elegant digital realities that scale with ambition.',
  status: 'Open to Opportunities · Graduating May 2026'
};
