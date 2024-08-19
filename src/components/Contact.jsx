import { Form, Row, Col, Container, Image, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.init('mGVT46GMrsNYVE5JF');
        emailjs.sendForm('service_bu5ddzt', 'template_2rnwyyr', e.target)
            .then((result) => {
                alert('Email sent successfully!');
            }, (error) => {
                alert('Failed to send email: ' + JSON.stringify(error));
            });
    };

    return (
        <Container className=" form-container">
            <Row>
                <Col >
                    <Form onSubmit={sendEmail}>
                        <h2>CONTACT ME </h2>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="2">
                            Full Name:
                            </Form.Label>
                            <Form.Control type="name" placeholder="Jane Doe" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder='"This is such a great profile!"'/>
                        </Form.Group>

                        <Button className="form-btn" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Image className='contact-pic' src="images/developer.png" fluid />
            </Row>
        </Container>
    );
}

export default Contact;