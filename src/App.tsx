import React from 'react';
import './App.css';
import paper from './Picture1.jpg';
import paper2 from './PictureInverted.jpg';
import './styles.css';
import button1 from './lightDark.png'
import Link from '@mui/material/Link';
import { useState, useEffect } from 'react';
import lightArrow from './image.png'
import darkArrow from './chevron-down-icon.png'
import DarkModeSwitch from './switch'

type AppProps = {
  mode: string;
}

function App({mode}: AppProps) {
  return (
    <div className="front">
      <div className={mode === 'dark' ? 'dark-mode' : 'light-mode'}>
        <div className="title">
          <div className="name">
            Daniel Thero
          </div>
          
          <div className= "job">
            Computer Engineer
          </div>
        </div>
        
        <div className="background"
        style= {{
          backgroundImage:`url(${mode === 'dark' ? paper2 : paper})`
        }}>
          <div className="gradient"
          style={{
            backgroundImage: mode === 'dark' ? "linear-gradient(to top, rgba(18,18,18,1) 0%,rgba(0,0,0,0) 100%)" : "linear-gradient(to top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)"
          }}/>
        </div>

        <div className="scroll"
        style={{
          width: '100%',
          textAlign: 'center',
        }}>
          <Link className="experienceLink"
          href="#"
          sx={{
            bottom: "150px",
            position: 'absolute',
            zIndex: 3,
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Experience
          </Link>

          <Link className="projectsLink"
          href="#"
          sx={{
            bottom: "110px",
            position: 'absolute',
            zIndex: 3,
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Projects
          </Link>

          <Link className="contactLink"
          href="#"
          sx={{
            bottom: "70px",
            position: 'absolute',
            zIndex: 3,
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Contact
          </Link>

          <div className="downArrow bounce"
          style= {{
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <img width="40" height="20" alt="" src={mode === 'dark' ? lightArrow : darkArrow} />
          </div>
        </div>

        <div className="blurb"
          style={{
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
      </div>
      {/* empty page for scroll testing */}
      <div className="App">
        <header className="App-header" style={{
          backgroundColor: mode === 'dark' ? "#121212" : "#ffffff"
        }}>
        </header>
      </div>
    </div>
  );
}

export default App;




