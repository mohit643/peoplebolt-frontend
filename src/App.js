import { Routes, Route, Navigate } from "react-router-dom";

// Login Pages
import EmployerLogin from "./pages/employer/EmployerLogin.jsx";
import VendorLogin from "./pages/vendor/VendorLogin.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";

// Dashboards
import EmployerDashboard from "./pages/employer/EmployerDashboard.jsx";
import VendorDashboard from "./pages/vendor/VendorDashboard.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";

// ── Auth Guard ──────────────────────────────────────────────────────────────
// Agar login nahi hai toh login page pe bhej do
function PrivateRoute({ role, children }) {
  const stored = localStorage.getItem("pb_user");
  if (!stored) return <Navigate to={`/${role}/login`} replace />;
  const user = JSON.parse(stored);
  if (user.role !== role) return <Navigate to={`/${role}/login`} replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      {/* Default route - home pe aao toh employer login pe bhejo */}
      <Route path="/" element={<Navigate to="/employer/login" replace />} />

      {/* ── Employer Routes ── */}
      <Route path="/employer/login" element={<EmployerLogin />} />
      <Route
        path="/employer/dashboard"
        element={
          <PrivateRoute role="employer">
            <EmployerDashboard />
          </PrivateRoute>
        }
      />

      {/* ── Vendor Routes ── */}
      <Route path="/vendor/login" element={<VendorLogin />} />
      <Route
        path="/vendor/dashboard"
        element={
          <PrivateRoute role="vendor">
            <VendorDashboard />
          </PrivateRoute>
        }
      />

      {/* ── Admin Routes ── */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute role="admin">
            <AdminDashboard />
          </PrivateRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/employer/login" replace />} />
    </Routes>
  );
}
