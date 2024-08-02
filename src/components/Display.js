// src/components/Display.js
import React from 'react';

const Display = ({ data, selectedOptions }) => {
  const filterData = () => {
    if (!data) return [];

    const filters = {
      Alphabets: (item) => /^[a-zA-Z]+$/.test(item),
      Numbers: (item) => /^\d+$/.test(item),
      'Highest alphabet': (item) => /^[A-Z]$/.test(item) || /^[a-z]$/.test(item),
    };

    return data.filter(item => selectedOptions.some(option => filters[option] && filters[option](item)));
  };

  return (
    <div>
      <h3>Filtered Data:</h3>
      <ul>
        {filterData().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
