import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
import clsx from "clsx";

const getClassActive = ({ isActive }) =>
  clsx(css.link, {
    [css.active]: isActive,
  });

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register" className={getClassActive}>
        RegistrationPage
      </NavLink>
      <NavLink to="/login" className={getClassActive}>
        LoginPage
      </NavLink>
    </>
  );
};

export default AuthNav;

// export const AuthNav = () => {
//   return (
//     <div>
//       <NavLink className={css.link} to="/register">
//         Register
//       </NavLink>
//       <NavLink className={css.link} to="/login">
//         Log In
//       </NavLink>
//     </div>
//   );
// };
