import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="passwordd" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
