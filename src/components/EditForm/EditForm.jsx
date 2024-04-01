import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import "yup-phone-lite";
import css from "./EditForm.module.css";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .phone("IN", "Please, enter valid number!")
    .required("Required"),
});

export default function EditForm({ contact, onSubmit, close }) {
  const initialValues = {
    name: contact.name,
    number: contact.number,
  };

  const handleSubmit = (values) => {
    onSubmit(values);
    close();
  };

  return (
    <Box
      sx={{
        marginTop: "10px",
        padding: "10px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form
          style={{
            border: "1.5px solid #a2a3a3",
            backgroundColor: "#f2f1f0",
            borderRadius: "5px",
            width: "280px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "stretch",
            fontWeight: "600",
          }}
        >
          <Typography
            sx={{
              fontSize: 16,
              color: "primary.main",
              fontWeight: "600",
              textAlign: "center",

              "&:hover": {
                color: "#55a8d9",
              },
            }}
          >
            Please, make any necessary changes to the contact
            <Icon
              sx={{
                marginLeft: "10px",
                fontSize: 20,
                color: "primary.main", // Колір іконки
                animation: "spin 2s linear infinite", // Анімація
              }}
            >
              <BorderColorTwoToneIcon fontSize="small" />
            </Icon>
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "100%",
            }}
          >
            <Field name="name">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Enter valid name"
                  sx={{
                    backgroundColor: "#f5f8fa",
                  }}
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
            }}
          >
            <Field name="number">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Enter valid number"
                  sx={{
                    backgroundColor: "#f5f8fa",
                  }}
                />
              )}
            </Field>
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </Box>

          <Button
            variant="outlined"
            type="submit"
            sx={{ backgroundColor: "#cce6f0" }}
          >
            Save
          </Button>
        </Form>
      </Formik>
      <Toaster />
    </Box>
  );
}
