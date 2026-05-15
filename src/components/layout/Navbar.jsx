"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap } from "lucide-react";

const NAV_LINKS = [
  { label: "Features",      href: "#features" },
  { label: "For Employers", href: "#employers" },
  { label: "For Vendors",   href: "#vendors"   },
  { label: "Roles",         href: "#roles"     },
];

export default function Navbar() {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-4 bg-white border-b border-gray-100">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 text-base font-medium">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Zap className="text-white w-4 h-4" />
        </div>
        PeopleBolt
      </Link>

      {/* Links — only on landing */}
      {isLanding && (
        <div className="hidden md:flex gap-7 text-sm text-gray-500">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-gray-900 transition">
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2.5">
        <Link href="/auth/login"
          className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition">
          Login
        </Link>
        <Link href="/auth/register"
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </Link>
      </div>
    </nav>
  );
}