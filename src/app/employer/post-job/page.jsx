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
  ArrowLeft,
  Plus,
  X,
} from "lucide-react";

const SKILL_SUGGESTIONS = [
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "Java",
  "AWS",
  "Docker",
  "Kubernetes",
  "SQL",
  "MongoDB",
  "GraphQL",
  "Next.js",
  "Vue.js",
  "Angular",
  "Flutter",
];

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/employer/dashboard" },
  {
    icon: Briefcase,
    label: "Job postings",
    href: "/employer/post-job",
    active: true,
  },
  { icon: Users, label: "Candidates", href: "/employer/candidates" },
  { icon: Building2, label: "Vendors", href: "#" },
  { icon: BarChart3, label: "Reports", href: "#" },
  { icon: Mail, label: "Messages", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

function Sidebar() {
  return (
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
  );
}

export default function PostJobPage() {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [form, setForm] = useState({
    title: "",
    department: "",
    location: "",
    jobType: "Full-time",
    experience: "",
    salaryMin: "",
    salaryMax: "",
    openings: "1",
    description: "",
    requirements: "",
    deadline: "",
  });

  const update = (f) => (e) => setForm({ ...form, [f]: e.target.value });

  function addSkill(s) {
    const val = s || skillInput.trim();
    if (val && !skills.includes(val)) setSkills([...skills, val]);
    setSkillInput("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: POST /api/jobs  { ...form, skills }
    alert("Job posted successfully!");
  }

  return (
    <div className="flex min-h-screen bg-gray-50 text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Link
              href="/employer/dashboard"
              className="text-gray-400 hover:text-gray-700"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="font-medium text-base">Post a new job</h1>
              <p className="text-xs text-gray-400 mt-0.5">
                Fill in the details — vendors will be notified instantly
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="px-4 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-600 hover:bg-gray-50"
            >
              Save draft
            </button>
            <button
              form="post-job-form"
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-[13px] hover:bg-blue-700 transition"
            >
              Post job
            </button>
          </div>
        </div>

        <form
          id="post-job-form"
          onSubmit={handleSubmit}
          className="p-6 space-y-5 overflow-y-auto max-w-3xl"
        >
          {/* Basic Info */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-4">
            <p className="font-medium">Basic information</p>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Job title <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Senior React Developer"
                value={form.title}
                onChange={update("title")}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Department
                </label>
                <select
                  value={form.department}
                  onChange={update("department")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select department</option>
                  {[
                    "Engineering",
                    "Design",
                    "Product",
                    "Marketing",
                    "Sales",
                    "HR",
                    "Finance",
                    "Operations",
                  ].map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Job type <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={form.jobType}
                  onChange={update("jobType")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                >
                  {[
                    "Full-time",
                    "Part-time",
                    "Contract",
                    "Internship",
                    "Freelance",
                  ].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Noida / Remote"
                  value={form.location}
                  onChange={update("location")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Experience required
                </label>
                <select
                  value={form.experience}
                  onChange={update("experience")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  {[
                    "0-1 years",
                    "1-3 years",
                    "3-5 years",
                    "5-8 years",
                    "8+ years",
                  ].map((e) => (
                    <option key={e}>{e}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Min salary (₹ LPA)
                </label>
                <input
                  type="number"
                  placeholder="8"
                  value={form.salaryMin}
                  onChange={update("salaryMin")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Max salary (₹ LPA)
                </label>
                <input
                  type="number"
                  placeholder="18"
                  value={form.salaryMax}
                  onChange={update("salaryMax")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  No. of openings
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="1"
                  value={form.openings}
                  onChange={update("openings")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Application deadline
              </label>
              <input
                type="date"
                value={form.deadline}
                onChange={update("deadline")}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-3">
            <p className="font-medium">Required skills</p>
            {skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                  >
                    {s}
                    <button
                      type="button"
                      onClick={() => setSkills(skills.filter((k) => k !== s))}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a skill and press Enter"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSkill();
                  }
                }}
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => addSkill()}
                className="px-3 py-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {SKILL_SUGGESTIONS.filter((s) => !skills.includes(s)).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => addSkill(s)}
                  className="px-2.5 py-1 border border-gray-200 text-gray-500 text-xs rounded-full hover:bg-gray-50 transition"
                >
                  + {s}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-4">
            <p className="font-medium">Job details</p>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Job description <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                placeholder="Describe the role, responsibilities, team culture..."
                value={form.description}
                onChange={update("description")}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Education, certifications, specific tools required..."
                value={form.requirements}
                onChange={update("requirements")}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pb-8">
            <Link
              href="/employer/dashboard"
              className="px-5 py-2.5 border border-gray-200 rounded-lg text-[13px] text-gray-600 hover:bg-gray-50 transition"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-[13px] hover:bg-blue-700 transition"
            >
              Post job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
