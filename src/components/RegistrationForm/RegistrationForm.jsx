import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export default function RegistrationForm() {
  const dispatch = useDispatch();
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

        padding: "10px",
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
              fontWeight: "500",
            }}
          >
            <label>Username</label>
            <Field name="name">
              {({ field }) => (
                <TextField
                  {...field}
                  // id={nameId}

                  label="Enter your name"
                  defaultValue="Default Value"
                />
              )}
            </Field>
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
            <label>Email</label>
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
            <label>Password</label>
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
          </Box>
          <Button variant="outlined" type="submit">
            Register
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}
