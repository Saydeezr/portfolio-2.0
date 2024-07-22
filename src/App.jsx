import './index.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Section from './components/Section';
import Footer from './components/Footer';
import { useRef } from 'react';


function App() {
  //set to null
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  //reference sections for Nav
  const sections = [
    {id: 'aboutSection', title:'About', ref: aboutRef},
    {id: 'workSection', title:'Work', ref: workRef},
    {id: 'resumeSection', title:'Resume', ref: resumeRef},
    {id: 'contactSection', title:'Contact', ref: contactRef}
  ];

  return (
    <>
    <Nav sections={sections} /> 
    <Intro />
    <Section ref={aboutRef} id='aboutSection'/>
    <Section ref={workRef} id='workSection'/>
    <Section ref={resumeRef} id='resumeSection'/>
    <Section ref={contactRef} id='contactSection'/>
    <Footer />
    </>
  )
}

export default App;
