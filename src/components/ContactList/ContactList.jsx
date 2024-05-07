import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const visiebleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {visiebleContacts.map(contact => (
        <li key={contact.id} className={css.listItem}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
