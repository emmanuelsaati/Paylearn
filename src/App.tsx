import { Suspense } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useLocation,
  useRoutes,
} from "react-router-dom";
import routes from "tempo-routes";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

// Pages
import Dashboard from "@/pages/Dashboard";
import Application from "@/pages/Application";
import Payments from "@/pages/Payments";
import Documents from "@/pages/Documents";
import Settings from "@/pages/Settings";
import Help from "@/pages/Help";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Website from "@/pages/Website";

function AppRoutes() {
  // Only render tempo routes when VITE_TEMPO is true
  const tempoRoutesElement =
    import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;

  return (
    <>
      {/* Render tempo routes inside the Router context */}
      {tempoRoutesElement}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/website" element={<Website />} />
        <Route path="/" element={<Navigate to="/website" replace />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/application"
          element={
            <ProtectedRoute>
              <Application />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payments"
          element={
            <ProtectedRoute>
              <Payments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/documents"
          element={
            <ProtectedRoute>
              <Documents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/help"
          element={
            <ProtectedRoute>
              <Help />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/website" replace />} />

        {/* For Tempo routes */}
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<p>Loading...</p>}>
          <AppRoutes />
          <Toaster />
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
