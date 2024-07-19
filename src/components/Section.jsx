import React from 'react';
import About from './About';
import Work from './Work';
import Resume from './Resume';
import Contact from './Contact';

function SectionFunction({id}, ref) {
    let Component;

    switch(id) {
        case 'aboutSection':
            Component = About;
            break;
        case 'workSection':
            Component = Work;
            break;
        case 'resumeSection':
            Component = Resume;
            break;
        case 'contactSection':
            Component = Contact;
            break;
        default: break;
    }

    return (
        <div ref={ref} id={id} style={{ height: '100vh', border: '1px solid black' }}>
             {Component && <Component />}
        </div>
    )
}

const Section = React.forwardRef(SectionFunction);



export default Section;