import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { useDispatch } from "react-redux";

import ModalContact from "../../components/Modal/Modal";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    heigth: "400px",
  },
  overlay: {
    // top: "100%",
    // left: "100%",
    // right: "auto",
    // bottom: "auto",
    width: "100%", // Ширина повністю розтягується на весь вікно
    height: "100%", // Висота повністю розтягується на весь вікно
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // position: "fixed", // Встановлюємо позицію fixed
    // border: "2px solid black", // Додаємо рамку
    // backgroundColor: "white",
    // boxSizing: "border-box", // Зберігаємо ширину і висоту включаючи рамку
  },
};
Modal.setAppElement("#modal");

export default function Contact({ contact }) {
  // const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    // setId(id);
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
        // overlayClassName="custom-overlay"
      >
        {<ModalContact contact={contact} />}
      </Modal>
    </>
  );
}

//коли ми на тискаємо делете то відривається модальне вікно
//dispatch(delete) спрацьовує уже з модального вікна
