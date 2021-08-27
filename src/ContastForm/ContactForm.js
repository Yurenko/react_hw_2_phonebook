import React, { Component } from 'react';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  sortName = (contacts, name) =>
    contacts.some(contact => contact.name === name);

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { value } = e.target.name;
    e.preventDefault();
    const i = this.sortName(this.props.contacts, value);
    if (!i) {
      this.props.addUser({ ...this.state });
    } else {
      alert(`${value} is already in contacts`);
    }

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={style.form}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            id="name"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="namber">
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            id="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default ContactForm;
