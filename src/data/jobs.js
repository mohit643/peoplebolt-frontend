// src/data/jobs.js
// Dummy job data — replace with API calls when backend is ready

export const JOBS = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Infosys BPO",
    employerId: 1,
    location: "Noida",
    type: "Full-time",
    experience: "3-5 years",
    salaryMin: 12,
    salaryMax: 18,
    openings: 2,
    deadline: "2025-05-20",
    skills: ["React", "TypeScript", "Node.js", "Redux", "REST API"],
    description:
      "We are looking for a Senior React Developer to join our growing engineering team. You will build and maintain scalable web applications using React and TypeScript.",
    requirements:
      "3+ years React experience. Strong TypeScript skills. Experience with state management (Redux/Zustand). Familiarity with REST APIs.",
    status: "Active",
    postedDate: "2025-05-12",
    vendorsApplied: 3,
    candidatesReceived: 8,
  },
  {
    id: 2,
    title: "DevOps Engineer",
    company: "TCS Digital",
    employerId: 2,
    location: "Remote",
    type: "Full-time",
    experience: "5-8 years",
    salaryMin: 14,
    salaryMax: 20,
    openings: 1,
    deadline: "2025-05-22",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    description:
      "Seeking an experienced DevOps Engineer to manage our cloud infrastructure and deployment pipelines.",
    requirements:
      "5+ years DevOps experience. AWS certified preferred. Strong knowledge of Docker and Kubernetes.",
    status: "Active",
    postedDate: "2025-05-11",
    vendorsApplied: 2,
    candidatesReceived: 4,
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Wipro Ltd",
    employerId: 3,
    location: "Bangalore",
    type: "Full-time",
    experience: "5-8 years",
    salaryMin: 18,
    salaryMax: 26,
    openings: 1,
    deadline: "2025-05-18",
    skills: ["Agile", "Jira", "Roadmapping", "Stakeholder Management", "SQL"],
    description:
      "We need a seasoned Product Manager to lead our digital transformation initiatives.",
    requirements:
      "5+ years product management. Experience in B2B SaaS. Strong analytical and communication skills.",
    status: "Active",
    postedDate: "2025-05-10",
    vendorsApplied: 1,
    candidatesReceived: 2,
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "HCL Tech",
    employerId: 4,
    location: "Mumbai",
    type: "Contract",
    experience: "3-5 years",
    salaryMin: 8,
    salaryMax: 12,
    openings: 3,
    deadline: "2025-05-25",
    skills: [
      "Figma",
      "Adobe XD",
      "Prototyping",
      "User Research",
      "Design Systems",
    ],
    description:
      "Looking for a creative UI/UX Designer to redesign our enterprise product suite.",
    requirements:
      "3+ years UI/UX experience. Strong portfolio. Proficiency in Figma and Adobe XD.",
    status: "Active",
    postedDate: "2025-05-09",
    vendorsApplied: 2,
    candidatesReceived: 7,
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Cognizant",
    employerId: 5,
    location: "Hyderabad",
    type: "Full-time",
    experience: "1-3 years",
    salaryMin: 7,
    salaryMax: 11,
    openings: 2,
    deadline: "2025-05-15",
    skills: ["SQL", "Python", "Tableau", "Excel", "Power BI"],
    description:
      "We are hiring a Data Analyst to support business intelligence and reporting needs.",
    requirements:
      "1+ years data analysis experience. Strong SQL and Python skills. Experience with BI tools.",
    status: "Closed",
    postedDate: "2025-05-05",
    vendorsApplied: 3,
    candidatesReceived: 6,
  },
  {
    id: 6,
    title: "Java Backend Developer",
    company: "Accenture",
    employerId: 5,
    location: "Pune",
    type: "Full-time",
    experience: "3-5 years",
    salaryMin: 10,
    salaryMax: 15,
    openings: 4,
    deadline: "2025-05-28",
    skills: ["Java", "Spring Boot", "Microservices", "MySQL", "Kafka"],
    description:
      "Join our backend team to build scalable microservices for enterprise clients.",
    requirements:
      "3+ years Java experience. Spring Boot expertise. Knowledge of microservices architecture.",
    status: "Active",
    postedDate: "2025-05-07",
    vendorsApplied: 2,
    candidatesReceived: 3,
  },
];

export const getJobById = (id) => JOBS.find((j) => j.id === Number(id));
export const getActiveJobs = () => JOBS.filter((j) => j.status === "Active");
export const getJobsByEmployer = (employerId) =>
  JOBS.filter((j) => j.employerId === employerId);
