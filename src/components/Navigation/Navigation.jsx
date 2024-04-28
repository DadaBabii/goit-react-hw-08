import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getClassActive = ({ isActive }) =>
  clsx(css.link, {
    [css.active]: isActive,
  });

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={getClassActive}>
        HomePage
      </NavLink>
      <NavLink to="/register" className={getClassActive}>
        RegistrationPage
      </NavLink>
      <NavLink to="/login" className={getClassActive}>
        LoginPage
      </NavLink>
      <NavLink to="/contacts" className={getClassActive}>
        ContactsPage
      </NavLink>
    </nav>
  );
};

export default Navigation;
