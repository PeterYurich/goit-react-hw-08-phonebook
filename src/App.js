import ContactForm from "./components/ContactForm/ContactForm";
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import css from './App.module.scss'

import { RegistrationForm } from "pages/registration/registration";
import { AuthorisationForm } from "pages/authorisation/authorisation"

const App = () =>
(
  <div className={css.container}>
    <h1>Phonebook</h1>
    <RegistrationForm></RegistrationForm>
    <AuthorisationForm></AuthorisationForm>
    <ContactForm></ContactForm>
    <h2>Contacts</h2>
    <Filter></Filter>
    <ContactList></ContactList>
  </div>
)

export default App