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
                                <div class="vertical-hr"></div>
                            </Col>
                            <Col className="center-col" >
                                <p className="temp"><i class="fa-solid fa-check"></i> MERN STACK</p>
                                <p><i class="fa-solid fa-check"></i> FULLSTACK DEVELOPMENT</p>
                                <p><i class="fa-solid fa-check"></i> UCF CERTIFIED</p>
                                <hr></hr>
                                <Image className="skill-pic" src='images/S.png'></Image>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                <Image className="temp-res" src='images/temp-resume.png'></Image>
                {/* <div className="icon-container">
                     <a href="https://github.com/Saydeezr/" target="_blank">
                         <i className="fab fa-github fa-2x"></i>
                     </a>
                     <a href="https://www.linkedin.com/in/saydeez-reyes-bb9380314/" target="_blank">
                         <i className="fab fa-linkedin fa-2x"></i>
                     </a>
                 </div> */}
                </Col>
            </Row>
        </Container>
        // <div className="flex items-stretch flex-row justify-center items-start pt-12 pb-36">
        //     <div className="resume-background flex flex-col items-center items-start p-40 transform transition duration-500 ">
        //         <h2 className="text-4xl font-extrabold mb-4">Resume</h2>
        //         <div className="resume-link max-w-md">
        //             <a href="./src/assets/download/Resume 2024.pdf" download>
        //                 <button className="mt-2 px-6 py-3 bg-stone-300 text-white rounded-lg shadow-md hover:bg-stone-600 transition duration-300 hover:scale-105">
        //                     Download Resume
        //                 </button>
        //             </a>
        //         </div>
        //         <div className="flex mt-4 space-x-4">
        //             <a href="https://github.com/Saydeezr/" target="_blank">
        //                 <i className="fab fa-github fa-2x text-gray-800 hover:text-gray-600 py-8"></i>
        //             </a>
        //             <a href="https://www.linkedin.com/in/saydeez-reyes-bb9380314/" target="_blank">
        //                 <i className="fab fa-linkedin fa-2x text-gray-800 hover:text-blue-500 py-8"></i>
        //             </a>
        //         </div>
        //     </div>
        //     <div className="Card flex justify-center py-6 w-1/4 pt-20 ml-16">
        //         <ul className="list-none pl-5 text-gray-900">
        //             <ul className="font-bold text-neutral-800 py-8">Skills:</ul>
        //             <ul><i className="fab fa-html5 mr-2"></i>HTML</ul>
        //             <ul><i className="fab fa-css3-alt mr-2"></i>CSS</ul>
        //             <ul><i className="fab fa-js-square mr-2"></i>JavaScript</ul>
        //             <ul><i className="fab fa-react mr-2"></i>React</ul>
        //             <ul><i className="fab fa-node mr-2"></i>Node</ul>
        //             <ul><i className="fas fa-server mr-2"></i>Express</ul>
        //             <ul><i className="fas fa-database mr-2"></i>MySql</ul>
        //             <ul><i className="fas fa-database mr-2"></i>Postgres</ul>
        //             <ul><i className="fas fa-database mr-2"></i>MongoDB</ul>
        //         </ul>
        //     </div>
        // </div>
    );
}

export default Resume;

