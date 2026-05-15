"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  LayoutDashboard,
  Briefcase,
  Users,
  FileUp,
  BarChart3,
  Settings,
  ArrowLeft,
  Upload,
  X,
  CheckCircle2,
} from "lucide-react";

const JOBS = [
  {
    id: "1",
    title: "Senior React Developer",
    company: "Infosys BPO",
    location: "Noida",
  },
  {
    id: "2",
    title: "DevOps Engineer",
    company: "TCS Digital",
    location: "Remote",
  },
  {
    id: "3",
    title: "Product Manager",
    company: "Wipro Ltd",
    location: "Bangalore",
  },
  { id: "4", title: "UI/UX Designer", company: "HCL Tech", location: "Mumbai" },
  {
    id: "6",
    title: "Java Backend Developer",
    company: "Accenture",
    location: "Pune",
  },
  {
    id: "7",
    title: "Mobile App Developer",
    company: "Tech Mahindra",
    location: "Chennai",
  },
];

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/vendor/dashboard" },
  { icon: Briefcase, label: "Browse jobs", href: "/vendor/jobs" },
  {
    icon: FileUp,
    label: "Submit candidate",
    href: "/vendor/submit-candidate",
    active: true,
  },
  { icon: Users, label: "My submissions", href: "/vendor/my-submissions" },
  { icon: BarChart3, label: "Reports", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

export default function SubmitCandidatePage() {
  const [submitted, setSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [form, setForm] = useState({
    jobId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentTitle: "",
    currentCompany: "",
    experience: "",
    currentCtc: "",
    expectedCtc: "",
    noticePeriod: "",
    location: "",
    skills: "",
    coverNote: "",
  });

  const update = (f) => (e) => setForm({ ...form, [f]: e.target.value });

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: POST /api/submissions  { ...form, resume: resumeFile }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen bg-gray-50 text-sm">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl font-medium mb-2">Candidate submitted!</h2>
            <p className="text-gray-500 text-[13px] mb-6">
              The employer will review the profile and update the status
              shortly. You can track this in My Submissions.
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                href="/vendor/my-submissions"
                className="px-5 py-2.5 border border-gray-200 rounded-lg text-[13px] hover:bg-gray-50"
              >
                View submissions
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    jobId: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    currentTitle: "",
                    currentCompany: "",
                    experience: "",
                    currentCtc: "",
                    expectedCtc: "",
                    noticePeriod: "",
                    location: "",
                    skills: "",
                    coverNote: "",
                  });
                  setResumeFile(null);
                }}
                className="px-5 py-2.5 bg-green-600 text-white rounded-lg text-[13px] hover:bg-green-700"
              >
                Submit another
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50 text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Link
              href="/vendor/jobs"
              className="text-gray-400 hover:text-gray-700"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="font-medium text-base">Submit a candidate</h1>
              <p className="text-xs text-gray-400 mt-0.5">
                Fill in candidate details and upload resume
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
              form="submit-form"
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-[13px] hover:bg-green-700 transition"
            >
              Submit candidate
            </button>
          </div>
        </div>

        <form
          id="submit-form"
          onSubmit={handleSubmit}
          className="p-6 space-y-5 overflow-y-auto max-w-3xl"
        >
          {/* Job Selection */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-3">
            <p className="font-medium">Select job requirement</p>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Job opening <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={form.jobId}
                onChange={update("jobId")}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
              >
                <option value="">Select a job opening</option>
                {JOBS.map((j) => (
                  <option key={j.id} value={j.id}>
                    {j.title} — {j.company}, {j.location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Candidate Info */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-4">
            <p className="font-medium">Candidate information</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Amit"
                  value={form.firstName}
                  onChange={update("firstName")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Kumar"
                  value={form.lastName}
                  onChange={update("lastName")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder="amit@email.com"
                  value={form.email}
                  onChange={update("email")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={update("phone")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Current designation
                </label>
                <input
                  type="text"
                  placeholder="e.g. React Developer"
                  value={form.currentTitle}
                  onChange={update("currentTitle")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Current company
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Corp"
                  value={form.currentCompany}
                  onChange={update("currentCompany")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Total experience <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={form.experience}
                  onChange={update("experience")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
                >
                  <option value="">Select</option>
                  {[
                    "0-1 years",
                    "1-2 years",
                    "2-3 years",
                    "3-5 years",
                    "5-8 years",
                    "8-10 years",
                    "10+ years",
                  ].map((e) => (
                    <option key={e}>{e}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Current location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Noida, UP"
                  value={form.location}
                  onChange={update("location")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
              </div>
            </div>
          </div>

          {/* CTC & Notice */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-4">
            <p className="font-medium">Compensation & availability</p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Current CTC (₹ LPA)
                </label>
                <input
                  type="number"
                  placeholder="10"
                  value={form.currentCtc}
                  onChange={update("currentCtc")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Expected CTC (₹ LPA)
                </label>
                <input
                  type="number"
                  placeholder="14"
                  value={form.expectedCtc}
                  onChange={update("expectedCtc")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Notice period
                </label>
                <select
                  value={form.noticePeriod}
                  onChange={update("noticePeriod")}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
                >
                  <option value="">Select</option>
                  {[
                    "Immediate",
                    "15 days",
                    "30 days",
                    "45 days",
                    "60 days",
                    "90 days",
                  ].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Key skills
              </label>
              <input
                type="text"
                placeholder="React, TypeScript, Node.js (comma-separated)"
                value={form.skills}
                onChange={update("skills")}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-3">
            <p className="font-medium">
              Resume <span className="text-red-500">*</span>
            </p>
            {resumeFile ? (
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span className="text-[13px] text-green-700 flex-1 truncate">
                  {resumeFile.name}
                </span>
                <button
                  type="button"
                  onClick={() => setResumeFile(null)}
                  className="text-green-600 hover:text-green-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center cursor-pointer hover:border-green-400 transition">
                <Upload className="w-7 h-7 text-gray-400 mb-2" />
                <p className="text-[13px] font-medium text-gray-600 mb-1">
                  Click to upload resume
                </p>
                <p className="text-[11px] text-gray-400">
                  PDF, DOC, DOCX up to 5MB
                </p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                />
              </label>
            )}
          </div>

          {/* Cover Note */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-3">
            <p className="font-medium">Cover note to employer</p>
            <textarea
              rows={4}
              placeholder="Why is this candidate a good fit for the role? Highlight key strengths..."
              value={form.coverNote}
              onChange={update("coverNote")}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500 resize-none"
            />
          </div>

          <div className="flex justify-end gap-2 pb-8">
            <Link
              href="/vendor/jobs"
              className="px-5 py-2.5 border border-gray-200 rounded-lg text-[13px] text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-5 py-2.5 bg-green-600 text-white rounded-lg text-[13px] hover:bg-green-700 transition"
            >
              Submit candidate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-gray-100">
        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
          <Zap className="text-white w-4 h-4" />
        </div>
        <span className="font-medium text-base">PeopleBolt</span>
      </div>
      <nav className="flex-1 py-3 px-2 space-y-0.5">
        {NAV.map((n) => (
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
  );
}
