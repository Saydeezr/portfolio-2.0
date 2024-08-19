import { Form, Row, Col, Container, Image, Button } from 'react-bootstrap'

function Contact() {
    return (
        <Container className=" form-container">
            <Row>
                <Col >
                    <Form>
                        <h2>CONTACT ME </h2>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Password
                            </Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder='"This is such a great profile!"'/>
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