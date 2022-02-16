import React, { useState, useEffect } from "react";
// import { times } from "../utils/times";
import axios from 'axios';

// const baseURL = "http:localhost:5000"
const baseURL = "https://walking-buddy-bkend.herokuapp.com";
const times = [
  {
      time: "Morning"
  },
  {
      time: "Afternoon"
  },
  {
      time: "Evening"
  }
]
function Register() {
  const [fname, setFname] = useState('')
  const[lname, setLname] = useState('')
  const [zipcode, setZipCode] = useState('')
  
  const [email, setEmail] = useState('')
  const [checkboxes, setCheckboxes] = useState([false, false, false]);
 
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(`${baseURL}/buddy`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  function createPost(event) {
    event.preventDefault();
    axios
      .post(`${baseURL}/buddy`, {
        // given_name and family_name have this because of login object having these names.
        given_name: fname,
        family_name: lname,
        // first_name: fname,
        // last_name: "",
        // address: " 301 1st ave n",
        // apt: "",
        // city: "",
        // state: "",
        // zipcode: zipcode,
        email: email,
        // morning: checkboxes[0],
        // afternoon: checkboxes[1],
        // evening: checkboxes[2],
        // bio: "I like to play bridge"
      })
      .then((response) => {
        console.log("it worked!");
        console.log(response);
        // setPost(response.data);
      });
  }

  // if (!post) {
  //   console.log("failed")
  //   return "No post!"
  // };


  const handleLnameChange = event => {
    setLname(event.target.value)
  };
  const handleFnameChange = event => {
    setFname(event.target.value)
  };
  // const handleZipCodeChange = event => {
  //   setZipCode(event.target.value)
  // };
  
  const handleEmailChange = event => {
    setEmail(event.target.value)
  };

//   const handleCheckboxChange = (event, index) => {
//     checkboxes[index] = event.target.checked;
//     setCheckboxes(checkboxes);
// }

 

  // const handleSubmit = event => {
  //   event.preventDefault();
  //    {/*lname: ${lname} \n */}
  //    {/*password: ${password} \n*/}
  //   alert(`Your state values: \n         
  //           fname: ${fname} \n 
  //           zip: ${zipcode} \n 
  //           email: ${email} \n          
  //           You can replace this alert with your process`);
  // };

  

  return (
    <form onSubmit={createPost}>
      <div>
        <label>First name</label>
        <input
          type="fname"
          name="fname"
          placeholder="Enter first name"
          onChange={handleFnameChange}
          value={fname}
        />
      </div>
       <div>
    <label>Last name</label>
    <input
    type="lname"
    name="lname"
    placeholder="Enter last name"
    onChange={handleLnameChange}
    value={lname}
    />
    </div> 

      {/*<div>
        <label>Zip</label>
        <input
          type="zip"
          name="zipcode"
          placeholder="Enter zip"
          onChange={handleZipCodeChange}
          value={zipcode}
        />
      </div>*/}

      <div>
        <label>Email address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleEmailChange}
          value={email}
        />
      </div>

      {/*<h3>Select Times</h3>
        <ul className="times-list">
          {times.map(({time}, index) => (
      
          <li key={index}>
          <div className="times-list-item">
              <div className="left-section">
                <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={time}
                  
                    onChange={(event) => handleCheckboxChange(event, index)}
                />
                <label htmlFor={`custom-checkbox-${index}`}>{time}</label>
              </div>      
          </div>
          </li>
            )
            )
          }
        </ul>
        */}   
      <button type="submit">Submit</button>
    </form>
  )
}


export default Register