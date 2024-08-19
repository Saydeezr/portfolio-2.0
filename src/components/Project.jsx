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
            name: 'Note Taker',
            URL: 'https://notes-backend-3smx.onrender.com',
            image: '/images/notes.png',
            description: 'An efficient tool to write and save notes made by the user. Multiple notes can be submitted and saved for organization and ease.'
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
      <Container>
      <Row className="g-4">
        {projects.map((project) => (
          <Col xs={12} md={4} key={project.name}>
            <a href={project.URL} target="_blank" rel="noopener noreferrer" className="card-link h-100">
              <Card className="h-100 project-card">
                <Card.Body className="d-flex flex-column card-body">
                  <Card.Header className=" w-100">
                      <Card.Title className="text-center text-uppercase mb-2">
                        {project.name}
                      </Card.Title>
                  </Card.Header>
                  <Card.Img variant="top" src={project.image} alt="project screenshots" className="project-image" />
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                  <div className="mt-auto text-center">
                    <div className="hr"></div>
                  </div>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
      )
    };

export default Project;