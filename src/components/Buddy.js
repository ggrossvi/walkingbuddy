import React from 'react'

const Buddy = (props) => {
    const {buddy,key} = props;
    return (
        <section>
            <h3>
                {buddy.name} #{key}
            </h3>
            <p>{buddy.zip}</p>
            <p>Morning:{buddy.morning}</p>
            <p>Afternoon:{buddy.afternoon}</p>
            <p>Evening:{buddy.evening}</p>
        </section>
    )
}

export default Buddy