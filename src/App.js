import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const  minusCounter = () => {
    setCount(count - 1);
  }
  const plusCounter = () => {
    setCount(count + 1);
  }

  


  return (
    <div className="App">
      <header className="App-header">
        <h1>COUNTER</h1>
        <h2>{count}</h2>
        <div>
          <button onClick={minusCounter} className='minus' >- minus</button>
          <button onClick={plusCounter} className='plus' >+ plus</button>
        </div>
      </header>
    </div>
  );
}

export default App;
