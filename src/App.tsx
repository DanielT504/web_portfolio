import React, { useEffect, useState } from 'react';
import './App.css';
import paper from './pictures/Picture1.jpg';
import paper2 from './pictures/PictureInverted.jpg';
import './styles.css';
import {Link} from 'react-scroll';
import Link2 from '@mui/material/Link';
import lightArrow from './pictures/image.png';
import darkArrow from './pictures/chevron-down-icon.png';
import DarkModeSwitch from './switch';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';

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
      <div className="border1"
      style={{
        border: mode === 'dark' ? '1px solid white' : '1px solid black'
      }}/>

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
            <Link2 className="experience"
            style={{
              color: mode === 'dark' ? '#ffffff' : '#000000',
              textDecorationColor: mode === 'dark' ? '#ffffff' : '#000000'
            }}
            href="#">
              <Link to="pg2" smooth={true} duration={500}>
                Experience
              </Link>
            </Link2>

            <Link2 className="projects"
            style={{
              color: mode === 'dark' ? '#ffffff' : '#000000',
              textDecorationColor: mode === 'dark' ? '#ffffff' : '#000000'
            }}
            href="#">
              <Link to="pg3" smooth={true} duration={750}>
                Projects
              </Link>
            </Link2>

            <Link2 className="contact"
            style={{
              color: mode === 'dark' ? '#ffffff' : '#000000',
              textDecorationColor: mode === 'dark' ? '#ffffff' : '#000000'
            }}
            href="#">
              <Link to="pg4" smooth={true} duration={1000}>
                Contact
              </Link>
            </Link2>
            
            <div className="downArrow bounce">
              <img width="40" height="20" alt="" src={mode === 'dark' ? lightArrow : darkArrow} />
            </div>
          </div>
        }

        {isVisible &&
          <div className="blurb">
              I'm a Computer Engineering new grad from uWaterloo
              with a passion for AI/ML. I also have experience with OOP, backend/ full-stack, 
              and embedded systems. <br/><br/>My contacts and resume are linked
              below if you'd like to reach out!
          </div>
        }
      </div>
      {/* empty page for scroll testing  */}
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