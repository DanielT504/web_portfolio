import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import paper from './Picture1.jpg';
import paper2 from './PictureInverted.jpg';
import './styles.css';
import button1 from './lightDark.png'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useState, useEffect } from 'react';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function App() {
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
    <div className={mode === 'dark' ? 'dark-mode' : 'light-mode'}>
      <div>
      <div style= {{
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width: "100%",
      maxWidth: "100%",
      backgroundImage:`url(${mode === 'dark' ? paper2 : paper})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      position: "relative"}}>
        <div>
          <div>
            <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
              <div className="name"
                  style= {{
                position: "absolute",
                top: "0",
                left: "0",
                height: "8%",
                margin: "20px",
                fontFamily: "NunitoSans",
                // fontSize: "64px",
                marginBottom: 0,
                marginTop: "20px",
                zIndex: 3}}>
                Daniel Thero
              </div>
              <div className= "job"
                  style= {{
                position: "absolute",
                top: "9%",
                left: "0",
                margin: "20px",
                fontFamily: "NunitoSans",
                fontSize: "32px",
                zIndex: 3}}>
                Computer Engineer
              </div>
            </div>
            <div style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "150px",
              textAlign: "left",
              margin: "20px",
              fontFamily: "NunitoSansBold",
              fontSize: "18px",
              wordWrap: "break-word",
              zIndex: 3
            }}>
              I'm a 4th year undergrad at uWaterloo,
              experienced with embedded systems and object oriented code,
              with an interest in full stack and back end dev. <br/><br/>My contacts and resume are linked
              below if you'd like to reach out!
            </div>
            <button style={{
              position: 'fixed',
              left: 0,
              bottom: 0,
              backgroundImage: `url(${button1})`,
              backgroundSize: 'cover',
              width: '40px',
              height: '40px',
              padding: 0,
              border: 'none',
              margin: '20px',
              backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
              zIndex: '5',
              display: 'block'
            }}
            onClick={toggleMode}></button>
            <Link sx={{
              bottom: 0,
              position: 'absolute',
              zIndex: 6
            }}
            href="#">Link</Link>
            <Link sx={{
              bottom: 0,
              position: 'absolute',
              zIndex: 6
            }}
            href="#" color="inherit">
              {'color="inherit"'}
            </Link>
            <Link sx={{
              bottom: 0,
              position: 'absolute',
              zIndex: 6
            }}
            href="#" variant="body2">
              {'variant="body2"'}
            </Link>
          </div>
        </div>

        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "500px",
          backgroundImage: mode === 'dark' ? "linear-gradient(to top, rgba(18,18,18,1) 0%,rgba(0,0,0,0) 100%)" : "linear-gradient(to top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)",
          zIndex: '2'
        }}/>
        </div>
        <div className="App">
          <header className="App-header" style={{
            backgroundColor: mode === 'dark' ? "#121212" : "#ffffff"
          }}>
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
