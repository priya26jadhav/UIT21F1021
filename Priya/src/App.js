// App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [avg, setAvg] = useState(0);

  const fetchNumbers = async (qualifier) => {
    try {
      const response = await axios.get(`http://20.244.56.144/test/${qualifier}`);
      const newNumbers = response.data.numbers;
      const newWindow = [...windowCurrState, ...newNumbers].slice(-10); // Assuming window size is 10
      const newAvg = newWindow.reduce((acc, curr) => acc + curr, 0) / newWindow.length;
      setWindowPrevState([...windowCurrState]);
      setWindowCurrState(newWindow);
      setNumbers(newNumbers);
      setAvg(newAvg.toFixed(2));
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchNumbers('primes')}>Fetch prime number</button>
      <button onClick={() => fetchNumbers('fibo')}>Fetch fibonacci number</button>
      <button onClick={() => fetchNumbers('even')}>Fetch even number</button>
      <button onClick={() => fetchNumbers('rand')}>Fetch random number</button>

      <div>
        <h3>Previous Window State:</h3>
        <pre>{JSON.stringify(windowPrevState)}</pre>
      </div>

      <div>
        <h3>Current Window State:</h3>
        <pre>{JSON.stringify(windowCurrState)}</pre>
      </div>

      <div>
        <h3>Numbers Received:</h3>
        <pre>{JSON.stringify(numbers)}</pre>
      </div>

      <div>
        <h3>Average:</h3>
        <p>{avg}</p>
      </div>
    </div>
  );
}

export default App;
