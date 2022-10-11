import React from 'react';
import './ContactcList.scss';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button
          onClick={() => onDeleteContact(id)}
          className="ContactsList__btn"
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
