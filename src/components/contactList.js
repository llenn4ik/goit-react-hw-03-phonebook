import React from "react";
import PropTypes from "prop-types";
import s from "../styles.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li className={s.contact_list_item} key={id}>
        <p>
          {" "}
          {name}: {number}
        </p>

        <button
          className={s.button_contact}
          type="button"
          onClick={() => onRemoveContact(id)}
        >
          Delete contact
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
