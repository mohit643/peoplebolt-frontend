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
  TrendingUp,
  TrendingDown,
  ArrowUp,
} from "lucide-react";

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: Building2, label: "Vendors", href: "#" },
  { icon: Briefcase, label: "Jobs", href: "/admin/jobs" },
  { icon: Shield, label: "Verification", href: "/admin/verification" },
  { icon: BarChart3, label: "Reports", href: "/admin/reports", active: true },
  { icon: Settings, label: "Settings", href: "#" },
];

const MONTHLY = [
  { month: "Jan", jobs: 28, placements: 9, candidates: 120 },
  { month: "Feb", jobs: 34, placements: 12, candidates: 148 },
  { month: "Mar", jobs: 41, placements: 15, candidates: 180 },
  { month: "Apr", jobs: 55, placements: 20, candidates: 220 },
  { month: "May", jobs: 62, placements: 24, candidates: 265 },
];

const TOP_VENDORS = [
  {
    name: "TechStaff Pvt",
    initials: "TS",
    submitted: 32,
    shortlisted: 11,
    placed: 6,
    rate: "18.8%",
  },
  {
    name: "CloudHire",
    initials: "CH",
    submitted: 24,
    shortlisted: 8,
    placed: 4,
    rate: "16.7%",
  },
  {
    name: "TalentBridge",
    initials: "TB",
    submitted: 18,
    shortlisted: 6,
    placed: 3,
    rate: "16.7%",
  },
  {
    name: "PixelPeople",
    initials: "PP",
    submitted: 14,
    shortlisted: 3,
    placed: 1,
    rate: "7.1%",
  },
  {
    name: "DataForce India",
    initials: "DF",
    submitted: 10,
    shortlisted: 2,
    placed: 0,
    rate: "0%",
  },
];

const TOP_EMPLOYERS = [
  {
    name: "Infosys BPO",
    initials: "IB",
    jobs: 8,
    hires: 12,
    avgTime: "18 days",
  },
  {
    name: "TCS Digital",
    initials: "TD",
    jobs: 6,
    hires: 8,
    avgTime: "22 days",
  },
  { name: "Wipro Ltd", initials: "WL", jobs: 5, hires: 6, avgTime: "25 days" },
  { name: "HCL Tech", initials: "HT", jobs: 4, hires: 5, avgTime: "20 days" },
  { name: "Accenture", initials: "AC", jobs: 3, hires: 3, avgTime: "30 days" },
];

const PIPELINE_DATA = [
  { stage: "Applied", count: 265, pct: 100 },
  { stage: "Screened", count: 140, pct: 53 },
  { stage: "Shortlisted", count: 72, pct: 27 },
  { stage: "Interview", count: 38, pct: 14 },
  { stage: "Offered", count: 24, pct: 9 },
  { stage: "Placed", count: 19, pct: 7 },
];

const BAR_COLORS = ["#1a56db", "#7c3aed", "#d97706", "#059669", "#e24b4a"];

function AdminSidebar() {
  return (
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
  );
}

