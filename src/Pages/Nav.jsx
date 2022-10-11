import React, { useState } from 'react';
import styled from "./Nav.module.css";
    
    
export const Nav = ()=>{
    const [color,setColor]=useState("text-black")
    return(
        <div className={`${styled.navContainer}`}>
           <div className={`${styled.resumeTitle}`}>
                <span style={({"--i":1})}>R</span>
                <span style={({"--i":2})}>e</span>
                <span style={({"--i":3})}>s</span>
                <span style={({"--i":4})}>u</span>
                <span style={({"--i":5})}>m</span>
                <span style={({"--i":6})}>e</span>
                <span style={({"--i":7})}>B</span>
                <span style={({"--i":8})}>u</span>
                <span style={({"--i":9})}>i</span>
                <span style={({"--i":10})}>l</span>
                <span style={({"--i":11})}>d</span>
                <span style={({"--i":12})}>e</span>
                <span style={({"--i":13})}>r</span>
              <div  className={`${styled.wickedImg}`}><img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/winking-face_1f609.png" alt="..." width="40px" /></div>
           </div>
            {/* <div className={`text-right flex mt-3 cursor-pointe ${color} ${styled.navInvisible}`}>
            <div>
                Fresher
            </div>
            <div className='ml-5 cursor-poiter'>
                Proffesional
            </div>
            <select className='bg-transparent cursor-pointer ml-4 mb-2.5'>
                Theme
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
            </select>
           </div> */}
          
        </div>)
}