import React, { useEffect, useState } from 'react';
import './App.css';
import paper from './pictures/Picture1.jpg';
import paper2 from './pictures/PictureInverted.jpg';
import './styles.css';
import Link from '@mui/material/Link';
import lightArrow from './pictures/image.png'
import darkArrow from './pictures/chevron-down-icon.png'
import DarkModeSwitch from './switch'
import Page2 from './page2'

type AppProps = {
  mode: string;
}

const getOffset = (element: any) => {
  const rect = element?.getBoundingClientRect(),
    scrollTop =
      window.pageYOffset ||  document.documentElement.scrollTop;

      return rect ? rect.top + scrollTop : 0;
};

function App({mode}: AppProps) {
  const [isVisible, setIsVisible] = useState(true);

  const listenToScroll = () => {
    const heightToHideFrom =
      getOffset(document.querySelector("pg2"));
    // let heightToHideFrom = 200;
    const winScroll = document.body.scrollTop ||
        document.documentElement.scrollTop;
  
    if (winScroll > heightToHideFrom) {
       isVisible &&      // to limit setting state only the first time
         setIsVisible(false);
    } else {
         setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
       window.removeEventListener("scroll", listenToScroll);
  }, [])

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
        
        {isVisible &&
          <div className="scroll">
            <Link className="experience"
            style={{
              color: mode === 'dark' ? '#ffffff' : '#000000',
              textDecorationColor: mode === 'dark' ? '#ffffff' : '#000000'
            }}
            href="#">
              Experience
            </Link>

            <Link className="projects"
            style={{
              color: mode === 'dark' ? '#ffffff' : '#000000',
              textDecorationColor: mode === 'dark' ? '#ffffff' : '#000000'
            }}
            href="#">
              Projects
            </Link>

            <Link className="contact"
            style={{
              color: mode === 'dark' ? '#ffffff' : '#000000',
              textDecorationColor: mode === 'dark' ? '#ffffff' : '#000000'
            }}
            href="#">
              Contact
            </Link>
            
            <div className="downArrow bounce">
              <img width="40" height="20" alt="" src={mode === 'dark' ? lightArrow : darkArrow} />
            </div>
          </div>
        }

        {isVisible &&
          <div className="blurb">
              I'm a 4th year undergrad at uWaterloo,
              experienced with embedded systems and object oriented code,
              with an interest in full stack and back end dev. <br/><br/>My contacts and resume are linked
              below if you'd like to reach out!
          </div>
        }
      </div>
      {/* empty page for scroll testing */}
      {/* <div className="App">
        <header className="App-header" style={{
          backgroundColor: mode === 'dark' ? "#121212" : "#ffffff"
        }}>
        </header>
      </div> */}
    </>
  );
}

export default App;