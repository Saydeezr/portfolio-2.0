import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Intro() {
    return (
      <div className="container-fluid p-0 intro-container">
        <Image src="/images/Saydeez Reyes.png" fluid className="w-100"/>
        <div className='intro'>
          <h1 className='intro-header'>Full Stack Web Developer</h1>
          <p className='intro-text'>Ready to tackle on projects with innovative design and clean, functional code. Let’s build something amazing together!</p>
        </div>
        
      </div>
    );
  }
  
  export default Intro;
