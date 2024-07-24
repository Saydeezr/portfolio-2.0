function About() {
    return (
        <div className="flex flex-row justify-between items-start py-32">
            <div className="aboutInfo max-w-md">
                <h2 className="text-2xl font-bold mb-4">A Deeper Look</h2>
                <p className="text-base leading-relaxed">
                    From the start, I've always been driven by a desire to make a difference. I excelled in school and had a knack for grasping concepts pretty early on.
                    Then it got boring and life hit a plateau. My mind yearned for challenges, for problems to solve, for something more than the mundane. After much introspection, 
                    a few prayers, and a big healthy dose of trial and error (emphasis on the 'error'), I found my way in the complex and ever-evolving world of technology.
                    Now, I approach the intricacies of the tech world with a problem-solving mindset. This journey has been fulfilling and exciting, and I look forward to what lies ahead.
                </p>
            </div>
            <div className="Card bg-white-300 w-48h-24 flex-shrink-0 ml-4">
                <img className="w-full h-full object-cover rounded-lg" src='/public/images/code-Me.png' alt='code snippet'/>
            </div>
        </div>
    );
}

export default About;