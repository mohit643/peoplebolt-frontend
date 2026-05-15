"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  LayoutDashboard,
  Users,
  Briefcase,
  Building2,
  Shield,
  BarChart3,
  Settings,
  Search,
  Download,
  Eye,
  Trash2,
} from "lucide-react";

const JOBS = [
  {
    id: 1,
    title: "Senior React Developer",
    employer: "Infosys BPO",
    location: "Noida",
    type: "Full-time",
    posted: "12 May 2025",
    deadline: "20 May 2025",
    openings: 2,
    candidates: 8,
    vendors: 3,
    status: "Active",
  },
  {
    id: 2,
    title: "DevOps Engineer",
    employer: "TCS Digital",
    location: "Remote",
    type: "Full-time",
    posted: "11 May 2025",
    deadline: "22 May 2025",
    openings: 1,
    candidates: 4,
    vendors: 2,
    status: "Active",
  },
  {
    id: 3,
    title: "Product Manager",
    employer: "Wipro Ltd",
    location: "Bangalore",
    type: "Full-time",
    posted: "10 May 2025",
    deadline: "18 May 2025",
    openings: 1,
    candidates: 2,
    vendors: 1,
    status: "Active",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    employer: "HCL Tech",
    location: "Mumbai",
    type: "Contract",
    posted: "9 May 2025",
    deadline: "25 May 2025",
    openings: 3,
    candidates: 7,
    vendors: 2,
    status: "Active",
  },
  {
    id: 5,
    title: "Data Analyst",
    employer: "Cognizant",
    location: "Hyderabad",
    type: "Full-time",
    posted: "8 May 2025",
    deadline: "15 May 2025",
    openings: 2,
    candidates: 6,
    vendors: 3,
    status: "Closed",
  },
  {
    id: 6,
    title: "Java Backend Developer",
    employer: "Accenture",
    location: "Pune",
    type: "Full-time",
    posted: "7 May 2025",
    deadline: "28 May 2025",
    openings: 4,
    candidates: 3,
    vendors: 2,
    status: "Active",
  },
  {
    id: 7,
    title: "Mobile App Developer",
    employer: "Tech Mahindra",
    location: "Chennai",
    type: "Full-time",
    posted: "6 May 2025",
    deadline: "30 May 2025",
    openings: 2,
    candidates: 1,
    vendors: 1,
    status: "Active",
  },
  {
    id: 8,
    title: "QA Automation Engineer",
    employer: "Mphasis",
    location: "Bangalore",
    type: "Contract",
    posted: "5 May 2025",
    deadline: "25 May 2025",
    openings: 3,
    candidates: 4,
    vendors: 2,
    status: "Active",
  },
  {
    id: 9,
    title: "Business Analyst",
    employer: "L&T Infotech",
    location: "Mumbai",
    type: "Full-time",
    posted: "4 May 2025",
    deadline: "22 May 2025",
    openings: 1,
    candidates: 5,
    vendors: 3,
    status: "Active",
  },
  {
    id: 10,
    title: "Cloud Architect",
    employer: "IBM India",
    location: "Remote",
    type: "Full-time",
    posted: "3 May 2025",
    deadline: "1 Jun 2025",
    openings: 1,
    candidates: 2,
    vendors: 1,
    status: "Active",
  },
  {
    id: 11,
    title: "HR Business Partner",
    employer: "Infosys BPO",
    location: "Noida",
    type: "Full-time",
    posted: "2 May 2025",
    deadline: "10 May 2025",
    openings: 1,
    candidates: 9,
    vendors: 4,
    status: "Closed",
  },
  {
    id: 12,
    title: "Scrum Master",
    employer: "Wipro Ltd",
    location: "Bangalore",
    type: "Contract",
    posted: "1 May 2025",
    deadline: "12 May 2025",
    openings: 2,
    candidates: 3,
    vendors: 2,
    status: "Closed",
  },
];

