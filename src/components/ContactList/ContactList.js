import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button onClick={() => onDeleteContact(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
