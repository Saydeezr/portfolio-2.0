function Resume() {
    return (
        <div className="flex flex-row justify-center items-start pt-12 pb-36">
            <div className="flex flex-col items-center bg-white w-full p-24 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <h2 className="text-4xl font-extrabold mb-4">Resume</h2>
                <div className="resume-link max-w-md">
                    <a href="./src/assets/download/Resume 2024.pdf" download>
                        <button className="mt-2 px-6 py-3 bg-stone-400 text-white rounded-lg shadow-md hover:bg-stone-600 transition duration-300">
                            Download Resume
                        </button>
                    </a>
                </div>
                <div className="flex mt-4 space-x-4">
                    <a href="https://github.com/Saydeezr/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-2x text-gray-800 hover:text-gray-600"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/saydeez-reyes-bb9380314/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-2x text-blue-700 hover:text-blue-500"></i>
                    </a>
                </div>
            </div>
            <div className="Card bg-stone-300 p-6 w-1/4  rounded-lg shadow-lg ml-8 transform transition duration-500 hover:scale-105">
                <ul className="list-none pl-5 text-gray-900">
                    <ul className="font-bold text-neutral-800 py-8">Skills:</ul>
                    <li><i className="fab fa-html5 mr-2"></i>HTML</li>
                    <li><i className="fab fa-css3-alt mr-2"></i>CSS</li>
                    <li><i className="fab fa-js-square mr-2"></i>JavaScript</li>
                    <li><i className="fab fa-react mr-2"></i>React</li>
                    <li><i className="fab fa-node mr-2"></i>Node</li>
                    <li><i className="fas fa-server mr-2"></i>Express</li>
                    <li><i className="fas fa-database mr-2"></i>MySql</li>
                    <li><i className="fas fa-database mr-2"></i>Postgres</li>
                    <li><i className="fas fa-database mr-2"></i>MongoDB</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;

