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
  Bell,
  ArrowUp,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
} from "lucide-react";

const STATS = [
  {
    label: "Total employers",
    value: 48,
    change: "+3 this week",
    up: true,
    icon: Building2,
    color: "text-blue-600",
  },
  {
    label: "Total vendors",
    value: 124,
    change: "+7 this week",
    up: true,
    icon: Users,
    color: "text-green-600",
  },
  {
    label: "Active jobs",
    value: 312,
    change: "+24 today",
    up: true,
    icon: Briefcase,
    color: "text-purple-600",
  },
  {
    label: "Placements made",
    value: 89,
    change: "+11 this month",
    up: true,
    icon: CheckCircle2,
    color: "text-amber-600",
  },
];

const RECENT_USERS = [
  {
    name: "Rahul Sharma",
    initials: "RS",
    role: "Employer",
    company: "Infosys BPO",
    joined: "14 May",
    status: "Active",
  },
  {
    name: "TechStaff Pvt",
    initials: "TS",
    role: "Vendor",
    company: "TechStaff Pvt",
    joined: "13 May",
    status: "Pending",
  },
  {
    name: "Priya Singh",
    initials: "PS",
    role: "Candidate",
    company: "—",
    joined: "13 May",
    status: "Active",
  },
  {
    name: "CloudHire",
    initials: "CH",
    role: "Vendor",
    company: "CloudHire",
    joined: "12 May",
    status: "Active",
  },
  {
    name: "Wipro HR",
    initials: "WH",
    role: "Employer",
    company: "Wipro Ltd",
    joined: "12 May",
    status: "Active",
  },
  {
    name: "PixelPeople",
    initials: "PP",
    role: "Vendor",
    company: "PixelPeople",
    joined: "10 May",
    status: "Pending",
  },
];

const PENDING_VENDORS = [
  {
    name: "TechStaff Pvt",
    initials: "TS",
    city: "Noida",
    submitted: "13 May",
    docs: 3,
  },
  {
    name: "PixelPeople",
    initials: "PP",
    city: "Mumbai",
    submitted: "10 May",
    docs: 2,
  },
  {
    name: "DataForce India",
    initials: "DF",
    city: "Hyderabad",
    submitted: "8 May",
    docs: 4,
  },
];

const RECENT_JOBS = [
  {
    title: "Senior React Developer",
    employer: "Infosys BPO",
    posted: "12 May",
    candidates: 8,
    status: "Active",
  },
  {
    title: "DevOps Engineer",
    employer: "TCS Digital",
    posted: "11 May",
    candidates: 4,
    status: "Active",
  },
  {
    title: "Product Manager",
    employer: "Wipro Ltd",
    posted: "10 May",
    candidates: 2,
    status: "Active",
  },
  {
    title: "Data Analyst",
    employer: "Cognizant",
    posted: "9 May",
    candidates: 6,
    status: "Closed",
  },
];

const STATUS_STYLE = {
  Active: "bg-green-50 text-green-800",
  Pending: "bg-amber-50 text-amber-700",
  Closed: "bg-gray-100 text-gray-500",
};

const ROLE_STYLE = {
  Employer: "bg-blue-50 text-blue-700",
  Vendor: "bg-green-50 text-green-700",
  Candidate: "bg-purple-50 text-purple-700",
  Admin: "bg-red-50 text-red-700",
};

