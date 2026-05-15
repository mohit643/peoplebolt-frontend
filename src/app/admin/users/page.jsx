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
  UserPlus,
  Edit3,
  Ban,
  CheckCircle2,
} from "lucide-react";

const USERS = [
  {
    id: 1,
    name: "Rahul Sharma",
    initials: "RS",
    email: "rahul@infosys.com",
    company: "Infosys BPO",
    role: "Employer",
    joined: "14 May 2025",
    status: "Active",
    lastLogin: "Today",
  },
  {
    id: 2,
    name: "TechStaff Pvt",
    initials: "TS",
    email: "hr@techstaff.com",
    company: "TechStaff Pvt",
    role: "Vendor",
    joined: "13 May 2025",
    status: "Pending",
    lastLogin: "—",
  },
  {
    id: 3,
    name: "Amit Kumar",
    initials: "AK",
    email: "amit@gmail.com",
    company: "—",
    role: "Candidate",
    joined: "13 May 2025",
    status: "Active",
    lastLogin: "Yesterday",
  },
  {
    id: 4,
    name: "CloudHire",
    initials: "CH",
    email: "ops@cloudhire.in",
    company: "CloudHire",
    role: "Vendor",
    joined: "12 May 2025",
    status: "Active",
    lastLogin: "12 May",
  },
  {
    id: 5,
    name: "Wipro HR",
    initials: "WH",
    email: "hr@wipro.com",
    company: "Wipro Ltd",
    role: "Employer",
    joined: "12 May 2025",
    status: "Active",
    lastLogin: "12 May",
  },
  {
    id: 6,
    name: "PixelPeople",
    initials: "PP",
    email: "info@pixelpeople.co",
    company: "PixelPeople",
    role: "Vendor",
    joined: "10 May 2025",
    status: "Pending",
    lastLogin: "—",
  },
  {
    id: 7,
    name: "Priya Singh",
    initials: "PS",
    email: "priya.s@gmail.com",
    company: "—",
    role: "Candidate",
    joined: "10 May 2025",
    status: "Active",
    lastLogin: "13 May",
  },
  {
    id: 8,
    name: "HCL Tech HR",
    initials: "HT",
    email: "talent@hcltech.com",
    company: "HCL Technologies",
    role: "Employer",
    joined: "8 May 2025",
    status: "Active",
    lastLogin: "10 May",
  },
  {
    id: 9,
    name: "DataForce",
    initials: "DF",
    email: "admin@dataforce.in",
    company: "DataForce India",
    role: "Vendor",
    joined: "8 May 2025",
    status: "Suspended",
    lastLogin: "8 May",
  },
  {
    id: 10,
    name: "Neha Kapoor",
    initials: "NK",
    email: "neha.k@outlook.com",
    company: "—",
    role: "Candidate",
    joined: "7 May 2025",
    status: "Active",
    lastLogin: "9 May",
  },
];

const ROLE_STYLE = {
  Employer: "bg-blue-50 text-blue-700",
  Vendor: "bg-green-50 text-green-700",
  Candidate: "bg-purple-50 text-purple-700",
  Admin: "bg-red-50 text-red-700",
};
const STATUS_STYLE = {
  Active: "bg-green-50 text-green-800",
  Pending: "bg-amber-50 text-amber-700",
  Suspended: "bg-red-50 text-red-700",
};

const ALL_ROLES = ["All", "Employer", "Vendor", "Candidate", "Admin"];
const ALL_STATUSES = ["All", "Active", "Pending", "Suspended"];

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
  { icon: Users, label: "Users", href: "/admin/users", active: true },
  { icon: Building2, label: "Vendors", href: "#" },
  { icon: Briefcase, label: "Jobs", href: "/admin/jobs" },
  { icon: Shield, label: "Verification", href: "/admin/verification" },
  { icon: BarChart3, label: "Reports", href: "/admin/reports" },
  { icon: Settings, label: "Settings", href: "#" },
];

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [users, setUsers] = useState(USERS);

  const filtered = users.filter((u) => {
    const q = search.toLowerCase();
    const matchSearch =
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q) ||
      u.company.toLowerCase().includes(q);
    const matchRole = roleFilter === "All" || u.role === roleFilter;
    const matchStatus = statusFilter === "All" || u.status === statusFilter;
    return matchSearch && matchRole && matchStatus;
  });

  function toggleStatus(id, newStatus) {
    setUsers(users.map((u) => (u.id === id ? { ...u, status: newStatus } : u)));
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
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-gray-500 hover:bg-gray-50 transition"
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
            <h1 className="font-medium text-base">User management</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              {filtered.length} of {users.length} users
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-600 hover:bg-gray-50">
              <Download className="w-3.5 h-3.5" /> Export
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 text-white rounded-lg text-[13px] hover:bg-purple-700">
              <UserPlus className="w-3.5 h-3.5" /> Add user
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Total users", value: users.length },
              {
                label: "Employers",
                value: users.filter((u) => u.role === "Employer").length,
              },
              {
                label: "Vendors",
                value: users.filter((u) => u.role === "Vendor").length,
              },
              {
                label: "Pending",
                value: users.filter((u) => u.status === "Pending").length,
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
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email or company..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500 bg-white"
              />
            </div>
            <div className="flex gap-1.5">
              {ALL_ROLES.map((r) => (
                <button
                  key={r}
                  onClick={() => setRoleFilter(r)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition
                    ${roleFilter === r ? "bg-purple-600 text-white" : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"}`}
                >
                  {r}
                </button>
              ))}
            </div>
            <div className="flex gap-1.5">
              {ALL_STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition
                    ${statusFilter === s ? "bg-gray-700 text-white" : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"}`}
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
                    User
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[22%]">
                    Email
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[16%]">
                    Company
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[10%]">
                    Role
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[10%]">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[10%]">
                    Joined
                  </th>
                  <th className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[10%]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-medium shrink-0">
                          {u.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-[13px] truncate">
                            {u.name}
                          </p>
                          <p className="text-[11px] text-gray-400">
                            Last: {u.lastLogin}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-500 truncate">
                      {u.email}
                    </td>
                    <td className="px-4 py-3 text-[13px] text-gray-500 truncate">
                      {u.company}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${ROLE_STYLE[u.role]}`}
                      >
                        {u.role}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${STATUS_STYLE[u.status]}`}
                      >
                        {u.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[12px] text-gray-400">
                      {u.joined}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          title="Edit"
                          className="p-1.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-md transition"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        {u.status === "Active" ? (
                          <button
                            title="Suspend"
                            onClick={() => toggleStatus(u.id, "Suspended")}
                            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition"
                          >
                            <Ban className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <button
                            title="Activate"
                            onClick={() => toggleStatus(u.id, "Active")}
                            className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-md transition"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
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
