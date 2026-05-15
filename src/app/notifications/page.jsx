"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Bell,
  Mail,
  MessageSquare,
  Shield,
  ChevronRight,
  Check,
} from "lucide-react";

const NOTIFICATION_GROUPS = [
  {
    group: "Job activity",
    icon: Zap,
    items: [
      {
        id: "job_posted",
        label: "New job posted",
        desc: "When a new job matching your profile is posted",
        email: true,
        inapp: true,
      },
      {
        id: "job_closed",
        label: "Job closed",
        desc: "When a job you applied to is closed",
        email: true,
        inapp: true,
      },
      {
        id: "job_deadline",
        label: "Application deadline",
        desc: "Reminder 3 days before deadline",
        email: true,
        inapp: false,
      },
    ],
  },
  {
    group: "Candidate updates",
    icon: Bell,
    items: [
      {
        id: "candidate_submitted",
        label: "Candidate submitted",
        desc: "When a vendor submits a candidate for your job",
        email: true,
        inapp: true,
      },
      {
        id: "status_changed",
        label: "Status changed",
        desc: "When candidate status is updated",
        email: true,
        inapp: true,
      },
      {
        id: "interview_scheduled",
        label: "Interview scheduled",
        desc: "Interview confirmation and reminders",
        email: true,
        inapp: true,
      },
      {
        id: "offer_made",
        label: "Offer made",
        desc: "When an offer is extended to a candidate",
        email: true,
        inapp: true,
      },
    ],
  },
  {
    group: "Vendor & platform",
    icon: Shield,
    items: [
      {
        id: "vendor_verified",
        label: "Vendor verified",
        desc: "When your vendor account is approved",
        email: true,
        inapp: true,
      },
      {
        id: "new_message",
        label: "New message",
        desc: "When you receive a new message",
        email: true,
        inapp: true,
      },
      {
        id: "platform_updates",
        label: "Platform updates",
        desc: "Product updates, new features, announcements",
        email: false,
        inapp: true,
      },
      {
        id: "weekly_digest",
        label: "Weekly digest",
        desc: "Weekly summary of platform activity",
        email: true,
        inapp: false,
      },
    ],
  },
];

function Toggle({ value, onChange }) {
  return (
    <button
      onClick={onChange}
      type="button"
      className={`relative w-9 h-5 rounded-full transition-colors ${value ? "bg-blue-600" : "bg-gray-200"}`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${value ? "left-4" : "left-0.5"}`}
      />
    </button>
  );
}

export default function NotificationsPage() {
  const [settings, setSettings] = useState(() => {
    const map = {};
    NOTIFICATION_GROUPS.forEach((g) =>
      g.items.forEach((i) => {
        map[i.id] = { email: i.email, inapp: i.inapp };
      }),
    );
    return map;
  });
  const [saved, setSaved] = useState(false);

  function toggle(id, channel) {
    setSettings((prev) => ({
      ...prev,
      [id]: { ...prev[id], [channel]: !prev[id][channel] },
    }));
    setSaved(false);
  }

  function saveAll() {
    // TODO: PATCH /api/notifications/preferences  { settings }
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="flex min-h-screen bg-gray-50 text-sm">
      {/* Simple settings sidebar */}
      <aside className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="flex items-center gap-2.5 px-4 py-5 border-b border-gray-100">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-4 h-4" />
          </div>
          <span className="font-medium text-base">PeopleBolt</span>
        </div>
        <nav className="flex-1 py-3 px-2 space-y-0.5">
          <p className="text-[11px] text-gray-400 uppercase tracking-wider px-3 py-2">
            Settings
          </p>
          {[
            { icon: Shield, label: "Account", href: "#" },
            { icon: Bell, label: "Notifications", href: "#", active: true },
            { icon: Mail, label: "Email", href: "#" },
            { icon: MessageSquare, label: "Privacy", href: "#" },
          ].map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-[13px] transition
                ${n.active ? "bg-blue-50 text-blue-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"}`}
            >
              <span className="flex items-center gap-2.5">
                <n.icon className="w-4 h-4" />
                {n.label}
              </span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <div>
            <h1 className="font-medium text-base">Notification preferences</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Manage how and when you receive notifications
            </p>
          </div>
          <button
            onClick={saveAll}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] transition
              ${saved ? "bg-green-50 text-green-700 border border-green-200" : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            {saved ? (
              <>
                <Check className="w-3.5 h-3.5" /> Saved!
              </>
            ) : (
              "Save preferences"
            )}
          </button>
        </div>

        <div className="p-6 space-y-5 overflow-y-auto max-w-2xl">
          {/* Channel header */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
            <div className="flex items-center px-5 py-3 bg-gray-50 border-b border-gray-100">
              <div className="flex-1" />
              <div className="flex gap-12 mr-2">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5" /> Email
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                  <Bell className="w-3.5 h-3.5" /> In-app
                </div>
              </div>
            </div>

            {NOTIFICATION_GROUPS.map((group, gi) => (
              <div key={group.group}>
                <div
                  className={`px-5 py-3 bg-gray-50 ${gi > 0 ? "border-t border-gray-100" : ""}`}
                >
                  <div className="flex items-center gap-2 text-[12px] font-medium text-gray-600">
                    <group.icon className="w-3.5 h-3.5" />
                    {group.group}
                  </div>
                </div>
                <div className="divide-y divide-gray-50">
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center px-5 py-3.5 hover:bg-gray-50 transition"
                    >
                      <div className="flex-1 min-w-0 mr-4">
                        <p className="font-medium text-[13px]">{item.label}</p>
                        <p className="text-[12px] text-gray-400 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                      <div className="flex gap-14 shrink-0">
                        <Toggle
                          value={settings[item.id]?.email}
                          onChange={() => toggle(item.id, "email")}
                        />
                        <Toggle
                          value={settings[item.id]?.inapp}
                          onChange={() => toggle(item.id, "inapp")}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Email address section */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-4">
            <p className="font-medium">Email delivery settings</p>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Primary email
              </label>
              <input
                type="email"
                defaultValue="rahul@infosys.com"
                readOnly
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-500"
              />
              <p className="text-[11px] text-gray-400 mt-1.5">
                To change your email, go to Account settings.
              </p>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Email frequency
              </label>
              <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500">
                <option>Immediately (real-time)</option>
                <option>Hourly digest</option>
                <option>Daily digest (9 AM)</option>
                <option>Weekly digest (Monday)</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end pb-6">
            <button
              onClick={saveAll}
              className={`px-5 py-2.5 rounded-lg text-[13px] transition
                ${saved ? "bg-green-50 text-green-700 border border-green-200" : "bg-blue-600 text-white hover:bg-blue-700"}`}
            >
              {saved ? "✓ Preferences saved" : "Save preferences"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
