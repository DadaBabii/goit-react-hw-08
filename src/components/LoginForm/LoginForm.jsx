import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import {
  MAX_CHAR_VALIDATION,
  MIN_CHAR_PASSWORD_VALIDATION,
  MIN_CHAR_VALIDATION,
} from "../../utils/constants";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const RegistrationFormSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Please, write correct email")
    .max(MAX_CHAR_VALIDATION, `Too long email`)
    .min(MIN_CHAR_VALIDATION, "Too Short!"),
  password: Yup.string()
    .required("Password is required!")
    .max(MAX_CHAR_VALIDATION, `Too long password`)
    .min(
      MIN_CHAR_PASSWORD_VALIDATION,
      "Please, enter password bigger, than 7 characters"
    ),
});

const initialValues = { email: "", password: "" };

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log("values:", values);
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <h2> Login </h2>
        <label>
          Email
          <br />
          <Field
            className={css.formfield}
            type="text"
            name="email"
            placeholder="raichel@fen.net"
          />
          <ErrorMessage className={css.mes} component="span" name="email" />
        </label>
        <label>
          Password
          <br />
          <Field
            className={css.formfield}
            type="text"
            name="password"
            placeholder="password"
          />
          <ErrorMessage className={css.mes} component="span" name="password" />
        </label>
        <button className={css.btn} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