const NAV = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/admin/dashboard",
    active: true,
  },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: Building2, label: "Vendors", href: "#" },
  { icon: Briefcase, label: "Jobs", href: "/admin/jobs" },
  { icon: Shield, label: "Verification", href: "#" },
  { icon: BarChart3, label: "Reports", href: "/admin/reports" },
  { icon: Settings, label: "Settings", href: "#" },
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-sm">
      {/* SIDEBAR */}
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

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div>
            <h1 className="font-medium text-base">Admin Dashboard</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Platform overview — Thursday, 14 May 2025
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="relative w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-50">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-5 overflow-y-auto">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-3">
            {STATS.map((s) => (
              <div key={s.label} className="bg-gray-100 rounded-lg p-4">
                <div
                  className={`flex items-center gap-1.5 text-xs mb-2 ${s.color}`}
                >
                  <s.icon className="w-3.5 h-3.5" />
                  {s.label}
                </div>
                <p className="text-2xl font-medium">{s.value}</p>
                <p className="text-[11px] mt-1 text-green-700 flex items-center gap-0.5">
                  <ArrowUp className="w-3 h-3" />
                  {s.change}
                </p>
              </div>
            ))}
          </div>

          {/* Alert: pending vendors */}
          {PENDING_VENDORS.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-amber-800 text-[13px]">
                  {PENDING_VENDORS.length} vendors pending verification
                </p>
                <p className="text-[12px] text-amber-600 mt-0.5">
                  Review and approve vendor accounts to allow candidate
                  submissions.
                </p>
              </div>
              <Link
                href="#"
                className="text-xs text-amber-700 font-medium hover:underline shrink-0"
              >
                Review now →
              </Link>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            {/* Pending Vendor Verification */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="font-medium">Pending vendor verification</p>
                <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                  {PENDING_VENDORS.length} pending
                </span>
              </div>
              <div className="divide-y divide-gray-50">
                {PENDING_VENDORS.map((v) => (
                  <div key={v.name} className="flex items-center gap-3 py-3">
                    <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-medium shrink-0">
                      {v.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-[13px]">{v.name}</p>
                      <p className="text-[11px] text-gray-400">
                        {v.city} · {v.docs} docs · Submitted {v.submitted}
                      </p>
                    </div>
                    <div className="flex gap-1.5 shrink-0">
                      <button className="px-2.5 py-1 bg-green-50 text-green-700 text-[11px] rounded-md hover:bg-green-100 transition flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Approve
                      </button>
                      <button className="px-2.5 py-1 bg-red-50 text-red-600 text-[11px] rounded-md hover:bg-red-100 transition flex items-center gap-1">
                        <XCircle className="w-3 h-3" /> Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Users */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="font-medium">Recent registrations</p>
                <Link
                  href="/admin/users"
                  className="text-xs text-purple-600 hover:underline"
                >
                  View all
                </Link>
              </div>
              <div className="divide-y divide-gray-50">
                {RECENT_USERS.map((u) => (
                  <div key={u.name} className="flex items-center gap-3 py-2.5">
                    <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-medium shrink-0">
                      {u.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-[13px] truncate">
                        {u.name}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {u.company} · {u.joined}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${ROLE_STYLE[u.role]}`}
                      >
                        {u.role}
                      </span>
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full ${STATUS_STYLE[u.status]}`}
                      >
                        {u.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Jobs */}
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="font-medium">Recent job postings</p>
              <Link
                href="/admin/jobs"
                className="text-xs text-purple-600 hover:underline"
              >
                View all
              </Link>
            </div>
            <table className="w-full table-fixed">
              <thead>
                <tr className="border-b border-gray-50">
                  <th className="text-left pb-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[35%]">
                    Job title
                  </th>
                  <th className="text-left pb-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[25%]">
                    Employer
                  </th>
                  <th className="text-left pb-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[15%]">
                    Posted
                  </th>
                  <th className="text-left pb-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[15%]">
                    Candidates
                  </th>
                  <th className="text-left pb-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider w-[10%]">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {RECENT_JOBS.map((j) => (
                  <tr key={j.title} className="hover:bg-gray-50">
                    <td className="py-2.5 text-[13px] font-medium truncate pr-3">
                      {j.title}
                    </td>
                    <td className="py-2.5 text-[13px] text-gray-500 truncate pr-3">
                      {j.employer}
                    </td>
                    <td className="py-2.5 text-[13px] text-gray-500">
                      {j.posted}
                    </td>
                    <td className="py-2.5 text-[13px] text-gray-500">
                      {j.candidates}
                    </td>
                    <td className="py-2.5">
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${STATUS_STYLE[j.status]}`}
                      >
                        {j.status}
                      </span>
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
