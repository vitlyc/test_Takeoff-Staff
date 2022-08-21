import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ currentUser, children }) => {
  if (currentUser.user.currentUser === null) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
