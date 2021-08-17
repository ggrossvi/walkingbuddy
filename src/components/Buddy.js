import React from 'react'
// import BuddiesList from '. /componets/BuddiesList'

const Buddy = (props) => {
    const {buddy,key} = props;
    return (
        
        <section>
            <h3>
                {buddy.name} #{key}
            </h3>
            <p>Email:{buddy.email}</p>
            <p>Zip:{buddy.zip}</p>
            <p>Morning:{buddy.morning}</p>
            <p>Afternoon:{buddy.afternoon}</p>
            <p>Evening:{buddy.evening}</p>
        </section>
        
        {/* <section>
            <h3> Buddies in {buddy.zip}</h3>
            

                {buddy.map {buddy => {

                    <BuddiesList key={buddy.id} buddy={buddy}
          
          }}});
        </section>
         */}
    )
}

export default Buddy