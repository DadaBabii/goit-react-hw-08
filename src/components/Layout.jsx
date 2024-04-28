// import { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";
// import Loader from "./Loader";

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
