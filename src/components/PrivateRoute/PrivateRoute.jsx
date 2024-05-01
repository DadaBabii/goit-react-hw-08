import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const signedIn = useSelector(selectIsSignedIn);

  return signedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
