// import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
// import Loader from "./Loader";
// import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <AppBar />
        {/* <Suspense fallback={<Loader />}></Suspense> */}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
