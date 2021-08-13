import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Formu from './components/Formu.js';
import BuddiesList from './components/BuddiesList';
import Buddy from './components/Buddy';
import Login from './components/Login';
import Logout from './components/Logout';
// import LoginHooks from './components/LoginHooks';
// import LogoutHooks from './components/LogoutHooks';


//should I use empty array?  
function App() {
  const BASE_URL = 'http://localhost:5000';
  const [buddies, setBuddies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  // useEffect(() =>{
  //   axios.get(`${BASE_URL}/buddy`)
  //   .then((response) => setBuddies(response.data))
  //   .catch((err) => console.log(err));
  // },[]);

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post();
  }



  //{/* <RobotForm onSubmitCallback={onSubmit}/>*/}
  return (
    <section>
      <div className="App">
        <p>Hi</p>
        <Login BASE_URL={BASE_URL} setShowForm={setShowForm}/>
        <div id="logout">
          <Logout />
        </div>
        {showForm &&
          <Formu />
         }
        {/* <Formu /> */}
      </div>
      <div>
        <BuddiesList buddies={buddies} />
      </div>
    </section>
  );
}

export default App;
