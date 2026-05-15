// src/components/employer/CandidateRow.jsx
import Badge from "@/components/ui/Badge";
import { Eye } from "lucide-react";

const ATS_STAGES = [
  "Applied",
  "Screened",
  "Shortlisted",
  "Interview",
  "Offered",
  "Rejected",
];

/**
 * CandidateRow — one <tr> inside the candidates table
 * Props:
 *   candidate      — candidate object from data/candidates.js
 *   onStatusChange — (id, newStatus) => void
 */
export default function CandidateRow({ candidate, onStatusChange }) {
  return (
    <tr className="hover:bg-gray-50 transition">
      {/* Name + location */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-medium shrink-0">
            {candidate.initials}
          </div>
          <div className="min-w-0">
            <p className="font-medium text-[13px] truncate">
              {candidate.firstName} {candidate.lastName}
            </p>
            <p className="text-[11px] text-gray-400">
              {candidate.location} · {candidate.appliedDate}
            </p>
          </div>
        </div>
      </td>

      {/* Experience */}
      <td className="px-4 py-3 text-[13px] text-gray-600">
        {candidate.experience}
      </td>

      {/* CTC */}
      <td className="px-4 py-3">
        <p className="text-[12px] text-gray-500">₹{candidate.currentCtc} LPA</p>
        <p className="text-[12px] text-green-700">
          ₹{candidate.expectedCtc} LPA
        </p>
      </td>

      {/* Notice */}
      <td className="px-4 py-3 text-[13px] text-gray-600">
        {candidate.noticePeriod}
      </td>

      {/* Status badge */}
      <td className="px-4 py-3">
        <Badge status={candidate.status} />
      </td>

      {/* Actions */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
            title="View profile"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
          <select
            defaultValue={candidate.status}
            onChange={(e) => onStatusChange?.(candidate.id, e.target.value)}
            className="text-[11px] border border-gray-200 rounded-md px-1.5 py-1 text-gray-600 focus:outline-none focus:border-blue-500 bg-white"
          >
            {ATS_STAGES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </td>
    </tr>
  );
}
