import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContastForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const FilterUsr = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addUser = user => {
    const add = {
      name: user.name,
      number: user.number,
      id: shortid.generate(),
    };

    this.setState(state => ({
      contacts: [...state.contacts, add],
    }));
  };

  handleFilter = e => {
    const { contacts, filter } = this.state;
    const { value } = e.target;
    this.setState({ filter: value });
    contacts.filter(i => i.name.toLowerCase().includes(filter.toLowerCase()));
  };

  handleDelete = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const example = FilterUsr(contacts, filter);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter filter={filter} handleFilter={this.handleFilter} />
        <ContactList example={example} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
