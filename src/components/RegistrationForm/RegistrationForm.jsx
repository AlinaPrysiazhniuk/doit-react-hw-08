import { Formik, Form, Field } from "formik";
// import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./RegistrationForm.module.css";
import OutlinedInput from "@mui/material/OutlinedInput";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string()
    .email("Please, enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Password is required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const mailId = useId();
  const nameId = useId();
  const passwordId = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Box
      sx={{
        marginTop: "10px",
        backgroundColor: "#f2f1f0",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form
          style={{
            width: "320px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            fontWeight: "600",
          }}
          autoComplete="off"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "100%",
              color: "#524f4e",
            }}
          >
            <label htmlFor={nameId}>Username</label>
            <Field name="name">
              {({ field }) => (
                <OutlinedInput
                  id={nameId}
                  sx={{
                    backgroundColor: "#f5f8fa",
                  }}
                  {...field}
                  placeholder="Enter your name"
                />
              )}
            </Field>
            <ErrorMessage name="name" component="span" className={css.error} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "100%",
              color: "#524f4e",
              // fontWeight: "500",
            }}
          >
            <label
              htmlFor={mailId}
              // style={{ display: "flex", flexDirection: " column", gap: "4px" }}
            >
              Email
            </label>
            <Field type="email" name="email">
              {({ field }) => (
                <OutlinedInput
                  id={mailId}
                  sx={{
                    backgroundColor: "#f5f8fa",
                  }}
                  {...field}
                  // id={nameId}

                  placeholder="Enter your email"
                  // defaultValue="Default Value"
                />
              )}
            </Field>
            <ErrorMessage name="email" component="span" className={css.error} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "100%",
              color: "#524f4e",
              fontWeight: "500",
            }}
          >
            <label
              htmlFor={passwordId}
              // style={{ display: "flex", flexDirection: " column", gap: "4px" }}
            >
              Password
            </label>
            <Field type="password" name="password">
              {({ field }) => (
                <OutlinedInput
                  id={passwordId}
                  sx={{
                    backgroundColor: "#f5f8fa",
                  }}
                  {...field}
                  placeholder="Enter password"
                />
              )}
            </Field>
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </Box>
          <Button
            variant="outlined"
            type="submit"
            sx={{ backgroundColor: "#d4eafc", border: "1px solid #2a78bd " }}
          >
            Register
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}
