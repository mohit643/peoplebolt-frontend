"use client";
// src/components/admin/UserTable.jsx
import Badge from "@/components/ui/Badge";
import { Edit3, Ban, CheckCircle2 } from "lucide-react";

const ROLE_STYLE = {
  Employer: "bg-blue-50 text-blue-700",
  Vendor: "bg-green-50 text-green-700",
  Candidate: "bg-purple-50 text-purple-700",
  Admin: "bg-red-50 text-red-700",
};

/**
 * UserTable — full user management table for admin
 * Props:
 *   users          — user[] from state
 *   onToggleStatus — (id, newStatus) => void
 */
export default function UserTable({ users = [], onToggleStatus }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
      <table className="w-full table-fixed">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50">
            {[
              "User",
              "Email",
              "Company",
              "Role",
              "Status",
              "Joined",
              "Actions",
            ].map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-50">
          {users.map((u) => (
            <tr key={u.id} className="hover:bg-gray-50 transition">
              {/* User */}
              <td className="px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-medium shrink-0">
                    {u.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-[13px] truncate">{u.name}</p>
                    <p className="text-[11px] text-gray-400">
                      Last: {u.lastLogin}
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-4 py-3 text-[13px] text-gray-500 truncate">
                {u.email}
              </td>
              <td className="px-4 py-3 text-[13px] text-gray-500 truncate">
                {u.company}
              </td>

              {/* Role */}
              <td className="px-4 py-3">
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${ROLE_STYLE[u.role] || "bg-gray-100 text-gray-600"}`}
                >
                  {u.role}
                </span>
              </td>

              {/* Status */}
              <td className="px-4 py-3">
                <Badge status={u.status} />
              </td>

              <td className="px-4 py-3 text-[12px] text-gray-400">
                {u.joined}
              </td>

              {/* Actions */}
              <td className="px-4 py-3">
                <div className="flex items-center gap-1">
                  <button
                    title="Edit"
                    className="p-1.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-md transition"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  {u.status === "Active" ? (
                    <button
                      title="Suspend"
                      onClick={() => onToggleStatus?.(u.id, "Suspended")}
                      className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition"
                    >
                      <Ban className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      title="Activate"
                      onClick={() => onToggleStatus?.(u.id, "Active")}
                      className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-md transition"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}

          {users.length === 0 && (
            <tr>
              <td colSpan={7} className="px-4 py-10 text-center text-gray-400">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
