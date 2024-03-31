import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import "yup-phone-lite";
import css from "./EditForm.module.css";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/contactsOps";
import toast, { Toaster } from "react-hot-toast";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .phone("IN", "Please, enter valid number!")
    .required("Required"),
});

export default function EditForm({ contact, onSubmit, visibleBtnEdit }) {
  const initialValues = {
    name: contact.name,
    number: contact.number,
  };

  const handleSubmit = (values) => {
    onSubmit(values);
    visibleBtnEdit();
  };

  return (
    <Box
      sx={{
        marginTop: "10px",
        padding: "10px",
        borderRadius: "8px",
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
            borderRadius: "5px",
            width: "280px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",

            gap: "15px",
            alignItems: "stretch",
            color: "#524f4e",
            fontWeight: "600",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "100%",
            }}
          >
            {/* <label htmlFor={nameId}>Name</label> */}
            <Field name="name">
              {({ field }) => <TextField {...field} label="Enter valid name" />}
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
            {/* <label htmlFor={phoneId}>Number</label> */}
            <Field name="number">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Enter valid number"
                  //   value={initialValues.number}
                />
              )}
            </Field>
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </Box>

          <Button variant="outlined" type="submit">
            Save
          </Button>
        </Form>
      </Formik>
      <Toaster />
    </Box>
  );
}
