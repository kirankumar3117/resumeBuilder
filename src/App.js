
import './App.css';
import { useEffect } from 'react';
import { Nav } from './Pages/Nav';
import { useSelector } from 'react-redux';
import { Resume } from './Pages/Resume';
import { ResumeLandView } from './Pages/ResumeLandView';
import { Landing } from './Pages/LandingPage';
import {Route,Routes} from "react-router-dom"

function App() {
  
const {state}=useSelector((state)=>state.theme);

useEffect(()=>{
  if(state===false){
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("body").style.color="black";
    document.querySelector("select").style.color="black"; 
  }
  else{
    document.querySelector("body").style.backgroundColor="#101d36";
    document.querySelector("body").style.color="white";    
    document.querySelector("select").style.color="white";    
  }
  },[state])
  return (
    <div className="">
      <Routes>
        <Route path="" element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
