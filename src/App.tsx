import React from 'react';
import './App.css';
import paper from './pictures/Picture1.jpg';
import paper2 from './pictures/PictureInverted.jpg';
import './styles.css';
import Link from '@mui/material/Link';
import lightArrow from './pictures/image.png'
import darkArrow from './pictures/chevron-down-icon.png'
import DarkModeSwitch from './switch'

type AppProps = {
  mode: string;
}

function App({mode}: AppProps) {
  return (
    <>
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

        <div className="scroll">
          <Link className="experience"
          href="#">
            Experience
          </Link>

          <Link className="projects"
          href="#">
            Projects
          </Link>

          <Link className="contact"
          href="#">
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

        <div className="blurb">
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
    </>
  );
}

export default App;




