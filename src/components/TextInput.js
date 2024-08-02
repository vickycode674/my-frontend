// src/components/TextInput.js
import React, { useState } from 'react';
import axios from 'axios';

const TextInput = ({ onResponse }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      JSON.parse(inputValue); // Validate JSON
      setError('');
      const response = await axios.post('http://localhost:5000/api/process', { data: JSON.parse(inputValue) });
      onResponse(response.data);
    } catch (e) {
      setError('Invalid JSON format');
    }
  };

  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        rows="4"
        cols="50"
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default TextInput;
