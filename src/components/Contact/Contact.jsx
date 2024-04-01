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
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import EditForm from "../EditForm/EditForm";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";

const theme = createTheme({
  palette: {
    ochre: {
      main: "#e36f71",
    },
    edit: {
      main: "#188c25",
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
    width: "400px",
    heigth: "400px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
Modal.setAppElement("#modal");

export default function Contact({ contact }) {
  const [modalContactIsOpen, setModalContactIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  // const [qwe, setQwe] = useState(false);
  // const [qwe1, setQwe1] = useState(false);

  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  const openModalContact = () => {
    setModalContactIsOpen(true);
  };

  const openModalEdit = () => {
    setModalEditIsOpen(true);
  };

  const closeModalContact = () => {
    setModalContactIsOpen(false);
  };

  const closeModalEdit = () => {
    setModalEditIsOpen(false);
  };

  const handleDelete = () => {
    openModalContact();
  };

  const handleSubmit = (values) => {
    setValues(values);
    dispatch(
      updateContact({
        ...values,
        id: contact.id,
      })
    )
      .unwrap()
      .then(onClose);
  };

  const onClose = () => {
    setIsEditing(false);
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
        <Box sx={{ width: "200px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#524f4e",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "600",
            }}
          >
            <PersonIcon />
            {contact.name}
          </Typography>
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
        </Box>

        <Button
          variant="outlined"
          type="button"
          startIcon={<BorderColorTwoToneIcon fontSize="small" />}
          onClick={() => {
            setIsEditing(true);
            setIsVisible(false);

            openModalEdit();
          }}
          color="edit"
          sx={{ height: "35px", alignItems: "stretch", marginRight: "10px" }}
        >
          Edit
        </Button>

        <Button
          variant="outlined"
          type="button"
          startIcon={<DeleteIcon fontSize="small" />}
          onClick={handleDelete}
          color="ochre"
          sx={{ height: "35px", alignItems: "stretch" }}
        >
          Delete
        </Button>

        <Modal
          isOpen={modalContactIsOpen}
          onRequestClose={closeModalContact}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {<ModalContact contact={contact} />}
        </Modal>

        <Modal
          isOpen={modalEditIsOpen}
          onRequestClose={closeModalEdit}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <EditForm
            contact={contact}
            onSubmit={handleSubmit}
            close={closeModalEdit}
          />
        </Modal>
      </ThemeProvider>
    </Box>
  );
}

//коли ми на тискаємо делете то відривається модальне вікно
//dispatch(delete) спрацьовує уже з модального вікна
