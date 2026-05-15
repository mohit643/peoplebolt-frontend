"use client";
import { useState } from "react";
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
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  FileText,
  Phone,
  Mail,
} from "lucide-react";

const VENDORS = [
  {
    id: 1,
    name: "TechStaff Pvt",
    initials: "TS",
    city: "Noida",
    contact: "Amit Verma",
    email: "hr@techstaff.com",
    phone: "+91 98100 00001",
    submitted: "13 May 2025",
    docs: ["GST Certificate", "Company PAN", "Director ID"],
    status: "Pending",
    established: "2018",
    employees: "50-100",
  },
  {
    id: 2,
    name: "PixelPeople",
    initials: "PP",
    city: "Mumbai",
    contact: "Neha Shah",
    email: "info@pixelpeople.co",
    phone: "+91 98100 00002",
    submitted: "10 May 2025",
    docs: ["GST Certificate", "Company PAN"],
    status: "Pending",
    established: "2020",
    employees: "10-50",
  },
  {
    id: 3,
    name: "DataForce India",
    initials: "DF",
    city: "Hyderabad",
    contact: "Suresh R.",
    email: "admin@dataforce.in",
    phone: "+91 98100 00003",
    submitted: "8 May 2025",
    docs: ["GST Certificate", "Company PAN", "Director ID", "MSME Certificate"],
    status: "Pending",
    established: "2015",
    employees: "100-500",
  },
  {
    id: 4,
    name: "CloudHire",
    initials: "CH",
    city: "Bangalore",
    contact: "Priya Nair",
    email: "ops@cloudhire.in",
    phone: "+91 98100 00004",
    submitted: "5 May 2025",
    docs: ["GST Certificate", "Company PAN", "Director ID"],
    status: "Approved",
    established: "2019",
    employees: "50-100",
  },
  {
    id: 5,
    name: "TalentBridge",
    initials: "TB",
    city: "Delhi",
    contact: "Rohit Saxena",
    email: "ro@talentbridge.in",
    phone: "+91 98100 00005",
    submitted: "2 May 2025",
    docs: ["GST Certificate", "Company PAN"],
    status: "Rejected",
    established: "2021",
    employees: "10-50",
  },
];

const STATUS_STYLE = {
  Pending: "bg-amber-50 text-amber-700",
  Approved: "bg-green-50 text-green-800",
  Rejected: "bg-red-50 text-red-700",
};

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: Building2, label: "Vendors", href: "#" },
  { icon: Briefcase, label: "Jobs", href: "/admin/jobs" },
  {
    icon: Shield,
    label: "Verification",
    href: "/admin/verification",
    active: true,
  },
  { icon: BarChart3, label: "Reports", href: "/admin/reports" },
  { icon: Settings, label: "Settings", href: "#" },
];

