import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import paper from './Picture1.jpg';
import './styles.css';

// function App() {
//   return (
//     <>
//       <div style= {{
//       display: "flex",
//       justifyContent: "center",
//       height: "100vh",
//       width: "100%",
//       maxWidth: "100%",
//       backgroundImage:`url(${paper})`,
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//       backgroundPosition: "center",
//       position: "relative"}}>
//         <div>
//           <header>
//             <div style={{
//               display: "flex",
//               flexDirection: "column"
//             }}>
//               <div style= {{
//                 position: "absolute",
//                 top: "0",
//                 left: "0",
//                 height: "8%",
//                 margin: "20px",
//                 fontFamily: "NunitoSans",
//                 fontSize: "64px",
//                 marginBottom: 0,
//                 marginTop: "20px",
//                 zIndex: 2}}>
//                 Daniel Thero
//               </div>
//               <div style= {{
//                 position: "absolute",
//                 top: "9%",
//                 left: "0",
//                 margin: "20px",
//                 fontFamily: "NunitoSans",
//                 fontSize: "32px",
//                 zIndex: 2}}>
//                 Computer Engineer
//               </div>
//             </div>
//             <div style={{
//               position: "absolute",
//               bottom: 0,
//               right: 0,
//               width: "150px",
//               textAlign: "left",
//               margin: "20px",
//               fontFamily: "NunitoSansBold",
//               fontSize: "18px",
//               wordWrap: "break-word",
//               zIndex: 2
//             }}>
//               I'm a 4th year undergrad at uWaterloo,
//               experienced with embedded systems and object oriented code,
//               with an interest in full stack and back end dev. <br/><br/>My contacts and resume are linked
//               below if you'd like to reach out!
//             </div>
//           </header>
//         </div>

//         <div style={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           width: "100%",
//           height: "500px",
//           backgroundImage: "linear-gradient(to top, rgba(255,255,255,1) 5%,rgba(255,255,255,0) 100%)",
//           zIndex: 1
//         }}></div>
//       </div>
//       <div className="App">
//             <header className="App-header">
//             </header>
//       </div>
//       <button id="toggle-mode-btn">Toggle Mode</button>
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';

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
    const currentMode = mode;
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    localStorage.setItem('mode', newMode);
    setMode(newMode);
  };

  return (
    <div className={`app ${mode}`}>
      <header>
      <div style= {{
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width: "100%",
      maxWidth: "100%",
      backgroundImage:`url(${paper})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      position: "relative"}}>
        <div>
          <header>
            <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
              <div style= {{
                position: "absolute",
                top: "0",
                left: "0",
                height: "8%",
                margin: "20px",
                fontFamily: "NunitoSans",
                fontSize: "64px",
                marginBottom: 0,
                marginTop: "20px",
                zIndex: 2}}>
                Daniel Thero
              </div>
              <div style= {{
                position: "absolute",
                top: "9%",
                left: "0",
                margin: "20px",
                fontFamily: "NunitoSans",
                fontSize: "32px",
                zIndex: 2}}>
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
              zIndex: 2
            }}>
              I'm a 4th year undergrad at uWaterloo,
              experienced with embedded systems and object oriented code,
              with an interest in full stack and back end dev. <br/><br/>My contacts and resume are linked
              below if you'd like to reach out!
            </div>
          </header>
        </div>

        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "500px",
          backgroundImage: "linear-gradient(to top, rgba(255,255,255,1) 5%,rgba(255,255,255,0) 100%)",
          zIndex: 1
        }}></div>
      </div>
      <div className="App">
            <header className="App-header">
            </header>
      </div>
        <button onClick={toggleMode}>Toggle Mode</button>
      </header>
      <main>
        <p>Welcome to my website!</p>
      </main>
    </div>
  );
}

export default App;
