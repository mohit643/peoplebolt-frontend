// src/data/employers.js
// Dummy employer data — replace with API calls when backend is ready

export const EMPLOYERS = [
  {
    id: 1,
    name: "Infosys BPO",
    initials: "IB",
    city: "Noida",
    contact: "Rahul Sharma",
    email: "rahul@infosys.com",
    phone: "+91 98200 00001",
    activeJobs: 8,
    totalHires: 12,
    avgTimeToHire: "18 days",
  },
  {
    id: 2,
    name: "TCS Digital",
    initials: "TD",
    city: "Mumbai",
    contact: "Anita Roy",
    email: "anita@tcs.com",
    phone: "+91 98200 00002",
    activeJobs: 6,
    totalHires: 8,
    avgTimeToHire: "22 days",
  },
  {
    id: 3,
    name: "Wipro Ltd",
    initials: "WL",
    city: "Bangalore",
    contact: "Sanjay K.",
    email: "hr@wipro.com",
    phone: "+91 98200 00003",
    activeJobs: 5,
    totalHires: 6,
    avgTimeToHire: "25 days",
  },
  {
    id: 4,
    name: "HCL Tech",
    initials: "HT",
    city: "Noida",
    contact: "Meena T.",
    email: "talent@hcltech.com",
    phone: "+91 98200 00004",
    activeJobs: 4,
    totalHires: 5,
    avgTimeToHire: "20 days",
  },
  {
    id: 5,
    name: "Accenture",
    initials: "AC",
    city: "Pune",
    contact: "James D.",
    email: "james@accenture.com",
    phone: "+91 98200 00005",
    activeJobs: 3,
    totalHires: 3,
    avgTimeToHire: "30 days",
  },
];

export const getEmployerById = (id) =>
  EMPLOYERS.find((e) => e.id === Number(id));
