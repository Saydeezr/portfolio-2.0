function About() {
    return (
        <div className="flex flex-row justify-between items-start pt-12 pb-32">
            <div className="aboutInfo max-w-md">
                <h2 className="text-4xl font-bold mb-4">A Deeper Look</h2>
                <p className="text-base leading-relaxed">
                    From the start, I've always been driven by a desire to make a difference. I excelled in school and had a knack for grasping concepts pretty early on.
                    Then it got boring and life hit a plateau. My mind yearned for challenges, for problems to solve, for something more than the mundane. After much introspection, 
                    a few prayers, and a big healthy dose of trial and error (emphasis on the 'error'), I found my way in the complex and ever-evolving world of technology.
                    Now, I approach the intricacies of the tech world with a problem-solving mindset. This journey has been fulfilling and exciting, and I look forward to what lies ahead.
                </p>
            </div>
            <p className="text-9xl mt-24">:</p>
            <div className="image-container">
                <div className="image-flip"></div>
            </div>
            <div className="relative bg-white-300 w-48h-24 flex-shrink-0">
                <img className="image-flip w-full h-full object-cover rounded-lg" src='/images/code-Me.png' alt='code snippet'/>
                <img className="image-flip-hover w-full h-full object-cover rounded-lg absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out" src="/images/profile.jpg" alt="Second Image" />
            </div>
        </div>
    );
}

export default About;