import { useDispatch, useSelector } from "react-redux"
import { selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import DocumentTitle from "../../components/DocumentTitle";
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBar from '../../components/SearchBar/SearchBar';
import ContactList from '../../components/ContactList/ContactList';

const ContactsPage = () =>{
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    
    useEffect(()=>{
        dispatch(fetchContacts());
    }, [dispatch]);

    return(
        <>
        <DocumentTitle>Contacts</DocumentTitle>
        <h1>Phonebook</h1>
        {loading && <b>Loading contacts...</b>}
        <ContactForm />
        <SearchBar />
        <ContactList />
        </>
    )
};

export default ContactsPage;