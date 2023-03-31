import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DarkModeSwitch from './switch';
import Page2 from './page2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Index () {
  const [mode, setMode] = useState('light');
  const preferredMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  // Set the initial mode on mount
  useEffect(() => {
  const storedMode = localStorage.getItem('mode');
  if (storedMode) {
      setMode(storedMode);
  } else {
      setMode(preferredMode);
  }
  }, [preferredMode]);
  
  // Add a click event listener to the button
  const toggleMode = () => {
  const newMode = mode === 'light' ? 'dark' : 'light';
  localStorage.setItem('mode', newMode);
  setMode(newMode);
  };

  return (
    <>
      <div className="lightDarkButton"
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '40px',
          height: '40px',
          padding: 0,
          border: 'none',
          margin: '20px',
          zIndex: 3,
          display: 'block'
        }}>
        <DarkModeSwitch toggleFunction={toggleMode}/>
      </div>
      
      <App mode={mode}/>

      <Page2 mode={mode}/>
    </>
  );
}

root.render (<Index/>)

reportWebVitals();