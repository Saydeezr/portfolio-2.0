import Project from './Project'

function Work() {
    return (
        <div className='project-container'>
        <h2 className='project-title'>Work in <span className='span'>Action</span>
            <svg width="250" height="150" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="90" font-family="Arial" font-size="48" fill="black">&gt;&gt;&gt;&gt;&gt;&gt;&gt;</text>
            </svg>
        </h2>
        <Project/>
        </div>
        
    )
}
export default Work;