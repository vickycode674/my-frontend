// src/App.js
import React, { useState } from 'react';
import TextInput from './components/TextInput';
import Dropdown from './components/Dropdown';
import Display from './components/Display';
// src/App.js
import '../src/App.css';


const App = () => {
  const [responseData, setResponseData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleResponse = (data) => {
    setResponseData(data);
  };

  return (
    <div>
      <h1>Roll Number:</h1>
      <TextInput onResponse={handleResponse} />
      {responseData && (
        <>
          <Dropdown options={['Alphabets', 'Numbers', 'Highest alphabet']} onSelect={setSelectedOptions} />
          <Display data={responseData} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
};

export default App;
