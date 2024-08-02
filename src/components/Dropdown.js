// src/components/Dropdown.js
import React from 'react';

const Dropdown = ({ options, onSelect }) => {
  return (
    <select multiple onChange={(e) => onSelect(Array.from(e.target.selectedOptions, option => option.value))}>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
