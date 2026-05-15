import Link from "next/link";
import {
  Building2,
  Users,
  User,
  Shield,
  Briefcase,
  UserCheck,
  FileUp,
  ShieldCheck,
  BarChart3,
  Lock,
  Zap,
  Sparkles,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ─── NAVBAR ─── */}
      <nav className="sticky top-0 z-10 flex items-center justify-between px-10 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3 text-xl font-medium">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
            <Zap className="text-white w-5 h-5" />
          </div>
          PeopleBolt
        </div>

        <div className="hidden md:flex gap-7 text-sm text-gray-500">
          <a href="#features" className="hover:text-gray-900 transition">
            Features
          </a>
          <a href="#employers" className="hover:text-gray-900 transition">
            For Employers
          </a>
          <a href="#vendors" className="hover:text-gray-900 transition">
            For Vendors
          </a>
          <a href="#roles" className="hover:text-gray-900 transition">
            Roles
          </a>
        </div>

        <div className="flex gap-3">
          <Link
            href="/auth/login"
            className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="text-center py-20 px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-3 h-3" />
          HR Marketplace Platform — Phase 1 MVP
        </div>

        <h1 className="text-5xl font-medium text-gray-900 leading-tight mb-5">
          Connect <span className="text-blue-600">Employers</span>, Vendors
          <br />& Candidates — Seamlessly
        </h1>

        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
          PeopleBolt is a unified HR marketplace where employers post
          requirements, vendors submit candidates, and hiring gets done faster
          than ever before.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/auth/login?role=employer"
            className="flex items-center gap-2 px-7 py-3 bg-blue-600 text-white rounded-lg text-base font-medium hover:bg-blue-700 transition"
          >
            <Building2 className="w-5 h-5" /> I'm an Employer
          </Link>
          <Link
            href="/auth/login?role=vendor"
            className="flex items-center gap-2 px-7 py-3 border border-gray-200 rounded-lg text-base font-medium hover:bg-gray-50 transition"
          >
            <Users className="w-5 h-5" /> I'm a Vendor
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 divide-x divide-gray-200 border border-gray-200 rounded-xl overflow-hidden max-w-xl mx-auto">
          {[
            { num: "1,200+", label: "Active Jobs" },
            { num: "340+", label: "Verified Vendors" },
            { num: "8,500+", label: "Candidates Placed" },
          ].map((s) => (
            <div key={s.label} className="bg-white py-5 text-center">
              <p className="text-2xl font-medium text-blue-600">{s.num}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-100 mx-10" />

      {/* ─── FEATURES ─── */}
      <section id="features" className="py-16 px-10 max-w-5xl mx-auto">
        <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">
          Platform Features
        </p>
        <h2 className="text-3xl font-medium mb-2">
          Everything you need to hire smarter
        </h2>
        <p className="text-gray-500 mb-10 max-w-lg">
          Built with enterprise-grade tools for employers, vendors, and admins —
          all in one place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-gray-100 rounded-xl p-6"
            >
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-medium mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-100 mx-10" />

      {/* ─── ROLES ─── */}
      <section id="roles" className="py-16 px-10 max-w-5xl mx-auto">
        <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">
          Who uses PeopleBolt
        </p>
        <h2 className="text-3xl font-medium mb-2">
          Built for every stakeholder
        </h2>
        <p className="text-gray-500 mb-10">
          Different dashboards for each role — tailored to how they work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ROLES.map((r) => (
            <div
              key={r.title}
              className="bg-white border border-gray-100 rounded-xl p-6 text-center"
              style={{ borderTop: `3px solid ${r.color}` }}
            >
              <div className="flex justify-center mb-3">
                <r.icon className="w-8 h-8" style={{ color: r.color }} />
              </div>
              <h3 className="font-medium mb-2">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <div className="mx-10 mb-14">
        <div className="bg-blue-600 rounded-xl py-14 px-10 text-center text-white">
          <h2 className="text-3xl font-medium mb-3">
            Ready to transform your hiring?
          </h2>
          <p className="text-blue-100 mb-8 text-base">
            Join PeopleBolt today — free to get started, no credit card
            required.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/auth/register"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-50 transition"
            >
              Create Free Account
            </Link>
            <Link
              href="/admin/dashboard"
              className="px-6 py-3 border border-white/40 text-white rounded-lg text-sm hover:bg-white/10 transition"
            >
              See Admin Demo
            </Link>
          </div>
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <footer className="bg-white border-t border-gray-100 px-10 py-5 flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
            <Zap className="text-white w-3 h-3" />
          </div>
          <span className="text-gray-900 font-medium">PeopleBolt</span>
        </div>
        <span>© 2025 Vaytix Technologies. All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-gray-600 transition">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-600 transition">
            Terms
          </a>
          <a href="#" className="hover:text-gray-600 transition">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

// ─── DATA ───

const FEATURES = [
  {
    icon: Briefcase,
    title: "Job Posting",
    desc: "Post detailed requirements with skills, budget, and timeline. Vendors get notified instantly.",
  },
  {
    icon: UserCheck,
    title: "Candidate ATS",
    desc: "Track every candidate through screening, interview, and offer stages with a built-in ATS workflow.",
  },
  {
    icon: FileUp,
    title: "Resume Management",
    desc: "Vendors upload and manage resumes. Employers view structured profiles with status tracking.",
  },
  {
    icon: ShieldCheck,
    title: "Vendor Verification",
    desc: "Admin-verified vendor profiles ensure only trusted partners can submit candidates.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "Real-time dashboards with placement rates, vendor performance, and hiring trends.",
  },
  {
    icon: Lock,
    title: "JWT Auth & Roles",
    desc: "Secure role-based access for Employers, Vendors, Candidates, and Admins.",
  },
];

const ROLES = [
  {
    icon: Building2,
    title: "Employer",
    color: "#1a56db",
    desc: "Post jobs, review submitted candidates, track hiring pipeline.",
  },
  {
    icon: Users,
    title: "Vendor",
    color: "#059669",
    desc: "Browse requirements, submit candidates, track submission status.",
  },
  {
    icon: User,
    title: "Candidate",
    color: "#d97706",
    desc: "Upload resume, view application status, manage profile.",
  },
  {
    icon: Shield,
    title: "Admin",
    color: "#7c3aed",
    desc: "Manage users, verify vendors, view platform-wide reports.",
  },
];
