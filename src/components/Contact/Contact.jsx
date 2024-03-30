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
        // gap: "40px",
        border: "1px solid #b0aeac",
        width: "400px",
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
          startIcon={<DeleteIcon fontSize="small" />}
          onClick={handleDelete}
          color="ochre"
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
