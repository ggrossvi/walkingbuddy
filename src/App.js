// import userForm from './components/userform2.txt'


import { useState, useEffect } from 'react';
import axios from 'axios';
// import {KEY} from './secrets.js';
// import { getDefaultNormalizer } from '@testing-library/dom';
import Form from './components/form.js';

function App() {
  const BASE_URL = 'http://localhost:5000/buddy';
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
