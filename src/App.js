
import './App.css';
import { useEffect } from 'react';
import { Nav } from './Pages/Nav';
import { useSelector } from 'react-redux';

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
      <Nav/>
    
    </div>
  );
}

export default App;
