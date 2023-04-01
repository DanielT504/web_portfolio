import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DarkModeSwitch from './switch';
import Page2 from './page2';
import Page3 from './page3'
import Page4 from './page4'

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
    <div>
      {/*here*/}
      <div className="border"
        style={{
          border: mode === 'dark' ? '1px solid white' : '1px solid black'
        }}/>
      <div className="lightDarkButton"
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '40px',
          height: '40px',
          paddingBottom: '3vh',
          border: 'none',
          margin: '20px',
          zIndex: 4,
          display: 'block'
        }}>
        <DarkModeSwitch toggleFunction={toggleMode}/>
      </div>
      
      <App mode={mode}/>
      <Page2 mode={mode}/>
      <Page3 mode={mode}/>
      <Page4 mode={mode}/>
    </div>
  );
}

root.render (<Index/>)

reportWebVitals();