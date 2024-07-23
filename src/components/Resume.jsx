function Resume() {
    return (
        <div className="flex flex-row justify-center items-start py-32">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Resume</h2>
                <div className="resume-link max-w-md">
                    <a href="./src/assets/download/Resume 2024.pdf" download>
                        <button className="mt-2 px-6 py-3 bg-indigo-400 text-white rounded-lg shadow-md hover:bg-indigo-600 transition duration-300">
                            Download Resume
                        </button>
                    </a>
                </div>
            </div>
            <div className="Card bg-white p-6 rounded-lg shadow-lg ml-8 transform transition duration-500 hover:scale-105">
                <ul className="list-disc pl-5 text-gray-700">
                    <ul className="font-bold text-indigo-800">Skills:</ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Express</li>
                    <li>MySql</li>
                    <li>Postgres</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                    <li>React</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;

