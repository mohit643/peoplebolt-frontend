import Link from "next/link";
import {
  Zap,
  LayoutDashboard,
  Briefcase,
  Users,
  FileUp,
  BarChart3,
  Settings,
  Bell,
  Plus,
  ArrowUp,
  CheckCircle2,
  Clock,
} from "lucide-react";

const STATS = [
  {
    label: "Jobs available",
    value: 18,
    change: "+4 new today",
    up: true,
    icon: Briefcase,
  },
  {
    label: "Candidates submitted",
    value: 32,
    change: "+6 this week",
    up: true,
    icon: Users,
  },
  {
    label: "Shortlisted",
    value: 11,
    change: "by employers",
    up: null,
    icon: CheckCircle2,
  },
  {
    label: "Pending review",
    value: 8,
    change: "awaiting reply",
    up: null,
    icon: Clock,
  },
];

const JOBS = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Infosys BPO",
    location: "Noida",
    salary: "₹12–18 LPA",
    deadline: "20 May",
    submitted: 2,
    status: "Open",
  },
  {
    id: 2,
    title: "DevOps Engineer",
    company: "TCS Digital",
    location: "Remote",
    salary: "₹14–20 LPA",
    deadline: "22 May",
    submitted: 1,
    status: "Open",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Wipro Ltd",
    location: "Bangalore",
    salary: "₹18–26 LPA",
    deadline: "18 May",
    submitted: 0,
    status: "Open",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "HCL Tech",
    location: "Mumbai",
    salary: "₹8–12 LPA",
    deadline: "25 May",
    submitted: 3,
    status: "Open",
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Cognizant",
    location: "Hyderabad",
    salary: "₹7–11 LPA",
    deadline: "15 May",
    submitted: 1,
    status: "Closed",
  },
];

const SUBMISSIONS = [
  {
    name: "Amit Kumar",
    initials: "AK",
    role: "Senior React Developer",
    company: "Infosys BPO",
    status: "Shortlisted",
    date: "12 May",
  },
  {
    name: "Kavita Rao",
    initials: "KR",
    role: "Senior React Developer",
    company: "Infosys BPO",
    status: "Screened",
    date: "12 May",
  },
  {
    name: "Priya Singh",
    initials: "PS",
    role: "DevOps Engineer",
    company: "TCS Digital",
    status: "Interview",
    date: "11 May",
  },
  {
    name: "Neha Kapoor",
    initials: "NK",
    role: "UI/UX Designer",
    company: "HCL Tech",
    status: "Applied",
    date: "13 May",
  },
  {
    name: "Suresh Mishra",
    initials: "SM",
    role: "Data Analyst",
    company: "Cognizant",
    status: "Applied",
    date: "13 May",
  },
  {
    name: "Manish Gupta",
    initials: "MG",
    role: "DevOps Engineer",
    company: "TCS Digital",
    status: "Rejected",
    date: "9 May",
  },
];

const STATUS_STYLE = {
  Applied: "bg-gray-100 text-gray-600",
  Screened: "bg-purple-50 text-purple-700",
  Shortlisted: "bg-amber-50 text-amber-700",
  Interview: "bg-blue-50 text-blue-700",
  Offered: "bg-green-50 text-green-800",
  Rejected: "bg-red-50 text-red-700",
  Open: "bg-green-50 text-green-800",
  Closed: "bg-gray-100 text-gray-500",
};

const NAV = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/vendor/dashboard",
    active: true,
  },
  { icon: Briefcase, label: "Browse jobs", href: "/vendor/jobs" },
  { icon: FileUp, label: "Submit candidate", href: "/vendor/submit-candidate" },
  { icon: Users, label: "My submissions", href: "#" },
  { icon: BarChart3, label: "Reports", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

export default function VendorDashboard() {
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
          <p className="text-[11px] text-gray-400 uppercase tracking-wider px-3 py-2">
            Main
          </p>
          {NAV.slice(0, 4).map((n) => (
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
            <h1 className="font-medium text-base">Vendor Dashboard</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Thursday, 14 May 2025 — TechStaff Pvt
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="relative w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-50">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
            <Link
              href="/vendor/submit-candidate"
              className="flex items-center gap-1.5 px-4 py-2 bg-green-600 text-white rounded-lg text-[13px] hover:bg-green-700 transition"
            >
              <Plus className="w-4 h-4" /> Submit candidate
            </Link>
          </div>
        </div>

        <div className="p-6 space-y-5 overflow-y-auto">
          <div className="grid grid-cols-4 gap-3">
            {STATS.map((s) => (
              <div key={s.label} className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                  <s.icon className="w-3.5 h-3.5" />
                  {s.label}
                </div>
                <p className="text-2xl font-medium">{s.value}</p>
                <p
                  className={`text-[11px] mt-1 flex items-center gap-0.5 ${s.up ? "text-green-700" : "text-gray-400"}`}
                >
                  {s.up && <ArrowUp className="w-3 h-3" />}
                  {s.change}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="font-medium">Available jobs</p>
                <Link
                  href="/vendor/jobs"
                  className="text-xs text-green-600 hover:underline"
                >
                  View all
                </Link>
              </div>
              <div className="divide-y divide-gray-50">
                {JOBS.map((j) => (
                  <div key={j.id} className="py-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-medium text-[13px] truncate">
                          {j.title}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                          {j.company} · {j.location} · {j.salary}
                        </p>
                        <p className="text-[11px] text-gray-400">
                          Deadline: {j.deadline} · {j.submitted} submitted
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${STATUS_STYLE[j.status]}`}
                        >
                          {j.status}
                        </span>
                        {j.status === "Open" && (
                          <Link
                            href="/vendor/submit-candidate"
                            className="text-[11px] text-green-600 hover:underline"
                          >
                            Submit →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="font-medium">My submissions</p>
                <span className="text-xs text-gray-400">
                  {SUBMISSIONS.length} total
                </span>
              </div>
              <div className="divide-y divide-gray-50">
                {SUBMISSIONS.map((s) => (
                  <div key={s.name} className="flex items-center gap-3 py-2.5">
                    <div className="w-8 h-8 rounded-full bg-green-50 text-green-700 flex items-center justify-center text-xs font-medium shrink-0">
                      {s.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-[13px] truncate">
                        {s.name}
                      </p>
                      <p className="text-[11px] text-gray-400 truncate">
                        {s.role} · {s.company} · {s.date}
                      </p>
                    </div>
                    <span
                      className={`text-[11px] px-2.5 py-1 rounded-full font-medium shrink-0 ${STATUS_STYLE[s.status]}`}
                    >
                      {s.status}
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
