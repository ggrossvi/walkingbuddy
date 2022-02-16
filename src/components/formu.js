import React, {useState, useEffect} from "react";
import { times } from "../utils/times";
import axios from 'axios';

// const baseURL = "http://127.0.0.1:5000/"
const baseURL = "https://walking-buddy-bkend.herokuapp.com";



function Formu(){
  const[fname, setFname] = useState('')
  //const[lname, setLname] = useState('')
  const[zipcode, setZipCode] = useState('')
  // const[morning,setMorning] = useState('')
  const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/buddy`).then((response) => {
      setPost(response.data);

    });
  }, []);

  function createPost() {
    axios
      .post(`${baseURL}/buddy`, {
        first_name: fname,
        // last_name: "",
        // address: " 301 1st ave n",
        // apt: "",
        // city: "",
        // state: "",
        zipcode: zipcode,
        email: "treasuresoftheandes@yahoo.com",
        morning: true,
        afternoon: false,
        evening: true,
        bio: "I like to play bridge"
      })
      .then((response) => {
        console.log("it worked!")
        console.log(response)
        setPost(response.data);
      });
  }

  if (!post){
    console.log("failed")
    return "No post!"
  };


  // const handleLnameChange = event => {
  //   setLname(event.target.value)
  // };
  const handleFnameChange = event => {
    setFname(event.target.value)
  };
  const handleZipCodeChange = event => {
    setZipCode(event.target.value)
  };
  // const handleMorningChange = event => {
  //   setMorning(event.target.value)
  // };
  const handleEmailChange = event => {
    setEmail(event.target.value)
  };
  // const handlePasswordChange = event => {
  //   setPassword(event.target.value)
  // };

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

//checkbox code

// times is in util folder

// const [checkedState, setCheckedState] = useState(
//   new Array(times.length).fill(false)
// );


// const handleOnChange = (position) => {
//   console.log("onchange handler called")

//   const updatedCheckedState = checkedState.map((item, index) =>
//     index === position ? !item : item
//   );

//   setCheckedState(updatedCheckedState);

// }
//   if (updatedCheckedState !=[]){
//       const totalPrice = updatedCheckedState.reduce(
//         (currentState, index) => {
//           if (currentState === true) {
//             return times[index].time;
//           }
//           return times[index].time;
//         },
//         0
//       );
//   }


  return (
    <form >
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
{/* <div>
 <label>Last name</label>
 <input
   type="lname"
   name="lname"
   placeholder="Enter last name"
   onChange={handleLnameChange}
   value={lname}
 />
</div> */}
<div>
 <label>Zip</label>
 <input
   type="zip"
   name="zipcode"
   placeholder="Enter zip"
   onChange={handleZipCodeChange}
   value={zipcode}
 />
</div>
{/*
<div>
 <label>Morning</label>
 <input
   type="checkbox"
   name="morning"
   checked
   onChange={handleMorningChange}
   value={morning}
 />
</div>
*/}
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

<h3>Select Times</h3>
<ul className="toppings-list">
 {times.map(({time}, index) => (
   
     <li key={index}>
       <div className="times-list-item">
         <div className="left-section">
           <input
             type="checkbox"
             id={`custom-checkbox-${index}`}
             name={time}
             value={time}
            //  checked={checkedState[index]}
            //  onChange={() => handleOnChange(index)}
           />
           <label htmlFor={`custom-checkbox-${index}`}>{time}</label>
         </div>
         
       </div>
     </li>
   
 )
 )
 }
 </ul>
 
<button type="submit" onClick={createPost}>
 Submit
</button>
</form>
  )
}


export default Formu