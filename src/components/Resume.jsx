import { Col, Accordion, Row, Image } from "react-bootstrap";

function Resume() {
    return (
            <Row className="resume-container">
                <Col xs={12} lg={5}>
                <div className="resume-header">Resume</div>
                <Image className="res" src='images/resume.png'></Image>
                </Col>

                <Col xs={12} lg={7}>
                    <Row>
                        <h1 className="skills">Skills & </h1>
                        <h1 className="underneath">Abilities</h1>
                    </Row>
                    <Row>
                        <Col>
                            <ul className='item text-center'><i className="fab fa-html5 mr-2"></i> HTML</ul>
                            <ul className='item text-center'><i className="fab fa-css3-alt mr-2"></i> CSS</ul>
                            <ul className='item text-center'><i className="fab fa-js-square mr-2"></i> JavaScript</ul>
                        </Col>
                        <Col>
                            <ul className='item text-center'><i className="fab fa-react mr-2"></i> React</ul>
                            <ul className='item text-center'><i className="fas fa-database mr-2"></i> MongoDB</ul>
                            <ul className='item text-center'><i className="fab fa-node mr-2"></i> Node</ul>
                        </Col>
                        <Col>
                            <ul className='item text-center'><i className="fas fa-server mr-2"></i> Express</ul>
                            <ul className='item text-center'><i className="fas fa-database mr-2"></i> MySql</ul>
                            <ul className='item text-center'><i className="fas fa-database mr-2"></i> Postgres</ul>
                        </Col>
                    </Row>
                    <Row className="ms-2 top">
                    <p className="item"><i className="fa-solid fa-check"></i> MERN STACK</p>
                        <p className="item"><i className="fa-solid fa-check"></i> FULLSTACK DEVELOPMENT</p>
                        <p className="item"><i className="fa-solid fa-check"></i> UCF CERTIFIED</p>
                        <a href='download/Resume 2024.pdf' download="Resume 2024.pdf" className="res-btn">
                            <button>Download Resume</button>
                        </a>
                    </Row> 
                </Col>
            </Row>
    );
}

export default Resume;

