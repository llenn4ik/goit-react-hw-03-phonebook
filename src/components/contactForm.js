import React, { Component } from "react";
import PropTypes from "prop-types";

const INITIAL_CONTACT_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = INITIAL_CONTACT_STATE;

  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { addContact } = this.props;

    addContact({ name, number });
    this.setState({ ...INITIAL_CONTACT_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="name"
            placeholder="Enter name"
            value={name}
            name="name"
            onChange={this.handleChange}
            required
          />
        </label>

        <label>
          Number
          <input
            type="phone"
            value={number}
            onChange={this.handleChange}
            name="number"
            placeholder="645-17-79"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            required
          />
        </label>

        <button type="submit">Sign up as {name}</button>
      </form>
    );
  }
}
export default ContactForm;