export default function VendorVerificationPage() {
  const [vendors, setVendors] = useState(VENDORS);
  const [selected, setSelected] = useState(VENDORS[0]);
  const [filter, setFilter] = useState("All");
  const [rejectReason, setRejectReason] = useState("");
  const [showRejectModal, setShowRejectModal] = useState(false);

  function approve(id) {
    const updated = vendors.map((v) =>
      v.id === id ? { ...v, status: "Approved" } : v,
    );
    setVendors(updated);
    setSelected(updated.find((v) => v.id === id));
  }

  function reject(id) {
    const updated = vendors.map((v) =>
      v.id === id ? { ...v, status: "Rejected" } : v,
    );
    setVendors(updated);
    setSelected(updated.find((v) => v.id === id));
    setShowRejectModal(false);
    setRejectReason("");
  }

  const filtered = vendors.filter(
    (v) => filter === "All" || v.status === filter,
  );

  return (
    <div className="flex min-h-screen bg-gray-50 text-sm">
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

      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div>
            <h1 className="font-medium text-base">Vendor verification</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              {vendors.filter((v) => v.status === "Pending").length} vendors
              pending review
            </p>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Left: Vendor list */}
          <div className="w-80 border-r border-gray-100 flex flex-col bg-white">
            <div className="p-3 border-b border-gray-100">
              <div className="flex gap-1">
                {["All", "Pending", "Approved", "Rejected"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`flex-1 py-1.5 rounded-lg text-xs transition
                      ${filter === f ? "bg-purple-600 text-white" : "text-gray-500 hover:bg-gray-50"}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-y-auto flex-1">
              {filtered.map((v) => (
                <div
                  key={v.id}
                  onClick={() => setSelected(v)}
                  className={`p-4 border-b border-gray-50 cursor-pointer transition
                    ${selected?.id === v.id ? "bg-purple-50 border-l-2 border-l-purple-600" : "hover:bg-gray-50"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-medium shrink-0">
                      {v.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-[13px] truncate">
                        {v.name}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {v.city} · {v.docs.length} docs
                      </p>
                    </div>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full font-medium shrink-0 ${STATUS_STYLE[v.status]}`}
                    >
                      {v.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1.5 ml-12">
                    Submitted: {v.submitted}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Detail panel */}
          {selected && (
            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-xl space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center font-medium">
                      {selected.initials}
                    </div>
                    <div>
                      <h2 className="text-lg font-medium">{selected.name}</h2>
                      <p className="text-[12px] text-gray-400">
                        {selected.city} · Est. {selected.established} ·{" "}
                        {selected.employees} employees
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[12px] px-3 py-1 rounded-full font-medium ${STATUS_STYLE[selected.status]}`}
                  >
                    {selected.status}
                  </span>
                </div>

                {/* Contact info */}
                <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-3">
                  <p className="font-medium text-[13px]">Contact information</p>
                  <div className="grid grid-cols-2 gap-3 text-[13px]">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-3.5 h-3.5 text-gray-400" />
                      {selected.contact}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-3.5 h-3.5 text-gray-400" />
                      {selected.email}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-3.5 h-3.5 text-gray-400" />
                      {selected.phone}
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-3">
                  <p className="font-medium text-[13px]">
                    Submitted documents ({selected.docs.length})
                  </p>
                  <div className="space-y-2">
                    {selected.docs.map((doc) => (
                      <div
                        key={doc}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-2 text-[13px]">
                          <FileText className="w-4 h-4 text-gray-400" />
                          {doc}
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                          <button className="text-[12px] text-purple-600 hover:underline flex items-center gap-1">
                            <Eye className="w-3 h-3" /> View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-3">
                  <p className="font-medium text-[13px]">
                    Verification timeline
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-[13px] font-medium">
                          Registration submitted
                        </p>
                        <p className="text-[11px] text-gray-400">
                          {selected.submitted}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${selected.status !== "Pending" ? "bg-green-50" : "bg-amber-50"}`}
                      >
                        {selected.status !== "Pending" ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                        ) : (
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                        )}
                      </div>
                      <div>
                        <p className="text-[13px] font-medium">
                          Documents reviewed
                        </p>
                        <p className="text-[11px] text-gray-400">
                          {selected.status === "Pending"
                            ? "Awaiting admin review"
                            : "Completed"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5
                        ${selected.status === "Approved" ? "bg-green-50" : selected.status === "Rejected" ? "bg-red-50" : "bg-gray-100"}`}
                      >
                        {selected.status === "Approved" ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                        ) : selected.status === "Rejected" ? (
                          <XCircle className="w-3.5 h-3.5 text-red-600" />
                        ) : (
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <p className="text-[13px] font-medium">
                          Final decision
                        </p>
                        <p className="text-[11px] text-gray-400">
                          {selected.status === "Approved"
                            ? "Vendor approved"
                            : selected.status === "Rejected"
                              ? "Vendor rejected"
                              : "Pending decision"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                {selected.status === "Pending" && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => approve(selected.id)}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-green-600 text-white rounded-lg text-[13px] hover:bg-green-700 transition"
                    >
                      <CheckCircle2 className="w-4 h-4" /> Approve vendor
                    </button>
                    <button
                      onClick={() => setShowRejectModal(true)}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-red-50 text-red-700 border border-red-200 rounded-lg text-[13px] hover:bg-red-100 transition"
                    >
                      <XCircle className="w-4 h-4" /> Reject vendor
                    </button>
                  </div>
                )}

                {/* Reject modal — simple inline */}
                {showRejectModal && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-3">
                    <p className="font-medium text-red-800 text-[13px]">
                      Rejection reason
                    </p>
                    <textarea
                      rows={3}
                      placeholder="Provide a reason for rejection..."
                      value={rejectReason}
                      onChange={(e) => setRejectReason(e.target.value)}
                      className="w-full px-3 py-2 border border-red-200 rounded-lg text-sm focus:outline-none focus:border-red-400 bg-white resize-none"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => reject(selected.id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg text-[13px] hover:bg-red-700"
                      >
                        Confirm rejection
                      </button>
                      <button
                        onClick={() => setShowRejectModal(false)}
                        className="px-4 py-2 border border-gray-200 rounded-lg text-[13px] text-gray-600 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
