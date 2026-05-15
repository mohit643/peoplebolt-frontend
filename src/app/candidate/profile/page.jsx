"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  User,
  FileUp,
  Briefcase,
  Bell,
  Upload,
  CheckCircle2,
  Clock,
  X,
  Plus,
  Edit3,
} from "lucide-react";

const APPLICATIONS = [
  {
    id: 1,
    role: "Senior React Developer",
    company: "Infosys BPO",
    vendor: "TechStaff Pvt",
    applied: "12 May 2025",
    status: "Shortlisted",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "HCL Tech",
    vendor: "PixelPeople",
    applied: "10 May 2025",
    status: "Applied",
  },
  {
    id: 3,
    role: "React Native Dev",
    company: "Wipro Digital",
    vendor: "TalentBridge",
    applied: "5 May 2025",
    status: "Rejected",
  },
];

const STATUS_STYLE = {
  Applied: "bg-gray-100 text-gray-600",
  Screened: "bg-purple-50 text-purple-700",
  Shortlisted: "bg-amber-50 text-amber-700",
  Interview: "bg-blue-50 text-blue-700",
  Offered: "bg-green-50 text-green-800",
  Rejected: "bg-red-50 text-red-700",
};

const SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "TailwindCSS",
  "GraphQL",
  "Git",
];

