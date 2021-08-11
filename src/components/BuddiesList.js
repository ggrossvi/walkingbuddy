import React from 'react';
import Buddy from './Buddy';

const BuddiesList = (props) => {
    const {buddies} = props;
    return(
        <section>
            {buddies.map((buddy,i) => (
                <Buddy buddy={buddy} key={i} />
            ))}

        </section>
    )
}

export default BuddiesList