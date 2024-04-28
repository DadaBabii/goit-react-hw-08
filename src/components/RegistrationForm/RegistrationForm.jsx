import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import {
  MAX_CHAR_VALIDATION,
  MIN_CHAR_PASSWORD_VALIDATION,
  MIN_CHAR_VALIDATION,
} from "../../utils/constants";
// import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contacts/operations";

const RegistrationFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .max(MAX_CHAR_VALIDATION, `Your user name must be less than 50 characters!`)
    .min(MIN_CHAR_VALIDATION, "Too Short!"),
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

const initialValues = { name: "", email: "", password: "" };

const RegistrationForm = () => {
  //   const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log("values:", values),
      //   const newContact = { ...values };
      //   dispatch(addContact(newContact));
      actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <h2> Registration </h2>
        <label>
          Name
          <br />
          <Field
            className={css.formfield}
            type="text"
            name="name"
            placeholder="Raichel Green"
          />
          <ErrorMessage className={css.mes} component="span" name="name" />
        </label>
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
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
