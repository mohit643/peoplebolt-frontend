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
  Download,
  Eye,
} from "lucide-react";

const SUBMISSIONS = [
  {
    id: 1,
    name: "Amit Kumar",
    initials: "AK",
    role: "Senior React Developer",
    company: "Infosys BPO",
    exp: "4 yrs",
    currentCtc: "₹10 LPA",
    expectedCtc: "₹14 LPA",
    notice: "30 days",
    submitted: "12 May 2025",
    status: "Shortlisted",
  },
  {
    id: 2,
    name: "Kavita Rao",
    initials: "KR",
    role: "Senior React Developer",
    company: "Infosys BPO",
    exp: "5 yrs",
    currentCtc: "₹12 LPA",
    expectedCtc: "₹16 LPA",
    notice: "45 days",
    submitted: "12 May 2025",
    status: "Screened",
  },
  {
    id: 3,
    name: "Priya Singh",
    initials: "PS",
    role: "DevOps Engineer",
    company: "TCS Digital",
    exp: "5 yrs",
    currentCtc: "₹13 LPA",
    expectedCtc: "₹18 LPA",
    notice: "30 days",
    submitted: "11 May 2025",
    status: "Interview",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    initials: "NK",
    role: "UI/UX Designer",
    company: "HCL Tech",
    exp: "3 yrs",
    currentCtc: "₹7 LPA",
    expectedCtc: "₹10 LPA",
    notice: "15 days",
    submitted: "13 May 2025",
    status: "Applied",
  },
  {
    id: 5,
    name: "Suresh Mishra",
    initials: "SM",
    role: "Data Analyst",
    company: "Cognizant",
    exp: "2 yrs",
    currentCtc: "₹5 LPA",
    expectedCtc: "₹8 LPA",
    notice: "Immediate",
    submitted: "13 May 2025",
    status: "Applied",
  },
  {
    id: 6,
    name: "Manish Gupta",
    initials: "MG",
    role: "DevOps Engineer",
    company: "TCS Digital",
    exp: "4 yrs",
    currentCtc: "₹11 LPA",
    expectedCtc: "₹15 LPA",
    notice: "60 days",
    submitted: "9 May 2025",
    status: "Rejected",
  },
  {
    id: 7,
    name: "Ritu Agarwal",
    initials: "RA",
    role: "Java Backend Developer",
    company: "Accenture",
    exp: "3 yrs",
    currentCtc: "₹8 LPA",
    expectedCtc: "₹12 LPA",
    notice: "30 days",
    submitted: "8 May 2025",
    status: "Offered",
  },
  {
    id: 8,
    name: "Deepak Sharma",
    initials: "DS",
    role: "Mobile App Developer",
    company: "Tech Mahindra",
    exp: "3 yrs",
    currentCtc: "₹9 LPA",
    expectedCtc: "₹13 LPA",
    notice: "30 days",
    submitted: "7 May 2025",
    status: "Screened",
  },
];

const STATUS_STYLE = {
  Applied: "bg-gray-100 text-gray-600",
  Screened: "bg-purple-50 text-purple-700",
  Shortlisted: "bg-amber-50 text-amber-700",
  Interview: "bg-blue-50 text-blue-700",
  Offered: "bg-green-50 text-green-800",
  Rejected: "bg-red-50 text-red-700",
};

const ALL_STATUSES = [
  "All",
  "Applied",
  "Screened",
  "Shortlisted",
  "Interview",
  "Offered",
  "Rejected",
];

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/vendor/dashboard" },
  { icon: Briefcase, label: "Browse jobs", href: "/vendor/jobs" },
  { icon: FileUp, label: "Submit candidate", href: "/vendor/submit-candidate" },
  {
    icon: Users,
    label: "My submissions",
    href: "/vendor/my-submissions",
    active: true,
  },
  { icon: BarChart3, label: "Reports", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

const PIPELINE_COUNTS = ALL_STATUSES.slice(1).map((s) => ({
  status: s,
  count: SUBMISSIONS.filter((c) => c.status === s).length,
}));

export default function MySubmissionsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = SUBMISSIONS.filter((c) => {
    const q = search.toLowerCase();
    const matchSearch =
      c.name.toLowerCase().includes(q) ||
      c.role.toLowerCase().includes(q) ||
      c.company.toLowerCase().includes(q);
    const matchStatus = statusFilter === "All" || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="flex min-h-screen bg-gray-50 text-sm">
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

      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div>
            <h1 className="font-medium text-base">My submissions</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              {SUBMISSIONS.length} total candidates submitted
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-600 hover:bg-gray-50">
              <Download className="w-3.5 h-3.5" /> Export
            </button>
            <Link
              href="/vendor/submit-candidate"
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-[13px] hover:bg-green-700 transition"
            >
              + Submit new
            </Link>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* Pipeline mini-summary */}
          <div className="grid grid-cols-6 gap-2">
            {PIPELINE_COUNTS.map((p) => (
              <div
                key={p.status}
                onClick={() => setStatusFilter(p.status)}
                className={`bg-white border rounded-lg p-3 text-center cursor-pointer transition
                  ${statusFilter === p.status ? "border-green-500 bg-green-50" : "border-gray-100 hover:border-gray-200"}`}
              >
                <p className="text-lg font-medium">{p.count}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{p.status}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, role or company..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500 bg-white"
              />
            </div>
            <div className="flex gap-1.5">
              {ALL_STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition
                    ${statusFilter === s ? "bg-green-600 text-white" : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"}`}
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
                  {[
                    "Candidate",
                    "Role / Company",
                    "Experience",
                    "CTC",
                    "Notice",
                    "Submitted",
                    "Status",
                    "",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-green-50 text-green-700 flex items-center justify-center text-xs font-medium shrink-0">
                          {c.initials}
                        </div>
                        <p className="font-medium text-[13px] truncate">
                          {c.name}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-[13px] truncate">{c.role}</p>
                      <p className="text-[11px] text-gray-400 truncate">
                        {c.company}
                      </p>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-600">
                      {c.exp}
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-[12px] text-gray-500">
                        {c.currentCtc}
                      </p>
                      <p className="text-[12px] text-green-700">
                        {c.expectedCtc}
                      </p>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-600">
                      {c.notice}
                    </td>
                    <td className="px-4 py-3 text-[12px] text-gray-400">
                      {c.submitted}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${STATUS_STYLE[c.status]}`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-md transition">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-4 py-10 text-center text-gray-400"
                    >
                      No submissions match your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