export default function CandidateProfile() {
  const [skills, setSkills] = useState(SKILLS);
  const [newSkill, setNewSkill] = useState("");
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: "Amit Kumar",
    title: "Senior React Developer",
    email: "amit.kumar@email.com",
    phone: "+91 98765 43210",
    location: "Noida, UP",
    experience: "4 years",
    notice: "30 days",
    expectedCtc: "14",
    currentCtc: "10",
    summary:
      "Passionate frontend developer with 4 years of experience building scalable React applications. Experienced in TypeScript, Next.js, and modern UI frameworks.",
  });

  const update = (f) => (e) => setForm({ ...form, [f]: e.target.value });

  return (
    <div className="flex min-h-screen bg-gray-50 text-sm">
      {/* SIDEBAR */}
      <aside className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="flex items-center gap-2.5 px-4 py-5 border-b border-gray-100">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-4 h-4" />
          </div>
          <span className="font-medium text-base">PeopleBolt</span>
        </div>
        <nav className="flex-1 py-3 px-2 space-y-0.5">
          {[
            {
              icon: User,
              label: "My Profile",
              href: "/candidate/profile",
              active: true,
            },
            { icon: Briefcase, label: "Applications", href: "#" },
            { icon: FileUp, label: "My Resume", href: "#" },
            { icon: Bell, label: "Notifications", href: "#" },
          ].map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition
                ${n.active ? "bg-amber-50 text-amber-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"}`}
            >
              <n.icon className="w-4 h-4" />
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-gray-100">
          <div className="flex items-center gap-2.5 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-medium">
              AK
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-medium truncate">Amit Kumar</p>
              <p className="text-[11px] text-gray-400">Candidate</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div>
            <h1 className="font-medium text-base">My Profile</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Keep your profile updated to get better matches
            </p>
          </div>
          <button
            onClick={() => setEditing(!editing)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] transition
              ${editing ? "bg-green-600 text-white hover:bg-green-700" : "border border-gray-200 text-gray-600 hover:bg-gray-50"}`}
          >
            {editing ? (
              <>
                <CheckCircle2 className="w-4 h-4" /> Save changes
              </>
            ) : (
              <>
                <Edit3 className="w-4 h-4" /> Edit profile
              </>
            )}
          </button>
        </div>

        <div className="p-6 space-y-5 overflow-y-auto">
          <div className="grid grid-cols-3 gap-5">
            {/* Left: Profile card */}
            <div className="col-span-1 space-y-4">
              <div className="bg-white border border-gray-100 rounded-xl p-5 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center text-xl font-medium mx-auto mb-3">
                  AK
                </div>
                {editing ? (
                  <input
                    value={form.name}
                    onChange={update("name")}
                    className="w-full text-center font-medium text-base border-b border-gray-200 focus:outline-none focus:border-blue-500 mb-1 pb-1"
                  />
                ) : (
                  <p className="font-medium text-base mb-1">{form.name}</p>
                )}
                {editing ? (
                  <input
                    value={form.title}
                    onChange={update("title")}
                    className="w-full text-center text-xs text-gray-400 border-b border-gray-200 focus:outline-none focus:border-blue-500 pb-1"
                  />
                ) : (
                  <p className="text-xs text-gray-400">{form.title}</p>
                )}

                <div className="mt-4 pt-4 border-t border-gray-50 space-y-2 text-left">
                  {[
                    { label: "Email", field: "email", type: "email" },
                    { label: "Phone", field: "phone", type: "tel" },
                    { label: "Location", field: "location", type: "text" },
                    { label: "Experience", field: "experience", type: "text" },
                    { label: "Notice period", field: "notice", type: "text" },
                  ].map((f) => (
                    <div key={f.field}>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                        {f.label}
                      </p>
                      {editing ? (
                        <input
                          type={f.type}
                          value={form[f.field]}
                          onChange={update(f.field)}
                          className="w-full text-[13px] border-b border-gray-200 focus:outline-none focus:border-blue-500 py-0.5"
                        />
                      ) : (
                        <p className="text-[13px]">{form[f.field]}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-50 grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <p className="text-[11px] text-gray-400">Current CTC</p>
                    {editing ? (
                      <input
                        value={form.currentCtc}
                        onChange={update("currentCtc")}
                        type="number"
                        className="w-full text-center text-[13px] font-medium bg-transparent focus:outline-none"
                      />
                    ) : (
                      <p className="text-[13px] font-medium">
                        ₹{form.currentCtc} LPA
                      </p>
                    )}
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <p className="text-[11px] text-gray-400">Expected CTC</p>
                    {editing ? (
                      <input
                        value={form.expectedCtc}
                        onChange={update("expectedCtc")}
                        type="number"
                        className="w-full text-center text-[13px] font-medium bg-transparent focus:outline-none"
                      />
                    ) : (
                      <p className="text-[13px] font-medium">
                        ₹{form.expectedCtc} LPA
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Resume upload */}
              <div className="bg-white border border-gray-100 rounded-xl p-5">
                <p className="font-medium mb-3">Resume</p>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-5 text-center">
                  <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-500 mb-1">
                    Upload your resume
                  </p>
                  <p className="text-[11px] text-gray-400 mb-3">
                    PDF, DOC up to 5MB
                  </p>
                  <label className="cursor-pointer px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-600 hover:bg-gray-50 transition">
                    Choose file
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={() => {
                        /* TODO: POST /api/resume/upload */
                      }}
                    />
                  </label>
                </div>
                <div className="mt-3 flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                  <span className="text-[12px] text-green-700">
                    Amit_Kumar_Resume.pdf uploaded
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="col-span-2 space-y-4">
              {/* Summary */}
              <div className="bg-white border border-gray-100 rounded-xl p-5">
                <p className="font-medium mb-3">Professional summary</p>
                {editing ? (
                  <textarea
                    rows={4}
                    value={form.summary}
                    onChange={update("summary")}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 resize-none"
                  />
                ) : (
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    {form.summary}
                  </p>
                )}
              </div>

              {/* Skills */}
              <div className="bg-white border border-gray-100 rounded-xl p-5">
                <p className="font-medium mb-3">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 text-xs rounded-full"
                    >
                      {s}
                      {editing && (
                        <button
                          onClick={() =>
                            setSkills(skills.filter((k) => k !== s))
                          }
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </span>
                  ))}
                  {editing && (
                    <div className="flex items-center gap-1">
                      <input
                        type="text"
                        placeholder="Add skill"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && newSkill.trim()) {
                            setSkills([...skills, newSkill.trim()]);
                            setNewSkill("");
                          }
                        }}
                        className="px-2.5 py-1.5 border border-gray-200 rounded-full text-xs focus:outline-none focus:border-blue-500 w-24"
                      />
                      <button
                        onClick={() => {
                          if (newSkill.trim()) {
                            setSkills([...skills, newSkill.trim()]);
                            setNewSkill("");
                          }
                        }}
                        className="w-6 h-6 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-white border border-gray-100 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-medium">My applications</p>
                  <span className="text-xs text-gray-400">
                    {APPLICATIONS.length} total
                  </span>
                </div>
                <div className="space-y-3">
                  {APPLICATIONS.map((a) => (
                    <div
                      key={a.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-[13px]">{a.role}</p>
                        <p className="text-[11px] text-gray-400 mt-0.5">
                          {a.company} · via {a.vendor} · {a.applied}
                        </p>
                      </div>
                      <span
                        className={`text-[11px] px-2.5 py-1 rounded-full font-medium shrink-0 ml-3 ${STATUS_STYLE[a.status]}`}
                      >
                        {a.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
