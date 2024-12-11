import { Navigate, Outlet } from "react-router";

function PublicLayout() {

  if (localStorage.getItem("Login")) {
    return <Navigate to="/dashboard" replace/>
  }
  
  return (
    <>
      <Outlet />
    </>
  );
}

export default PublicLayout;