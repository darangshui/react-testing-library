import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [ buttonColor, setButtonColor ] = useState('MediumVioletRed');
  const [ disabled, setDisabled ] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  
  return (
    <div>
      <h1>hi there</h1>
      <button 
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        disabled={disabled}
        onClick={() => {
          setButtonColor(newButtonColor);
        }} 
      >
        Change to {newButtonColor}
      </button>
      <input 
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled} 
        onChange={(e) => setDisabled(e.target.checked)} 
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