export default function AdminReportsPage() {
  const maxJobs = Math.max(...MONTHLY.map((m) => m.jobs));

  return (
    <div className="flex min-h-screen bg-gray-50 text-sm">
      <AdminSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div>
            <h1 className="font-medium text-base">Reports & analytics</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Platform performance — January to May 2025
            </p>
          </div>
          <div className="flex gap-2">
            <select className="px-3 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-600 focus:outline-none focus:border-purple-500">
              <option>Last 5 months</option>
              <option>Last 3 months</option>
              <option>This month</option>
            </select>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-600 hover:bg-gray-50">
              Export PDF
            </button>
          </div>
        </div>

        <div className="p-6 space-y-5 overflow-y-auto">
          {/* KPI cards */}
          <div className="grid grid-cols-4 gap-3">
            {[
              {
                label: "Total placements",
                value: "89",
                change: "+24% vs last month",
                up: true,
              },
              {
                label: "Avg. time to hire",
                value: "23d",
                change: "-2 days improved",
                up: true,
              },
              {
                label: "Vendor fill rate",
                value: "7.2%",
                change: "+0.8% this month",
                up: true,
              },
              {
                label: "Active job fill rate",
                value: "64%",
                change: "-3% this month",
                up: false,
              },
            ].map((k) => (
              <div key={k.label} className="bg-gray-100 rounded-lg p-4">
                <p className="text-[11px] text-gray-500 mb-2">{k.label}</p>
                <p className="text-2xl font-medium">{k.value}</p>
                <p
                  className={`text-[11px] mt-1 flex items-center gap-0.5 ${k.up ? "text-green-700" : "text-red-600"}`}
                >
                  {k.up ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {k.change}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* Monthly Jobs Bar Chart */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <p className="font-medium mb-4">Monthly job postings</p>
              <div className="flex items-end gap-4 h-40">
                {MONTHLY.map((m, i) => (
                  <div
                    key={m.month}
                    className="flex-1 flex flex-col items-center gap-1.5"
                  >
                    <span className="text-[11px] text-gray-500">{m.jobs}</span>
                    <div
                      className="w-full rounded-t-md"
                      style={{
                        height: `${(m.jobs / maxJobs) * 100}%`,
                        background: BAR_COLORS[i],
                        minHeight: "8px",
                      }}
                    />
                    <span className="text-[11px] text-gray-400">{m.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Funnel */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <p className="font-medium mb-4">Hiring funnel (all time)</p>
              <div className="space-y-2.5">
                {PIPELINE_DATA.map((p) => (
                  <div key={p.stage}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[12px] text-gray-600">
                        {p.stage}
                      </span>
                      <span className="text-[12px] font-medium">
                        {p.count}{" "}
                        <span className="text-gray-400 font-normal">
                          ({p.pct}%)
                        </span>
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full transition-all"
                        style={{ width: `${p.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Monthly Table */}
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <p className="font-medium mb-4">Monthly breakdown</p>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {[
                    "Month",
                    "Jobs posted",
                    "Candidates",
                    "Shortlisted",
                    "Placed",
                    "Placement rate",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left pb-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {MONTHLY.map((m) => {
                  const rate = ((m.placements / m.candidates) * 100).toFixed(1);
                  return (
                    <tr key={m.month} className="hover:bg-gray-50">
                      <td className="py-2.5 font-medium text-[13px]">
                        {m.month} 2025
                      </td>
                      <td className="py-2.5 text-[13px] text-gray-600">
                        {m.jobs}
                      </td>
                      <td className="py-2.5 text-[13px] text-gray-600">
                        {m.candidates}
                      </td>
                      <td className="py-2.5 text-[13px] text-gray-600">
                        {Math.round(m.candidates * 0.27)}
                      </td>
                      <td className="py-2.5 text-[13px] text-gray-600">
                        {m.placements}
                      </td>
                      <td className="py-2.5">
                        <span className="text-[12px] px-2 py-0.5 bg-green-50 text-green-700 rounded-full">
                          {rate}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* Top Vendors */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <p className="font-medium mb-4">Top performing vendors</p>
              <div className="divide-y divide-gray-50">
                {TOP_VENDORS.map((v, i) => (
                  <div key={v.name} className="flex items-center gap-3 py-2.5">
                    <span className="text-[12px] font-medium text-gray-400 w-4 shrink-0">
                      #{i + 1}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-green-50 text-green-700 flex items-center justify-center text-xs font-medium shrink-0">
                      {v.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-[13px] truncate">
                        {v.name}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {v.submitted} submitted · {v.placed} placed
                      </p>
                    </div>
                    <span
                      className={`text-[12px] font-medium shrink-0 ${parseFloat(v.rate) > 10 ? "text-green-700" : "text-gray-500"}`}
                    >
                      {v.rate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Employers */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <p className="font-medium mb-4">Top employers by hires</p>
              <div className="divide-y divide-gray-50">
                {TOP_EMPLOYERS.map((e, i) => (
                  <div key={e.name} className="flex items-center gap-3 py-2.5">
                    <span className="text-[12px] font-medium text-gray-400 w-4 shrink-0">
                      #{i + 1}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center text-xs font-medium shrink-0">
                      {e.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-[13px] truncate">
                        {e.name}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {e.jobs} jobs · avg {e.avgTime}
                      </p>
                    </div>
                    <span className="text-[13px] font-medium text-blue-700 shrink-0">
                      {e.hires} hires
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
