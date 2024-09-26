import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
