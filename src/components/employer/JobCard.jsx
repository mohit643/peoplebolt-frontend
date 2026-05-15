// src/components/employer/JobCard.jsx
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { MapPin, Users, Calendar, Briefcase } from "lucide-react";

/**
 * JobCard
 * Props:
 *   job — { id, title, company, location, type, skills, deadline,
 *            vendorsApplied, candidatesReceived, status }
 */
export default function JobCard({ job }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 hover:border-gray-200 transition">
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <p className="font-medium text-[14px]">{job.title}</p>
          <p className="text-[12px] text-gray-400 mt-0.5">{job.company}</p>
        </div>
        <Badge status={job.status} />
      </div>

      {/* Meta */}
      <div className="flex items-center gap-4 text-[12px] text-gray-500 mb-3 flex-wrap">
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {job.location}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase className="w-3 h-3" />
          {job.type}
        </span>
        <span className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          {job.candidatesReceived} candidates
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          Deadline: {job.deadline}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.skills?.slice(0, 4).map((s) => (
          <span
            key={s}
            className="text-[11px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-50">
        <span className="text-[12px] text-gray-400">
          {job.vendorsApplied} vendor{job.vendorsApplied !== 1 ? "s" : ""}{" "}
          submitted
        </span>
        <Link
          href={`/employer/candidates?job=${job.id}`}
          className="text-[12px] text-blue-600 hover:underline"
        >
          View candidates →
        </Link>
      </div>
    </div>
  );
}
