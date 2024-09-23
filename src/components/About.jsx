import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
    return (
        <Container className='about-container'>
         <Row className="about-row">
            <Col xs={12}  md={5}className="about-col">
              <Image className='aboutMePic' src="/images/Journey.png" rounded />
            </Col>
            <Col xs={12}  md={7}>
              <h1 className='about-title'>A Deeper Look</h1>
                <p className='about-text'>I am a dedicated web developer who has recently transitioned into this exciting field 
                  after years of excelling in various other careers, including a detail-oriented, data-based logistics field. 
                  My journey has been diverse, but one thing has remained constant: my commitment to progression and my drive to excel in everything I do. </p>
                 <p className='about-text'>I’m thrilled to dive deeper into the tech industry and bring my unique perspective and skills to the table. 
                  My background in logistics has honed my ability to manage complex data and ensure precision in every task. I thrive on challenges and 
                  am always eager to learn and grow.</p>
                  <p className='about-text'>
                    In just a few months, I was able to build a strong foundation of HTML, CSS, vanilla JavaScript, React, Node, MongoDB, and other
                    amazing languages and frameworks. My projects, including interactive games like M.A.S.H and sleek portfolios, reflect my attention to detail and creativity.
                  </p> 
            </Col>
         </Row> 
      </Container>
    );
}

export default About;