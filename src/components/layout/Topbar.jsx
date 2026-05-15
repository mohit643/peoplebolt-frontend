// src/components/layout/Topbar.jsx
import { Bell } from "lucide-react";

/**
 * Reusable Topbar
 * Props:
 *   title      — main heading string
 *   subtitle   — small muted text below
 *   actions    — React node (buttons on right side)
 *   notifCount — number of unread notifications (0 = no dot)
 */
export default function Topbar({ title, subtitle, actions, notifCount = 0 }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 sticky top-0 z-10">
      <div>
        <h1 className="font-medium text-base">{title}</h1>
        {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-2.5">
        {/* Notification Bell */}
        <button className="relative w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-50 transition">
          <Bell className="w-4 h-4" />
          {notifCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
          )}
        </button>
        {/* Custom action buttons */}
        {actions}
      </div>
    </div>
  );
}
