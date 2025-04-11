import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header";
import useUser from "../../hooks/useUser";

interface ProtectedProps {
  allowedRoles?: string[];
}

const Protected: FC<ProtectedProps> = ({ allowedRoles }) => {
  const { user, isLoading, error } = useUser();
  console.log(user, isLoading, error);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <Navigate to="/login" />;
  if (allowedRoles && user?.role && !allowedRoles.includes(user.role))
    return <Navigate to="/login" />;
  if (user)
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
};

export default Protected;
