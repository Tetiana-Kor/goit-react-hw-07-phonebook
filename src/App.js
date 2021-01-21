import React from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Container from './components/Container/Container';
import './App.css';

export default function App() {
  return (
    <Container>
      <h1 className="phonebook">Phonebook</h1>
      <ContactForm />

      <h2 className="contacts">Contacts</h2>
      <Filter />

      <ContactList />
    </Container>
  );
}
