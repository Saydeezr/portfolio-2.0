import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Project() {
    const projects = [
        {
            name: 'Payroll Tracker',
            URL: 'https://saydeezr.github.io/Payroll-Tracker-JS/',
            image: '/images/Payroll.png',
            description: 'A website to help employers keep track of their inputted employee information including first name, last name, and salary amount. A simple source with temporary storage to show the information given.'
        },
        {
            name: 'Dev-X-Connect',
            URL: 'https://dev-x-connect1.onrender.com/',
            image: '/images/devX.png',
            description: 'A  collaboration to build a social platform for coders to post questions, resources, or projects, and reply to peers.'
        },
        {
            name: 'Blog Site',
            URL: 'https://saydeezr.github.io/Blog-Maker/',
            image: '/images/blog.png',
            description: 'This site is used to create and store blog posts by the user.'
        },
        {
            name: 'M.A.S.H',
            URL: 'https://saydeezr.github.io/M.A.S.H',
            image: '/images/MASH.png',
            description: 'A fun game that takes user input and randomizes a glimpse into the future.'
        },
        {
            name: 'Web-tionary',
            URL: 'https://github.com/Saydeezr/web-tionary',
            image: '/images/web-tionary.png',
            description: 'A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.'
        },
        {
            name: 'Under the Weather',
            URL: 'https://saydeezr.github.io/under-the-weather/',
            image: '/images/weather.png',
            description: 'A website designed to give users the current weather and a 5-day forecast of any city they search for. Their most recent searches will be displayed on page as a link to go to the weather forecast of that city.'
        }
    ]
    return (
      <Row className="g-3">
        {projects.map((project) => (
          <Col xs={12} md={4} key={project.name}>
            <a href={project.URL} target="_blank" rel="noopener noreferrer" className="card-link h-100">
              <Card className="h-100 project-card">
                <Card.Body className="d-flex flex-column card-body">
                <div className="hr"></div>
                      <Card.Title className="text-center text-uppercase mb-2 site-title">
                        {project.name}
                      </Card.Title>
                  <Card.Img variant="top" src={project.image} alt="project screenshots" className="project-image" />
                  <Card.Text className='description text-center'>
                    {project.description}
                  </Card.Text>
                  <div className="mt-auto text-center">
                    <p>Click To Visit Site</p>
                    <div className="hr"></div>
                  </div>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
      )
    };

export default Project;