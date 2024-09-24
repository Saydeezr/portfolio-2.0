import Project from './Project'
import { Row, Col } from 'react-bootstrap'

function Work() {
    return (
        <div className='project-container'>
            <Row className='project-header'>
                <Col xs={12} md={8} className='project-title'>Work in <span className='span'> Action</span>
                    {/* <svg width="250" height="100" xmlns="http://www.w3.org/2000/svg">
                        <text x="20" y="70" font-family="Arial" font-size="48" fill="black">&gt;&gt;&gt;&gt;&gt;&gt;&gt;</text>
                    </svg> */}
                </Col>
                <Col md={4} className='subtitle'>Check out a few of the projects I’ve completed over the past few months.</Col>
            </Row>
          <Project/>
        </div>
        
    )
}
export default Work;