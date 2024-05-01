// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "./redux/contacts/operations";
// import { useEffect } from "react";
// import { selectError, selectIsLoading } from "./redux/contacts/selectors";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Suspense, lazy, useEffect } from "react";
import Loader from "./components/Loader";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;

//  <div className="container">
//       <h1>Phonebook</h1>

//       <ContactForm />
//       <SearchBox />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <ContactList />
//     </div>

// <Route path="/search" element={<SearchPage />} />

//         <Route path="*" element={<NotFound />} />
