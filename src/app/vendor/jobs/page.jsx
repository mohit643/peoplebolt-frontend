"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  LayoutDashboard,
  Briefcase,
  Users,
  FileUp,
  BarChart3,
  Settings,
  Search,
  MapPin,
  Clock,
  IndianRupee,
  Filter,
} from "lucide-react";

const JOBS = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Infosys BPO",
    location: "Noida",
    type: "Full-time",
    exp: "3-5 yrs",
    salary: "₹12–18 LPA",
    deadline: "20 May 2025",
    skills: ["React", "TypeScript", "Node.js"],
    openings: 2,
    submitted: 2,
    status: "Open",
  },
  {
    id: 2,
    title: "DevOps Engineer",
    company: "TCS Digital",
    location: "Remote",
    type: "Full-time",
    exp: "5-8 yrs",
    salary: "₹14–20 LPA",
    deadline: "22 May 2025",
    skills: ["AWS", "Docker", "Kubernetes"],
    openings: 1,
    submitted: 1,
    status: "Open",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Wipro Ltd",
    location: "Bangalore",
    type: "Full-time",
    exp: "5-8 yrs",
    salary: "₹18–26 LPA",
    deadline: "18 May 2025",
    skills: ["Agile", "Jira", "Roadmapping"],
    openings: 1,
    submitted: 0,
    status: "Open",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "HCL Tech",
    location: "Mumbai",
    type: "Contract",
    exp: "3-5 yrs",
    salary: "₹8–12 LPA",
    deadline: "25 May 2025",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    openings: 3,
    submitted: 3,
    status: "Open",
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Cognizant",
    location: "Hyderabad",
    type: "Full-time",
    exp: "1-3 yrs",
    salary: "₹7–11 LPA",
    deadline: "15 May 2025",
    skills: ["SQL", "Python", "Tableau"],
    openings: 2,
    submitted: 1,
    status: "Closed",
  },
  {
    id: 6,
    title: "Java Backend Developer",
    company: "Accenture",
    location: "Pune",
    type: "Full-time",
    exp: "3-5 yrs",
    salary: "₹10–15 LPA",
    deadline: "28 May 2025",
    skills: ["Java", "Spring Boot", "Microservices"],
    openings: 4,
    submitted: 0,
    status: "Open",
  },
  {
    id: 7,
    title: "Mobile App Developer",
    company: "Tech Mahindra",
    location: "Chennai",
    type: "Full-time",
    exp: "2-4 yrs",
    salary: "₹9–14 LPA",
    deadline: "30 May 2025",
    skills: ["Flutter", "React Native", "iOS"],
    openings: 2,
    submitted: 0,
    status: "Open",
  },
  {
    id: 8,
    title: "QA Automation Engineer",
    company: "Mphasis",
    location: "Bangalore",
    type: "Contract",
    exp: "3-5 yrs",
    salary: "₹8–13 LPA",
    deadline: "25 May 2025",
    skills: ["Selenium", "Cypress", "TestNG"],
    openings: 3,
    submitted: 0,
    status: "Open",
  },
  {
    id: 9,
    title: "Business Analyst",
    company: "L&T Infotech",
    location: "Mumbai",
    type: "Full-time",
    exp: "3-6 yrs",
    salary: "₹10–16 LPA",
    deadline: "22 May 2025",
    skills: ["BRD", "Stakeholder", "SQL"],
    openings: 1,
    submitted: 0,
    status: "Open",
  },
  {
    id: 10,
    title: "Cloud Architect",
    company: "IBM India",
    location: "Remote",
    type: "Full-time",
    exp: "8+ yrs",
    salary: "₹25–40 LPA",
    deadline: "1 Jun 2025",
    skills: ["Azure", "AWS", "GCP"],
    openings: 1,
    submitted: 0,
    status: "Open",
  },
];

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/vendor/dashboard" },
  { icon: Briefcase, label: "Browse jobs", href: "/vendor/jobs", active: true },
  { icon: FileUp, label: "Submit candidate", href: "/vendor/submit-candidate" },
  { icon: Users, label: "My submissions", href: "/vendor/my-submissions" },
  { icon: BarChart3, label: "Reports", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

const JOB_TYPES = ["All", "Full-time", "Contract", "Part-time", "Internship"];

export default function VendorJobsPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [selected, setSelected] = useState(JOBS[0]);

  const filtered = JOBS.filter((j) => {
    const q = search.toLowerCase();
    const matchSearch =
      j.title.toLowerCase().includes(q) ||
      j.company.toLowerCase().includes(q) ||
      j.location.toLowerCase().includes(q);
    const matchType = typeFilter === "All" || j.type === typeFilter;
    return matchSearch && matchType;
  });

  return (
    <div className="flex min-h-screen bg-gray-50 text-sm">
      {/* SIDEBAR */}
      <aside className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="flex items-center gap-2.5 px-4 py-5 border-b border-gray-100">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-4 h-4" />
          </div>
          <span className="font-medium text-base">PeopleBolt</span>
        </div>
        <nav className="flex-1 py-3 px-2 space-y-0.5">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition
                ${n.active ? "bg-green-50 text-green-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"}`}
            >
              <n.icon className="w-4 h-4" />
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-gray-100">
          <div className="flex items-center gap-2.5 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-green-50 text-green-700 flex items-center justify-center text-xs font-medium">
              TS
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-medium truncate">TechStaff Pvt</p>
              <p className="text-[11px] text-gray-400">Vendor · Verified</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN — split panel */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div>
            <h1 className="font-medium text-base">Browse jobs</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              {filtered.length} open positions available
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="px-6 py-3 bg-white border-b border-gray-100 flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs, companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500 bg-white"
            />
          </div>
          <div className="flex gap-1.5">
            {JOB_TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-3 py-1.5 rounded-lg text-xs transition
                  ${typeFilter === t ? "bg-green-600 text-white" : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Split: list + detail */}
        <div className="flex flex-1 overflow-hidden">
          {/* Job list */}
          <div className="w-96 border-r border-gray-100 overflow-y-auto bg-white">
            {filtered.map((j) => (
              <div
                key={j.id}
                onClick={() => setSelected(j)}
                className={`p-4 border-b border-gray-50 cursor-pointer transition
                  ${selected?.id === j.id ? "bg-green-50 border-l-2 border-l-green-600" : "hover:bg-gray-50"}`}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <p className="font-medium text-[13px] leading-snug">
                    {j.title}
                  </p>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-medium shrink-0
                    ${j.status === "Open" ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-500"}`}
                  >
                    {j.status}
                  </span>
                </div>
                <p className="text-[12px] text-gray-500">{j.company}</p>
                <div className="flex items-center gap-3 mt-2 text-[11px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {j.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <IndianRupee className="w-3 h-3" />
                    {j.salary}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  {j.skills.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="p-8 text-center text-gray-400">
                No jobs match your search.
              </div>
            )}
          </div>

          {/* Job detail */}
          {selected && (
            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-2xl">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-xl font-medium mb-1">
                      {selected.title}
                    </h2>
                    <p className="text-gray-500">{selected.company}</p>
                  </div>
                  {selected.status === "Open" && (
                    <Link
                      href={`/vendor/submit-candidate?job=${selected.id}`}
                      className="px-5 py-2.5 bg-green-600 text-white rounded-lg text-[13px] hover:bg-green-700 transition shrink-0"
                    >
                      Submit candidate
                    </Link>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Location", value: selected.location },
                    { label: "Job type", value: selected.type },
                    { label: "Experience", value: selected.exp },
                    { label: "Salary", value: selected.salary },
                    {
                      label: "Openings",
                      value: `${selected.openings} position${selected.openings > 1 ? "s" : ""}`,
                    },
                    { label: "Deadline", value: selected.deadline },
                    {
                      label: "You submitted",
                      value: `${selected.submitted} candidate${selected.submitted !== 1 ? "s" : ""}`,
                    },
                    { label: "Status", value: selected.status },
                  ].map((d) => (
                    <div key={d.label} className="bg-gray-50 rounded-lg p-3">
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                        {d.label}
                      </p>
                      <p className="text-[13px] font-medium">{d.value}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-5 mb-4">
                  <p className="font-medium mb-3">Required skills</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 bg-green-50 text-green-700 text-xs rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-5">
                  <p className="font-medium mb-3">Job description</p>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    We are looking for a talented {selected.title} to join{" "}
                    {selected.company}. The ideal candidate will have{" "}
                    {selected.exp} of relevant experience and be proficient in{" "}
                    {selected.skills.join(", ")}. This is a{" "}
                    {selected.type.toLowerCase()} role based in{" "}
                    {selected.location}. You will be working with a dynamic team
                    to deliver high-quality solutions. The position offers a
                    competitive compensation of {selected.salary} with excellent
                    growth opportunities.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
