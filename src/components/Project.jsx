import payrollPng from '../assets/images/Payroll.png';

function Project() {
    const projects = [
        {
            name: 'Payroll Tracker',
            URL: 'https://saydeezr.github.io/Payroll-Tracker-JS/',
            image: '{payrollPng}',
            description: 'a website to help employers keep track of their inputted employee information including first name, last name, and salary amount. It is a simple source with temporary storage to show the information given on a table.'
        },
        {
            name: 'Under the Weather',
            URL: 'https://saydeezr.github.io/under-the-weather/',
            image: '',
            description: 'A website designed to give users the current weather and a 5-day forecast of any city they search for. Their most recent searches will be displayed on page as a link to go to the weather forecast of that city.'
        },
        {
            name: 'Blog Site',
            URL: 'https://saydeezr.github.io/Blog-Maker/',
            image: '',
            description: 'This site is used to create and store blog posts by the user.'
        },
        {
            name: 'Logo-R-Us',
            URL: 'https://github.com/Saydeezr/logo-r-us',
            image: '',
            description: 'An application set to take input from a user from the command line to create a simple logo.'
        },
        {
            name: 'Web-tionary',
            URL: 'https://github.com/Saydeezr/web-tionary',
            image: '',
            description: 'A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.'
        },
        {
            name: 'Social Notes',
            URL: 'https://github.com/Saydeezr/social-notes',
            image: '',
            description: 'An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.'
        }
    ]
    return (
     <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div className="project-card flex flex-col justify-between max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        key={project.name}>
               <div class="md:flex">
                <div class="md:shrink-0">
                </div>
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{project.name}</div>
                    <img src={project.image} alt='project screenshots'></img>
                    <a href="{project.URL}" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{project.image}</a>
                    <p class="mt-2 text-slate-500">{project.description}</p>
                </div>
            </div>
        </div>
      ))}
     </ul>
    )     
}
export default Project;