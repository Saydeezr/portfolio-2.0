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
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div className="flex flex-col justify-between max-w-md mx-auto bg-stone-200 rounded-xl shadow-md md:max-w-2xl"
              key={project.name}>
              <div className="md:flex">
                <div className="pb-6 flex-grow">
                  <div className="uppercase mb-2 text-2xl font-bold tracking-tight text-yellow-900 text-center font-semibold py-4">
                    {project.name}
                  </div>
                  <img className="w-full h-64 object-cover" src={project.image} alt="project screenshots"/>
                  <p className="mt-2 text-stone-500">{project.description}</p>
                </div>
              </div>
              <a href={project.URL} className="mt-4 text-lg leading-tight font-medium text-yellow-800 hover:underline text-center mb-4">
                Visit Site
              </a>
            </div>
          ))}
        </ul>
      )
    };

export default Project;