const STATUS_STYLE = {
  Active: "bg-green-50 text-green-800",
  Closed: "bg-gray-100 text-gray-500",
  Paused: "bg-amber-50 text-amber-700",
};
const TYPE_STYLE = {
  "Full-time": "bg-blue-50 text-blue-700",
  Contract: "bg-purple-50 text-purple-700",
  Internship: "bg-amber-50 text-amber-700",
};

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: Building2, label: "Vendors", href: "#" },
  { icon: Briefcase, label: "Jobs", href: "/admin/jobs", active: true },
  { icon: Shield, label: "Verification", href: "/admin/verification" },
  { icon: BarChart3, label: "Reports", href: "/admin/reports" },
  { icon: Settings, label: "Settings", href: "#" },
];

export default function AdminJobsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [jobs, setJobs] = useState(JOBS);

  const filtered = jobs.filter((j) => {
    const q = search.toLowerCase();
    const matchSearch =
      j.title.toLowerCase().includes(q) ||
      j.employer.toLowerCase().includes(q) ||
      j.location.toLowerCase().includes(q);
    const matchStatus = statusFilter === "All" || j.status === statusFilter;
    return matchSearch && matchStatus;
  });

  function closeJob(id) {
    setJobs(jobs.map((j) => (j.id === id ? { ...j, status: "Closed" } : j)));
  }

  return (
    <div className="flex min-h-screen bg-gray-50 text-sm">
      <aside className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="flex items-center gap-2.5 px-4 py-5 border-b border-gray-100">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-4 h-4" />
          </div>
          <span className="font-medium text-base">PeopleBolt</span>
        </div>
        <nav className="flex-1 py-3 px-2 space-y-0.5">
          <p className="text-[11px] text-gray-400 uppercase tracking-wider px-3 py-2">
            Admin Panel
          </p>
          {NAV.slice(0, 5).map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition
                ${n.active ? "bg-purple-50 text-purple-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"}`}
            >
              <n.icon className="w-4 h-4" />
              {n.label}
            </Link>
          ))}
          <p className="text-[11px] text-gray-400 uppercase tracking-wider px-3 py-2 mt-2">
            System
          </p>
          {NAV.slice(5).map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition
                ${n.active ? "bg-purple-50 text-purple-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"}`}
            >
              <n.icon className="w-4 h-4" />
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-gray-100">
          <div className="flex items-center gap-2.5 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center text-xs font-medium">
              SA
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-medium truncate">Super Admin</p>
              <p className="text-[11px] text-gray-400">Vaytix Technologies</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div>
            <h1 className="font-medium text-base">All job postings</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              {filtered.length} of {jobs.length} jobs
            </p>
          </div>
          <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-600 hover:bg-gray-50">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Total jobs", value: jobs.length },
              {
                label: "Active",
                value: jobs.filter((j) => j.status === "Active").length,
              },
              {
                label: "Closed",
                value: jobs.filter((j) => j.status === "Closed").length,
              },
              {
                label: "Total candidates",
                value: jobs.reduce((a, j) => a + j.candidates, 0),
              },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-gray-100 rounded-lg p-3 text-center"
              >
                <p className="text-xl font-medium">{s.value}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs or employers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500 bg-white"
              />
            </div>
            <div className="flex gap-1.5">
              {["All", "Active", "Closed"].map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition
                    ${statusFilter === s ? "bg-purple-600 text-white" : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
            <table className="w-full table-fixed">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[22%]">
                    Job title
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[16%]">
                    Employer
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[10%]">
                    Location
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[9%]">
                    Type
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[8%]">
                    Candidates
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[8%]">
                    Vendors
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[11%]">
                    Posted
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[8%]">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[8%]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((j) => (
                  <tr key={j.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3">
                      <p className="font-medium text-[13px] truncate">
                        {j.title}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {j.openings} opening{j.openings > 1 ? "s" : ""}
                      </p>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-600 truncate">
                      {j.employer}
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-600 truncate">
                      {j.location}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${TYPE_STYLE[j.type] || "bg-gray-100 text-gray-600"}`}
                      >
                        {j.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-600">
                      {j.candidates}
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-600">
                      {j.vendors}
                    </td>
                    <td className="px-4 py-3 text-[12px] text-gray-400">
                      {j.posted}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${STATUS_STYLE[j.status]}`}
                      >
                        {j.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-md transition">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        {j.status === "Active" && (
                          <button
                            onClick={() => closeJob(j.id)}
                            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
