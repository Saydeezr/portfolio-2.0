import React from 'react';

function SectionFunction({id, title}, ref) {
    return (
        <div ref={ref} id={id} style={{ height: '100vh', border: '1px solid black' }}>
            <h2>{title}</h2>
        </div>
    )
}

const Section = React.forwardRef(SectionFunction);



export default Section;