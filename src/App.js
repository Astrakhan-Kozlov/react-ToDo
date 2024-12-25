import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import Cases from './Cases';


const cases = [];

function App() {
  function addCase() {
    cases.push(document.getElementById('addCase').value);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
  }

  return <div className='app-content'>
      <input id='addCase' type="text" placeholder='Задача...'></input>
      <button id='button-add' onClick={addCase}>Добавить</button>

      <Cases numbers={cases}  />
    </div>
}

export default App;
