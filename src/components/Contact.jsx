function Contact() {
    return (
        <div className="bg-stone-100 pb-6">
            <h2 className='text-2xl font-bold mb-4 py-8'>Contact Me</h2>
            <form className="max-w-md mx-auto">
                <div className="relative mb-5">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Email Address" required />
                    </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="First Name"required />
                        </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Last Name" required />
                        </div>
                </div>
                <div className="relative mb-5 group">
                    <input name="floating_message" id="floating_message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder="Message" required></input>
                    </div>
                <button type="submit" className="text-white bg-zinc-400 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-stone-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-stone-400 ">Submit</button>
            </form>
        </div>
    );
}

export default Contact;