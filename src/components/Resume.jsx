import { Button, Col, Container, Row, Image } from "react-bootstrap";

function Resume() {
    return (
        <Container className="resume-container">
            <Row>
                <Col>
                <Container className="Card flex justify-center skill-container">
                        <Row>
                            <Col>
                            <ul className="skills">Skills:</ul>
                                <hr></hr>
                                <br></br>
                                <ul><i className="fab fa-html5 mr-2"></i>HTML</ul>
                                <ul><i className="fab fa-css3-alt mr-2"></i>CSS</ul>
                                <ul><i className="fab fa-js-square mr-2"></i>JavaScript</ul>
                                <ul><i className="fab fa-react mr-2"></i>React</ul>
                                <ul><i className="fab fa-node mr-2"></i>Node</ul>
                                <ul><i className="fas fa-server mr-2"></i>Express</ul>
                                <ul><i className="fas fa-database mr-2"></i>MySql</ul>
                                <ul><i className="fas fa-database mr-2"></i>Postgres</ul>
                                <ul><i className="fas fa-database mr-2"></i>MongoDB</ul>
                            </Col>
                            <Col xs lg="1">
                                <div className="vertical-hr"></div>
                            </Col>
                            <Col className="center-col temp" >
                                <p><i className="fa-solid fa-check"></i> MERN STACK</p>
                                <p><i className="fa-solid fa-check"></i> FULLSTACK DEVELOPMENT</p>
                                <p><i className="fa-solid fa-check"></i> UCF CERTIFIED</p>
                                <br></br>
                                <hr></hr>
                                <Image className="skill-pic" src='images/S.png'></Image>
                                <a href='download/Resume 2024.pdf' download="Resume 2024.pdf" className="res-btn">
                                    <button>Download Resume</button>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                <Image className="res" src='images/resume.png'></Image>
                
                </Col>
                <Col xs lg="1">
                    <div className="vertical-text">
                        Resume
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;

