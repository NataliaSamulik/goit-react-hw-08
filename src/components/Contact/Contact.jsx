import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onClickDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <div>
        <p className={css.contactData}>
          <BsPersonFill className={css.icon} />
          {contact.name}
        </p>
        <p className={css.contactData}>
          <BsFillTelephoneFill className={css.icon} />
          {contact.number}
        </p>
      </div>

      <button
        className={css.btnDelete}
        type="click"
        onClick={() => onClickDelete(contact.id)}
      >
        Delete
      </button>
    </>
  );
};
export default Contact;
