import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";

import ModalContact from "../../components/Modal/Modal";
import Modal from "react-modal";
import { useState } from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

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
        padding: "6px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-around",
        // alignItems: "center",
        gap: "40px",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box>
          <p className={css.item_info}>
            <IoMdContact className={css.icon_man} />
            {contact.name}
          </p>
          <p className={css.item_info}>
            <BsFillTelephoneFill className={css.icon_number} />
            {contact.number}
          </p>
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
