import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
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
          Username
          <Field type="text" name="text">
            {({ field }) => (
              <TextField
                {...field}
                // id={nameId}

                label="Enter your name"
                // defaultValue="Default Value"
              />
            )}
          </Field>
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email">
            {({ field }) => (
              <TextField
                {...field}
                // id={nameId}

                label="Enter your email"
                defaultValue="Default Value"
              />
            )}
          </Field>
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password">
            {({ field }) => (
              <TextField
                {...field}
                // id={nameId}

                label="Enter password"
                defaultValue="Default Value"
              />
            )}
          </Field>
        </label>

        <Button variant="outlined" type="submit">
          Register
        </Button>
      </Form>
    </Formik>
  );
}
