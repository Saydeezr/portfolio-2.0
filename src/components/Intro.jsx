import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Intro() {
    return (
      <div className="container-fluid p-0">
        <Image src="/images/Saydeez Reyes.png" fluid className="w-100" />
        <Button href="/About" className='introButton'>Get started</Button>{' '}
      </div>
    );
  }
  
  export default Intro;
