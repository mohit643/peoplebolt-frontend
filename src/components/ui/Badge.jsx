// src/components/ui/Badge.jsx

const STYLES = {
  // Job / general status
  Active: "bg-green-50 text-green-800",
  Open: "bg-green-50 text-green-800",
  Approved: "bg-green-50 text-green-800",
  Offered: "bg-green-50 text-green-800",
  Closed: "bg-gray-100 text-gray-500",
  Suspended: "bg-gray-100 text-gray-500",
  Applied: "bg-gray-100 text-gray-600",
  New: "bg-blue-50 text-blue-700",
  Interview: "bg-blue-50 text-blue-700",
  Screened: "bg-purple-50 text-purple-700",
  Shortlisted: "bg-amber-50 text-amber-700",
  Pending: "bg-amber-50 text-amber-700",
  Review: "bg-amber-50 text-amber-700",
  Rejected: "bg-red-50 text-red-700",
  // Job type
  "Full-time": "bg-blue-50 text-blue-700",
  Contract: "bg-purple-50 text-purple-700",
  Internship: "bg-amber-50 text-amber-700",
  "Part-time": "bg-gray-100 text-gray-600",
};

/**
 * Badge
 * Props:
 *   status    — any key from STYLES above
 *   className — extra tailwind classes
 */
export default function Badge({ status, className = "" }) {
  const style = STYLES[status] || "bg-gray-100 text-gray-600";
  return (
    <span
      className={`inline-flex items-center text-[11px] px-2.5 py-1 rounded-full font-medium ${style} ${className}`}
    >
      {status}
    </span>
  );
}
