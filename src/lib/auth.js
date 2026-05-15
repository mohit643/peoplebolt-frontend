// src/lib/auth.js
// Dummy auth helpers — replace with real JWT / next-auth when backend is ready

// ─── Role constants ───────────────────────────────────────────────────────────
export const ROLES = {
  EMPLOYER: "employer",
  VENDOR: "vendor",
  CANDIDATE: "candidate",
  ADMIN: "admin",
};

// ─── Role → dashboard redirect ────────────────────────────────────────────────
export const ROLE_REDIRECTS = {
  [ROLES.EMPLOYER]: "/employer/dashboard",
  [ROLES.VENDOR]: "/vendor/dashboard",
  [ROLES.CANDIDATE]: "/candidate/profile",
  [ROLES.ADMIN]: "/admin/dashboard",
};

// ─── Dummy users (one per role) ───────────────────────────────────────────────
export const DUMMY_USERS = {
  [ROLES.EMPLOYER]: {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@infosys.com",
    role: ROLES.EMPLOYER,
    company: "Infosys BPO",
    initials: "RS",
    avatarColor: "blue",
  },
  [ROLES.VENDOR]: {
    id: 2,
    name: "TechStaff Pvt",
    email: "hr@techstaff.com",
    role: ROLES.VENDOR,
    company: "TechStaff Pvt",
    initials: "TS",
    avatarColor: "green",
    verified: true,
  },
  [ROLES.CANDIDATE]: {
    id: 3,
    name: "Amit Kumar",
    email: "amit.kumar@email.com",
    role: ROLES.CANDIDATE,
    company: null,
    initials: "AK",
    avatarColor: "amber",
  },
  [ROLES.ADMIN]: {
    id: 4,
    name: "Super Admin",
    email: "admin@vaytix.com",
    role: ROLES.ADMIN,
    company: "Vaytix Technologies",
    initials: "SA",
    avatarColor: "purple",
  },
};

// ─── Get current user from sessionStorage ────────────────────────────────────
// TODO: Replace with real JWT decode from HttpOnly cookie
export function getCurrentUser() {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem("pb_user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// ─── Dummy login ──────────────────────────────────────────────────────────────
// TODO: Replace with POST /api/auth/login → set HttpOnly cookie
export function login(role, _email, _password) {
  const user = DUMMY_USERS[role];
  if (!user) return null;
  if (typeof window !== "undefined") {
    sessionStorage.setItem("pb_user", JSON.stringify(user));
  }
  return ROLE_REDIRECTS[role];
}

// ─── Logout ───────────────────────────────────────────────────────────────────
// TODO: Replace with POST /api/auth/logout → clear cookie
export function logout() {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("pb_user");
  }
}

// ─── Role check helpers ───────────────────────────────────────────────────────
export const isEmployer = (user) => user?.role === ROLES.EMPLOYER;
export const isVendor = (user) => user?.role === ROLES.VENDOR;
export const isCandidate = (user) => user?.role === ROLES.CANDIDATE;
export const isAdmin = (user) => user?.role === ROLES.ADMIN;

// ─── Sidebar color per role ───────────────────────────────────────────────────
export const ROLE_COLORS = {
  [ROLES.EMPLOYER]: {
    bg: "bg-blue-600",
    light: "bg-blue-50",
    text: "text-blue-700",
  },
  [ROLES.VENDOR]: {
    bg: "bg-green-600",
    light: "bg-green-50",
    text: "text-green-700",
  },
  [ROLES.CANDIDATE]: {
    bg: "bg-amber-500",
    light: "bg-amber-50",
    text: "text-amber-700",
  },
  [ROLES.ADMIN]: {
    bg: "bg-purple-600",
    light: "bg-purple-50",
    text: "text-purple-700",
  },
};
