"use client";
import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Zap,
  Building2,
  Users,
  User,
  Shield,
  Eye,
  EyeOff,
  Globe,
} from "lucide-react";

const ROLES = [
  {
    key: "employer",
    label: "Employer",
    icon: Building2,
    redirect: "/employer/dashboard",
  },
  {
    key: "vendor",
    label: "Vendor",
    icon: Users,
    redirect: "/vendor/dashboard",
  },
  {
    key: "candidate",
    label: "Candidate",
    icon: User,
    redirect: "/candidate/profile",
  },
  { key: "admin", label: "Admin", icon: Shield, redirect: "/admin/dashboard" },
];

export default function LoginPage() {
  const router = useRouter();
  // const searchParams = useSearchParams();
  const defaultRole = "employer";

  const [selectedRole, setSelectedRole] = useState(defaultRole);
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  function handleLogin(e) {
    e.preventDefault();
    // TODO: JWT API call — POST /api/auth/login
    // dummy redirect based on role
    const found = ROLES.find((r) => r.key === selectedRole);
    router.push(found?.redirect || "/employer/dashboard");
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen flex">
        {/* ─── LEFT PANEL ─── */}
        <div className="hidden lg:flex w-[420px] bg-blue-600 flex-col justify-between p-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-4 h-4" />
            </div>
            <span className="text-white text-lg font-medium">PeopleBolt</span>
          </div>

          <div>
            <h2 className="text-white text-2xl font-medium leading-snug mb-3">
              India's smartest
              <br />
              HR Marketplace
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-8">
              Connecting employers, staffing vendors, and top candidates in one
              powerful platform.
            </p>
            <ul className="space-y-3">
              {[
                "Post jobs & get vendor submissions instantly",
                "Built-in ATS to track every candidate",
                "Verified vendor network you can trust",
                "Role-based dashboards for all stakeholders",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-1.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-blue-200/60 text-xs">© 2025 Vaytix Technologies</p>
        </div>

        {/* ─── RIGHT PANEL ─── */}
        <div className="flex-1 bg-white flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <div className="flex lg:hidden items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white w-4 h-4" />
              </div>
              <span className="text-lg font-medium">PeopleBolt</span>
            </div>

            {/* Login / Register tabs */}
            <div className="flex gap-1 p-1 bg-gray-100 rounded-lg w-fit mb-8">
              <span className="px-5 py-2 bg-white rounded-md text-sm font-medium shadow-sm">
                Login
              </span>
              <Link
                href="/auth/register"
                className="px-5 py-2 text-sm text-gray-500 hover:text-gray-700 transition"
              >
                Register
              </Link>
            </div>

            <h1 className="text-xl font-medium mb-1">Welcome back</h1>
            <p className="text-sm text-gray-500 mb-6">
              Login to your PeopleBolt account
            </p>

            {/* Role selector */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {ROLES.map((r) => (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => setSelectedRole(r.key)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm transition
                  ${
                    selectedRole === r.key
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <r.icon className="w-4 h-4" />
                  {r.label}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPwd ? "text" : "password"}
                    required
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    className="w-full px-3 py-2.5 pr-10 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPwd ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <div className="text-right mt-1.5">
                  <Link
                    href="/auth/forgot-password"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
              >
                Login to account
              </button>
            </form>

            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-400">or continue with</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition">
              <Globe className="w-4 h-4" /> Continue with Google
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don't have an account?{" "}
              <Link
                href="/auth/register"
                className="text-blue-600 hover:underline"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
