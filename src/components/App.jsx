import { useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchContact from "./SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/contactsOps";
import { selectLoading, selectError } from "../redux/contacts/selectors";
import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import AppBar from "./AppBar/AppBar";
import { selectIsLoggedIn } from "../redux/auth/selectors";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      {/* {isLoggedIn ? (
        <>
          <p>Please log in</p>
          <LoginForm />
        </>
      ) : (
        <>
          <p>Reagistrate, please</p>
          <RegistrationForm />
        </>
      )} */}
      <p>Please log in</p>
      <LoginForm />
      <p>Reagistrate, please</p>
      <RegistrationForm />

      <h1>Phonebook</h1>
      <ContactForm />
      {loading && <Loader>Loading contacts....</Loader>}
      {!loading && !error && <SearchContact />}
      {error && <Error>Error! </Error>}
      {isLoggedIn && <ContactList />}
    </>
  );
}

export default App;
