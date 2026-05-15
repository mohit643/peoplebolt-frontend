"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  LayoutDashboard,
  Briefcase,
  Users,
  Building2,
  BarChart3,
  Mail,
  Settings,
  Search,
  Filter,
  Download,
  Eye,
} from "lucide-react";

const CANDIDATES = [
  {
    id: 1,
    name: "Amit Kumar",
    initials: "AK",
    role: "Senior React Developer",
    vendor: "TechStaff Pvt",
    exp: "4 yrs",
    location: "Noida",
    status: "Shortlisted",
    applied: "12 May 2025",
    salary: "₹14 LPA",
  },
  {
    id: 2,
    name: "Priya Singh",
    initials: "PS",
    role: "DevOps Engineer",
    vendor: "CloudHire",
    exp: "5 yrs",
    location: "Remote",
    status: "Interview",
    applied: "11 May 2025",
    salary: "₹16 LPA",
  },
  {
    id: 3,
    name: "Rohit Verma",
    initials: "RV",
    role: "Product Manager",
    vendor: "TalentBridge",
    exp: "6 yrs",
    location: "Bangalore",
    status: "Offered",
    applied: "10 May 2025",
    salary: "₹20 LPA",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    initials: "NK",
    role: "UI/UX Designer",
    vendor: "PixelPeople",
    exp: "3 yrs",
    location: "Mumbai",
    status: "Applied",
    applied: "13 May 2025",
    salary: "₹10 LPA",
  },
  {
    id: 5,
    name: "Suresh Mishra",
    initials: "SM",
    role: "Data Analyst",
    vendor: "DataForce",
    exp: "2 yrs",
    location: "Hyderabad",
    status: "Applied",
    applied: "13 May 2025",
    salary: "₹8 LPA",
  },
  {
    id: 6,
    name: "Kavita Rao",
    initials: "KR",
    role: "Senior React Developer",
    vendor: "TechStaff Pvt",
    exp: "5 yrs",
    location: "Noida",
    status: "Screened",
    applied: "12 May 2025",
    salary: "₹15 LPA",
  },
  {
    id: 7,
    name: "Manish Gupta",
    initials: "MG",
    role: "DevOps Engineer",
    vendor: "CloudHire",
    exp: "4 yrs",
    location: "Pune",
    status: "Rejected",
    applied: "9 May 2025",
    salary: "₹14 LPA",
  },
  {
    id: 8,
    name: "Anjali Mehta",
    initials: "AM",
    role: "Product Manager",
    vendor: "TalentBridge",
    exp: "7 yrs",
    location: "Delhi",
    status: "Shortlisted",
    applied: "11 May 2025",
    salary: "₹22 LPA",
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
  { icon: LayoutDashboard, label: "Dashboard", href: "/employer/dashboard" },
  { icon: Briefcase, label: "Job postings", href: "/employer/post-job" },
  {
    icon: Users,
    label: "Candidates",
    href: "/employer/candidates",
    active: true,
  },
  { icon: Building2, label: "Vendors", href: "#" },
  { icon: BarChart3, label: "Reports", href: "#" },
  { icon: Mail, label: "Messages", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

export default function CandidatesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = CANDIDATES.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.role.toLowerCase().includes(search.toLowerCase()) ||
      c.vendor.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="flex min-h-screen bg-gray-50 text-sm">
      {/* SIDEBAR */}
      <aside className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="flex items-center gap-2.5 px-4 py-5 border-b border-gray-100">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-4 h-4" />
          </div>
          <span className="font-medium text-base">PeopleBolt</span>
        </div>
        <nav className="flex-1 py-3 px-2 space-y-0.5">
          <p className="text-[11px] text-gray-400 uppercase tracking-wider px-3 py-2">
            Main
          </p>
          {NAV.slice(0, 4).map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition
                ${n.active ? "bg-blue-50 text-blue-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"}`}
            >
              <n.icon className="w-4 h-4" />
              {n.label}
            </Link>
          ))}
          <p className="text-[11px] text-gray-400 uppercase tracking-wider px-3 py-2 mt-2">
            Manage
          </p>
          {NAV.slice(4).map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-gray-500 hover:bg-gray-50 transition"
            >
              <n.icon className="w-4 h-4" />
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-gray-100">
          <div className="flex items-center gap-2.5 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-medium">
              RS
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-medium truncate">Rahul Sharma</p>
              <p className="text-[11px] text-gray-400">Employer</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div>
            <h1 className="font-medium text-base">Candidates</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              {filtered.length} candidates across all jobs
            </p>
          </div>
          <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-600 hover:bg-gray-50">
            <Download className="w-3.5 h-3.5" /> Export CSV
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Filters */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, role or vendor..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 bg-white"
              />
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {ALL_STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition
                    ${statusFilter === s ? "bg-blue-600 text-white" : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"}`}
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
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-500 uppercase tracking-wider w-[22%]">
                    Candidate
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-500 uppercase tracking-wider w-[20%]">
                    Role applied
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-500 uppercase tracking-wider w-[15%]">
                    Vendor
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-500 uppercase tracking-wider w-[10%]">
                    Exp.
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-500 uppercase tracking-wider w-[10%]">
                    Salary
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-500 uppercase tracking-wider w-[13%]">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-500 uppercase tracking-wider w-[10%]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-medium shrink-0">
                          {c.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-[13px] truncate">
                            {c.name}
                          </p>
                          <p className="text-[11px] text-gray-400 truncate">
                            {c.location} · {c.applied}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-600 truncate">
                      {c.role}
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-600 truncate">
                      {c.vendor}
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-600">
                      {c.exp}
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-600">
                      {c.salary}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${STATUS_STYLE[c.status]}`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
                          title="View profile"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <select
                          defaultValue={c.status}
                          onChange={() => {
                            /* TODO: PATCH /api/candidates/:id/status */
                          }}
                          className="text-[11px] border border-gray-200 rounded-md px-1.5 py-1 text-gray-600 focus:outline-none focus:border-blue-500 bg-white"
                        >
                          {ALL_STATUSES.slice(1).map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-10 text-center text-gray-400 text-sm"
                    >
                      No candidates found matching your filters.
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
