// src/components/layout/Footer.jsx
import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-10 py-5 flex items-center justify-between text-sm text-gray-400">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
          <Zap className="text-white w-3 h-3" />
        </div>
        <span className="text-gray-900 font-medium">PeopleBolt</span>
      </div>

      <span>© 2025 Vaytix Technologies. All rights reserved.</span>

      <div className="flex gap-5">
        <Link href="#" className="hover:text-gray-600 transition">
          Privacy
        </Link>
        <Link href="#" className="hover:text-gray-600 transition">
          Terms
        </Link>
        <Link href="#" className="hover:text-gray-600 transition">
          Contact
        </Link>
      </div>
    </footer>
  );
}
