import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    } else {
      if (user?.role === "admin") {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/" />;
      }
    }
  }

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login")
    )
  ) {
    return <Navigate to="/login" />;
  }

  if (
    isAuthenticated &&
    location.pathname.includes("/login")
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/" />;
    }
  }

  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
