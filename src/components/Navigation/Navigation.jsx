import { NavLink } from "react-router-dom";
import { selectIsSignedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";

const getClassActive = ({ isActive }) =>
  clsx(css.link, {
    [css.active]: isActive,
  });

const Navigation = () => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return (
    <>
      <NavLink to="/" className={getClassActive}>
        HomePage
      </NavLink>
      {isSignedIn && (
        <NavLink to="/contacts" className={getClassActive}>
          ContactsPage
        </NavLink>
      )}
    </>
  );
};

export default Navigation;
