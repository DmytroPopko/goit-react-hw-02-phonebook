import React from 'react';
import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <label className="Filter">
    Find contacts by name
    <input
      className="Filter__textarea"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
