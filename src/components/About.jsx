import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
    return (
        <Container className='about-container'>
         <Row className="about-row">
         <Col xs={5} className="about-col">
              <Image className='aboutMePic' src="/images/Journey.png" rounded />
            </Col>
            <Col>
              <h1 className='about-title'>A Deeper Look</h1>
                <p className='about-text'>From the start, I've always been driven by a desire to make a difference. I excelled in school and 
                    had a knack for grasping concepts pretty early on. Then life seemed to hit a plateau. My mind 
                    yearned for challenges, for problems to solve, for something more than the mundane. After much 
                    introspection, a few prayers, and a big healthy dose of trial and error (emphasis on the 'error'), 
                    I found my way in the complex and ever-evolving world of technology. </p>
                 <p className='about-text'>Now, I approach the intricacies of the tech world with a problem-solving mindset. 
                    Becoming a web developer with a foundational knowledge of the MERN stack and more skills 
                    I plan to put to work, I look forward to what lies ahead.</p>
            </Col>
         </Row> 
      </Container>
    );
}

export default About;