import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Intro() {
    return (
      <div className="container-fluid p-0 intro-container">
        <Image src="/images/Saydeez Reyes.png" fluid className="w-100" />
        <div className='intro'>
          <h1 className='intro-header'>Full Stack Web Developer</h1>
          <p className='intro-text'>Ready to tackle on projects with innovative design and clean, functional code. Let’s build something amazing together!</p>
          {/* <svg viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg" className="responsive-svg">
          <path d="M10 50 Q 25 20, 40 50 T 70 50 T 100 50 T 130 50 T 160 50 T 190 50 T 220 50 T 250 50 T 280 50 T 310 50 T 340 50 T 370 50 T 400 50 T 430 50 T 460 50 T 490 50 T 520 50 T 550 50 T 580 50 T 610 50 T 640 50 T 670 50 T 700 50 T 730 50 T 760 50 T 790 50" 
                  stroke="black" fill="transparent" />
          </svg> */}
        </div>
        
      </div>
    );
  }
  
  export default Intro;
