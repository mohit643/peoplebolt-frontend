"use client";
// src/components/vendor/SubmissionForm.jsx
import { useState } from "react";
import { Upload, X, CheckCircle2 } from "lucide-react";
import { JOBS } from "@/data/jobs";

/**
 * SubmissionForm — vendor submits a candidate for a job
 * Props:
 *   onSuccess — (formData) => void  called after submit
 */
export default function SubmissionForm({ onSuccess }) {
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

  const update = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: POST /api/submissions { ...form, resume: resumeFile }
    onSuccess?.({ ...form, resumeFile });
  }

  const inputCls =
    "w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-green-500";
  const labelCls = "block text-xs font-medium text-gray-600 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Job selection */}
      <div className="bg-white border border-gray-100 rounded-xl p-5">
        <p className="font-medium mb-4">Select job requirement</p>
        <label className={labelCls}>
          Job opening <span className="text-red-500">*</span>
        </label>
        <select
          required
          value={form.jobId}
          onChange={update("jobId")}
          className={inputCls}
        >
          <option value="">Select a job opening</option>
          {JOBS.filter((j) => j.status === "Active").map((j) => (
            <option key={j.id} value={j.id}>
              {j.title} — {j.company}, {j.location}
            </option>
          ))}
        </select>
      </div>

      {/* Candidate info */}
      <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-4">
        <p className="font-medium">Candidate information</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>
              First name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="Amit"
              value={form.firstName}
              onChange={update("firstName")}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="Kumar"
              value={form.lastName}
              onChange={update("lastName")}
              className={inputCls}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              placeholder="amit@email.com"
              value={form.email}
              onChange={update("email")}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="tel"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={update("phone")}
              className={inputCls}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Current designation</label>
            <input
              type="text"
              placeholder="React Developer"
              value={form.currentTitle}
              onChange={update("currentTitle")}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Current company</label>
            <input
              type="text"
              placeholder="Acme Corp"
              value={form.currentCompany}
              onChange={update("currentCompany")}
              className={inputCls}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>
              Total experience <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={form.experience}
              onChange={update("experience")}
              className={inputCls}
            >
              <option value="">Select</option>
              {[
                "0-1 years",
                "1-2 years",
                "2-3 years",
                "3-5 years",
                "5-8 years",
                "8+ years",
              ].map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Current location</label>
            <input
              type="text"
              placeholder="Noida, UP"
              value={form.location}
              onChange={update("location")}
              className={inputCls}
            />
          </div>
        </div>
      </div>

      {/* Compensation */}
      <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-4">
        <p className="font-medium">Compensation & availability</p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>Current CTC (₹ LPA)</label>
            <input
              type="number"
              placeholder="10"
              value={form.currentCtc}
              onChange={update("currentCtc")}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Expected CTC (₹ LPA)</label>
            <input
              type="number"
              placeholder="14"
              value={form.expectedCtc}
              onChange={update("expectedCtc")}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Notice period</label>
            <select
              value={form.noticePeriod}
              onChange={update("noticePeriod")}
              className={inputCls}
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
          <label className={labelCls}>Key skills</label>
          <input
            type="text"
            placeholder="React, TypeScript, Node.js (comma-separated)"
            value={form.skills}
            onChange={update("skills")}
            className={inputCls}
          />
        </div>
      </div>

      {/* Resume upload */}
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

      {/* Cover note */}
      <div className="bg-white border border-gray-100 rounded-xl p-5">
        <label className={labelCls}>Cover note to employer</label>
        <textarea
          rows={4}
          placeholder="Why is this candidate a good fit? Highlight key strengths..."
          value={form.coverNote}
          onChange={update("coverNote")}
          className={`${inputCls} resize-none`}
        />
      </div>

      <div className="flex justify-end gap-2 pb-8">
        <button
          type="button"
          className="px-5 py-2.5 border border-gray-200 rounded-lg text-[13px] text-gray-600 hover:bg-gray-50"
        >
          Save draft
        </button>
        <button
          type="submit"
          className="px-5 py-2.5 bg-green-600 text-white rounded-lg text-[13px] hover:bg-green-700 transition"
        >
          Submit candidate
        </button>
      </div>
    </form>
  );
}
