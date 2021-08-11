import { useState, useEffect } from 'react';
import axios from 'axios';
import Formu from './components/formu.js';
import BuddiesList from './components/BuddiesList';
import Buddy from './components/Buddy';

//should I use empty array?  
function App() {
  const BASE_URL = 'http://localhost:5000/';
  const[buddies, setBuddies] = useState([]);
  useEffect(() =>{
    axios.get(`${BASE_URL}/buddy`)
    .then((response) => setBuddies(response.data))
    .catch((err) => console.log(err));
  },[]);
 
  const onSubmit=(event)=>{
    event.preventDefault();
    axios.post();
  }

  
 
  //{/* <RobotForm onSubmitCallback={onSubmit}/>*/}
  return (
    <section>
    <div className="App">
      <Formu />
    </div>
    <div>
      <BuddiesList buddies={buddies}/>  
    </div>
    </section>
  );
}

export default App;
