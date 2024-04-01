import { Formik, Form, Field } from "formik";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import useId from "@mui/material/utils/useId";

export default function LoginForm() {
  const dispatch = useDispatch();
  const mailId = useId();
  const passwordId = useId();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <Box
      sx={{
        backgroundColor: "#f2f1f0",
        padding: "20px",
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
              gap: "6px",
              color: "#524f4e",
            }}
          >
            <label htmlFor={mailId}>Email</label>
            <Field type="email" name="email">
              {({ field }) => (
                <TextField
                  sx={{
                    backgroundColor: "#f5f8fa",
                    width: "320px",
                  }}
                  {...field}
                  id={mailId}
                  label="Enter your email"
                />
              )}
            </Field>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              width: "100%",
              color: "#524f4e",
              fontWeight: "500",
            }}
          >
            <label htmlFor={passwordId}>Password</label>
            <Field type="password" name="password">
              {({ field }) => (
                <TextField
                  id={passwordId}
                  sx={{
                    backgroundColor: "#f5f8fa",
                  }}
                  {...field}
                  label="Enter password"
                />
              )}
            </Field>
          </Box>
          <Button
            variant="outlined"
            type="submit"
            sx={{ backgroundColor: "#d4eafc", border: "1px solid #2a78bd " }}
          >
            Log In
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}
