import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import "yup-phone-lite";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOps";
import toast, { Toaster } from "react-hot-toast";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const initialValues = {
  name: "",
  number: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .phone("IN", "Please, enter valid number!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    toast.success("Contact was added");
    actions.resetForm();
  };
  return (
    <Box
      sx={{
        marginTop: "10px",
        backgroundColor: "#f2f1f0",
        padding: "10px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        // gap: "20px",
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={css.form}>
          <div className={css.info_user}>
            <label htmlFor={nameId} className={css.label}>
              Name
            </label>
            <Field name="name">
              {({ field }) => (
                <TextField
                  {...field}
                  id={nameId}
                  label="Enter valid name"
                  defaultValue="Default Value"
                />
              )}
            </Field>
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>

          <div className={css.info_user}>
            <label htmlFor={phoneId} className={css.label}>
              Number
            </label>
            <Field name="number">
              {({ field }) => (
                <TextField {...field} id={phoneId} label="Enter valid number" />
              )}
            </Field>
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>

          <Button variant="outlined" type="submit">
            Add contact
          </Button>
        </Form>
      </Formik>
      <Toaster />
    </Box>
  );
}
