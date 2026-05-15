// src/components/layout/Sidebar.jsx
import Link from "next/link";
import { Zap } from "lucide-react";

/**
 * Reusable Sidebar
 *
 * Props:
 *   sections   — [{ title?: string, items: [{ icon, label, href, active? }] }]
 *   user       — { name, role, initials }
 *   accentBg   — tailwind bg class  e.g. "bg-blue-600"
 *   accentLight— tailwind bg class  e.g. "bg-blue-50"
 *   accentText — tailwind text class e.g. "text-blue-700"
 */
export default function Sidebar({
  sections = [],
  user,
  accentBg = "bg-blue-600",
  accentLight = "bg-blue-50",
  accentText = "text-blue-700",
}) {
  return (
    <aside className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0 h-screen sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-gray-100">
        <div
          className={`w-8 h-8 ${accentBg} rounded-lg flex items-center justify-center`}
        >
          <Zap className="text-white w-4 h-4" />
        </div>
        <span className="font-medium text-base">PeopleBolt</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 px-2 overflow-y-auto">
        {sections.map((section, i) => (
          <div key={i}>
            {section.title && (
              <p className="text-[11px] text-gray-400 uppercase tracking-wider px-3 py-2">
                {section.title}
              </p>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition
                    ${
                      item.active
                        ? `${accentLight} ${accentText}`
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                    }`}
                >
                  {item.icon && <item.icon className="w-4 h-4 shrink-0" />}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* User */}
      {user && (
        <div className="p-3 border-t border-gray-100">
          <div className="flex items-center gap-2.5 px-2 py-2">
            <div
              className={`w-8 h-8 rounded-full ${accentLight} ${accentText} flex items-center justify-center text-xs font-medium shrink-0`}
            >
              {user.initials}
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-medium truncate">{user.name}</p>
              <p className="text-[11px] text-gray-400 capitalize">
                {user.role}
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
