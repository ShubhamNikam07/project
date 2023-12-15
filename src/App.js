import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import {Home} from './Component/Home';
import { Group7 } from './Component/Group7';
import { userContext } from './Component/Utils/Constants';
import { Signup } from './Component/Signup';
import {Loginpage} from "./Component/Loginpage";
import { useState } from 'react';
function App() {
  const[name,setName] = useState("Its Free"); 
  const[status,setStatus] = useState(false);
  return (
    <userContext.Provider value={{defaultName:"Create Account",defaultVal:name,setName,statusIs:status,setStatus}}>
      <div className="App">
        <Navbar/>
        <Home/>
        <Group7/>  
        <Signup/>
        <Loginpage/> 
  
      </div>
    </userContext.Provider>
    
  );
}

export default App;
