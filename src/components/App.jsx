import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';
import { selectLoading, selectError } from '../redux/contactsSlice';
import Loader from './Loader/Loader';
import Error from './Error/Error';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      {loading && <Loader>Loading contacts....</Loader>}
      {!loading && !error && <SearchContact />}
      {error && <Error>Error! </Error>}
      <ContactList />
    </>
  );
}

export default App;
