import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Skills,
  Project,
  Contact,
  Navigation,
  Footer,
  Education,
  ScrollReveal,
} from "./components";
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <Main/>
        <ScrollReveal>
          <Expertise/>
        </ScrollReveal>
        <ScrollReveal>
          <Skills/>
        </ScrollReveal>
        <ScrollReveal>
          <Timeline/>
        </ScrollReveal>
        <ScrollReveal>
          <Education/>
        </ScrollReveal>
        <ScrollReveal>
          <Project/>
        </ScrollReveal>
        <ScrollReveal>
          <Contact/>
        </ScrollReveal>
        <Footer />
    </div>
    );
}

export default App;