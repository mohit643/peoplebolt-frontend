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
  Bell,
  Plus,
  ArrowUp,
  Calendar,
} from "lucide-react";

// ─── DUMMY DATA ───
const STATS = [
  {
    label: "Active jobs",
    value: 12,
    change: "+3 this week",
    up: true,
    icon: Briefcase,
  },
  {
    label: "Candidates received",
    value: 84,
    change: "+12 today",
    up: true,
    icon: Users,
  },
  {
    label: "Interviews scheduled",
    value: 9,
    change: "This week",
    up: null,
    icon: Calendar,
  },
  {
    label: "Active vendors",
    value: 7,
    change: "+1 new",
    up: true,
    icon: Building2,
  },
];

const PIPELINE = [
  { label: "Applied", count: 84, color: "#1a56db" },
  { label: "Screened", count: 41, color: "#7c3aed" },
  { label: "Shortlisted", count: 18, color: "#d97706" },
  { label: "Interview", count: 9, color: "#059669" },
  { label: "Offered", count: 3, color: "#e24b4a" },
];

const JOBS = [
  {
    title: "Senior React Developer",
    location: "Noida",
    type: "Full-time",
    vendors: 5,
    status: "Active",
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    vendors: 3,
    status: "Active",
  },
  {
    title: "Product Manager",
    location: "Bangalore",
    type: "Full-time",
    vendors: 2,
    status: "Review",
  },
  {
    title: "UI/UX Designer",
    location: "Mumbai",
    type: "Contract",
    vendors: 4,
    status: "New",
  },
  {
    title: "Data Analyst",
    location: "Hyderabad",
    type: "Full-time",
    vendors: 1,
    status: "Closed",
  },
];

const CANDIDATES = [
  {
    name: "Amit Kumar",
    initials: "AK",
    role: "React Developer",
    vendor: "TechStaff Pvt",
    status: "Shortlisted",
  },
  {
    name: "Priya Singh",
    initials: "PS",
    role: "DevOps",
    vendor: "CloudHire",
    status: "Interview",
  },
  {
    name: "Rohit Verma",
    initials: "RV",
    role: "Product Manager",
    vendor: "TalentBridge",
    status: "Offered",
  },
  {
    name: "Neha Kapoor",
    initials: "NK",
    role: "UI Designer",
    vendor: "PixelPeople",
    status: "Applied",
  },
  {
    name: "Suresh Mishra",
    initials: "SM",
    role: "Data Analyst",
    vendor: "DataForce",
    status: "Applied",
  },
];

const STATUS_STYLE = {
  Active: "bg-green-50  text-green-800",
  New: "bg-blue-50   text-blue-800",
  Review: "bg-amber-50  text-amber-800",
  Closed: "bg-gray-100  text-gray-500",
  Shortlisted: "bg-amber-50  text-amber-800",
  Interview: "bg-blue-50   text-blue-800",
  Offered: "bg-green-50  text-green-800",
  Applied: "bg-gray-100  text-gray-500",
};

// ─── NAV ITEMS ───
const NAV = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/employer/dashboard",
    active: true,
  },
  { icon: Briefcase, label: "Job postings", href: "/employer/post-job" },
  { icon: Users, label: "Candidates", href: "/employer/candidates" },
  { icon: Building2, label: "Vendors", href: "#" },
  { icon: BarChart3, label: "Reports", href: "#" },
  { icon: Mail, label: "Messages", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

export default function EmployerDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-sm">
      {/* ─── SIDEBAR ─── */}
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
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition"
            >
              <n.icon className="w-4 h-4" />
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-100">
          <div className="flex items-center gap-2.5 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-medium shrink-0">
              RS
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-medium truncate">Rahul Sharma</p>
              <p className="text-[11px] text-gray-400">Employer</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ─── MAIN ─── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div>
            <h1 className="font-medium text-base">Good morning, Rahul</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Thursday, 14 May 2025 — here's your hiring overview
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="relative w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-50">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
            <Link
              href="/employer/post-job"
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg text-[13px] hover:bg-blue-700 transition"
            >
              <Plus className="w-4 h-4" /> Post a job
            </Link>
          </div>
        </div>

        <div className="p-6 space-y-5 overflow-y-auto">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-3">
            {STATS.map((s) => (
              <div key={s.label} className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                  <s.icon className="w-3.5 h-3.5" />
                  {s.label}
                </div>
                <p className="text-2xl font-medium">{s.value}</p>
                <p
                  className={`text-[11px] mt-1 flex items-center gap-0.5
                  ${s.up === true ? "text-green-700" : s.up === false ? "text-red-700" : "text-gray-400"}`}
                >
                  {s.up === true && <ArrowUp className="w-3 h-3" />}
                  {s.change}
                </p>
              </div>
            ))}
          </div>

          {/* Pipeline */}
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="font-medium">Hiring pipeline</p>
              <p className="text-xs text-gray-400">All active jobs combined</p>
            </div>
            <div className="flex gap-3">
              {PIPELINE.map((p) => (
                <div
                  key={p.label}
                  className="flex-1 text-center bg-gray-50 rounded-lg py-3 px-2"
                >
                  <p className="text-xl font-medium">{p.count}</p>
                  <p className="text-[11px] text-gray-500 mt-1">{p.label}</p>
                  <div
                    className="h-1 rounded-full mt-2"
                    style={{ background: p.color }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Jobs + Candidates */}
          <div className="grid grid-cols-2 gap-4">
            {/* Jobs */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="font-medium">Recent job postings</p>
                <Link
                  href="/employer/post-job"
                  className="text-xs text-blue-600 hover:underline"
                >
                  View all
                </Link>
              </div>
              <div className="divide-y divide-gray-50">
                {JOBS.map((j) => (
                  <div
                    key={j.title}
                    className="flex items-start justify-between py-2.5"
                  >
                    <div>
                      <p className="font-medium text-[13px]">{j.title}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        {j.location} · {j.type} · {j.vendors} vendor
                        {j.vendors > 1 ? "s" : ""}
                      </p>
                    </div>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full font-medium shrink-0 ml-3 ${STATUS_STYLE[j.status]}`}
                    >
                      {j.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Candidates */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="font-medium">Recent candidates</p>
                <Link
                  href="/employer/candidates"
                  className="text-xs text-blue-600 hover:underline"
                >
                  View all
                </Link>
              </div>
              <div className="divide-y divide-gray-50">
                {CANDIDATES.map((c) => (
                  <div key={c.name} className="flex items-center gap-3 py-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-medium shrink-0">
                      {c.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-[13px] truncate">
                        {c.name}
                      </p>
                      <p className="text-[11px] text-gray-400 truncate">
                        {c.role} · {c.vendor}
                      </p>
                    </div>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full font-medium shrink-0 ${STATUS_STYLE[c.status]}`}
                    >
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
