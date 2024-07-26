function Footer() {
    return(
        <div className=" rounded-lg shadow m-4 py-8">
            <div className="w-full max-w-screen-xl mx-auto p-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="shadow m-4 py-4">
                        <a href="https://github.com/Saydeezr/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github fa-2x text-white-800 hover:text-gray-600 px-2.5"></i>
                        </a> 
                        <a href="https://www.linkedin.com/in/saydeez-reyes-bb9380314/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-2x text-white-700 hover:text-blue-500 px-2.5"></i>
                        </a>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Top</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Portfolio Rights to Author</span>
            </div>
        </div>
    )
}

export default Footer;