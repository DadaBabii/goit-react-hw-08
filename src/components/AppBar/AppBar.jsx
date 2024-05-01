import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import { selectIsSignedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";
// import ContactsPage from "../../pages/ContactsPage/ContactsPage";

export const AppBar = () => {
  const signedIn = useSelector(selectIsSignedIn);
  return (
    <div className={css.header}>
      <Navigation />
      {signedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
