import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";

import ModalContact from "../../components/Modal/Modal";
import Modal from "react-modal";
import { useState } from "react";

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
    <>
      <div>
        <p className={css.item_info}>
          <IoMdContact className={css.icon_man} />
          {contact.name}
        </p>
        <p className={css.item_info}>
          <BsFillTelephoneFill className={css.icon_number} />
          {contact.number}
        </p>
      </div>

      <button type="button" className={css.btn_delete} onClick={handleDelete}>
        Delete
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {<ModalContact contact={contact} />}
      </Modal>
    </>
  );
}

//коли ми на тискаємо делете то відривається модальне вікно
//dispatch(delete) спрацьовує уже з модального вікна
