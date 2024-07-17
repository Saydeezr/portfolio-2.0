import './App.css';
import Nav from './components/Nav';
import Content from './components/Content';
import Section from './components/Section';
import Project from './components/Project';
import Footer from './components/Footer';
import { useRef } from 'react';


function App() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    {id: 'aboutSection', title:'About', ref: aboutRef},
    {id: 'workSection', title:'Work', ref: workRef},
    {id: 'resumeSection', title:'Resume', ref: resumeRef},
    {id: 'contactSection', title:'Contact', ref: contactRef}
  ];

  return (
    <>
    <Nav sections={sections} /> 
    <Content />
    <Section ref={aboutRef} id='aboutSection' title='About'/>
    <Section ref={workRef} id='workSection' title='Work'/>
    <Section ref={resumeRef} id='resumeSection' title='Resume'/>
    <Section ref={contactRef} id='contactSection' title='Contact'/>
    <Project />
    <Footer />
    </>
  )
}

export default App;
