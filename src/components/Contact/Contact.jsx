import css from './Contact.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
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
    </>
  );
}
