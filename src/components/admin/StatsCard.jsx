// src/components/admin/StatsCard.jsx
import { ArrowUp, ArrowDown } from "lucide-react";

/**
 * StatsCard — platform-wide metric card for admin
 * Props:
 *   label     — string
 *   value     — string | number
 *   change    — string  e.g. "+3 this week"
 *   up        — true | false | null  (null = neutral, no arrow)
 *   icon      — lucide icon component
 *   iconColor — tailwind text class e.g. "text-blue-600"
 */
export default function StatsCard({
  label,
  value,
  change,
  up,
  icon: Icon,
  iconColor = "text-blue-600",
}) {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className={`flex items-center gap-1.5 text-xs mb-2 ${iconColor}`}>
        {Icon && <Icon className="w-3.5 h-3.5" />}
        {label}
      </div>

      <p className="text-2xl font-medium">{value}</p>

      {change && (
        <p
          className={`text-[11px] mt-1 flex items-center gap-0.5
          ${
            up === true
              ? "text-green-700"
              : up === false
                ? "text-red-600"
                : "text-gray-400"
          }`}
        >
          {up === true && <ArrowUp className="w-3 h-3" />}
          {up === false && <ArrowDown className="w-3 h-3" />}
          {change}
        </p>
      )}
    </div>
  );
}
