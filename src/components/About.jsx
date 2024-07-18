const styles = { 
    //need better way to style/ not inline
    card: {
      margin: 20,
      background: '#e8eaf6',
    },
    heading: {
      background: '#3f51b5',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
    content: {
      padding: 20,
    },
  };

function About() {
    return(
        <div className="container">
            <div className="aboutInfo">
                <h2>A Deeper Look</h2>
                <p>From the start, I've always been driven by a desire to make a difference. I excelled in school and had a knack for grasping concepts pretty early on.
                Then it got boring and life hit a plateau. My mind yearned for challenges, for problems to solve, for something more than the mundane. After much introspection, 
                a few prayers, and a big healthy dose of trial and error (emphasis on the 'error'), I found my way in the complex and ever-evolving world of technology.
                Now, I approach the intricacies of the tech world with a problem-solving mindset. This journey has been fulfilling and exciting, and I look forward to what lies ahead.
                </p>
            </div>
            <div style={styles.card}>
            <div style={styles.heading}>[put header here]</div>
            <div style={styles.content}>
                {/* idea: put code snippet and when hovered changes to picture of me */}
              <p>[put text here]</p>
            </div>
            </div>
        </div>
    )
}

export default About;