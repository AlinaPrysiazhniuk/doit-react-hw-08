import { Formik, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <Box
      sx={{
        backgroundColor: "#f2f1f0",
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <FormControl
          sx={{
            width: "320px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
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
            Log In
          </Button>
        </FormControl>
      </Formik>
    </Box>
  );
}
