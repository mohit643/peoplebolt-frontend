"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Zap, Building2, Users, User, Shield, Eye, EyeOff } from "lucide-react";

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

export default function RegisterPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState("employer");
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
  });

  function handleRegister(e) {
    e.preventDefault();
    // TODO: POST /api/auth/register  with { ...form, role: selectedRole }
    const found = ROLES.find((r) => r.key === selectedRole);
    router.push(found?.redirect || "/employer/dashboard");
  }

  const update = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  return (
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
            Start hiring smarter
            <br />
            today — it's free
          </h2>
          <p className="text-blue-100 text-sm leading-relaxed mb-8">
            Create your account in under 2 minutes and get access to India's
            most trusted HR marketplace.
          </p>
          <ul className="space-y-3">
            {[
              "Free to register — no credit card needed",
              "Access verified vendors & candidates",
              "Manage your entire hiring pipeline",
              "Dedicated dashboard for your role",
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
            <Link
              href="/auth/login"
              className="px-5 py-2 text-sm text-gray-500 hover:text-gray-700 transition"
            >
              Login
            </Link>
            <span className="px-5 py-2 bg-white rounded-md text-sm font-medium shadow-sm">
              Register
            </span>
          </div>

          <h1 className="text-xl font-medium mb-1">Create account</h1>
          <p className="text-sm text-gray-500 mb-6">
            Select your role to get started
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
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  First name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Rahul"
                  value={form.firstName}
                  onChange={update("firstName")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Last name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Sharma"
                  value={form.lastName}
                  onChange={update("lastName")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={form.email}
                onChange={update("email")}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                {selectedRole === "candidate"
                  ? "Current designation"
                  : "Company / Organisation"}
              </label>
              <input
                type="text"
                placeholder={
                  selectedRole === "candidate"
                    ? "Software Engineer"
                    : "Acme Corp"
                }
                value={form.company}
                onChange={update("company")}
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
                  placeholder="Min. 8 characters"
                  value={form.password}
                  onChange={update("password")}
                  minLength={8}
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
            </div>

            <p className="text-xs text-gray-400">
              By registering, you agree to our{" "}
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>

            <button
              type="submit"
              className="w-full py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            >
              Create account
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
