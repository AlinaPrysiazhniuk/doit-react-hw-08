import ModalContact from "../../components/Modal/Modal";
import Modal from "react-modal";
import { useState } from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/contactsOps";
// import { Form } from "react-router-dom";

export const ContactEditor = ({ initialValue, contact, onClose }) => {
  const [number, setNumber] = useState(initialValue);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateContact({
        name: contact.name,
        number,
        id: contact.id,
      })
    )
      .unwrap()
      .then(onClose);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextareaAutosize
        minRows={1}
        sx={{
          backgroundColor: "#f5f8fa",
          width: "200px",
        }}
        value={number}
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        type="submit"
        // startIcon={<DeleteIcon fontSize="small" />}
        // onClick={handleDelete}
        color="ochre"
        sx={{ height: "30px" }}
      >
        Save
      </Button>
    </form>
  );
};

const theme = createTheme({
  palette: {
    ochre: {
      main: "#e36f71",
    },
  },
});

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "300px",
    heigth: "400px",
  },
  overlay: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
Modal.setAppElement("#modal");

export default function Contact({ contact }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleDelete = () => {
    openModal();
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f2f1f0",
        borderRadius: "8px",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #a2a3a3",
        width: "400px",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#524f4e",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <PersonIcon />
            {contact.name}
          </Typography>

          {isEditing ? (
            <ContactEditor
              initialValue={contact.number}
              contact={contact}
              onClose={() => setIsEditing(false)}
            />
          ) : (
            <Typography
              sx={{
                fontSize: "16px",
                color: "#524f4e",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <PhoneIcon />
              {contact.number}
            </Typography>
          )}
        </Box>

        <Button
          variant="outlined"
          type="button"
          startIcon={<DeleteIcon fontSize="small" />}
          onClick={() => {
            setIsEditing(true);
          }}
          color="ochre"
          sx={{ height: "35px" }}
        >
          Edit
        </Button>

        <Button
          variant="outlined"
          type="button"
          startIcon={<DeleteIcon fontSize="small" />}
          onClick={handleDelete}
          color="ochre"
          sx={{ height: "35px" }}
        >
          Delete
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {<ModalContact contact={contact} />}
        </Modal>
      </ThemeProvider>
    </Box>
  );
}

//коли ми на тискаємо делете то відривається модальне вікно
//dispatch(delete) спрацьовує уже з модального вікна
