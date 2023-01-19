import { useSelector } from "react-redux";
import { useLoggedUser } from "../redux/loggedUserSlice";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const loggedUser = useSelector(useLoggedUser);

  return loggedUser.id ? children : <Navigate to="/admin/login" />;
};
