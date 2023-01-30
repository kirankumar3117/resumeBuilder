import React from 'react';
import styled from "./Nav.module.css";
import {useDispatch} from "react-redux";
import { useSelector } from 'react-redux';
import {setThemeState} from "../Store/Theme/theme.action"
    
export const Nav = ()=>{
   //the state get from use selector
    const {state}=useSelector((state)=>state.theme);
    const dispatch=useDispatch();
    const handleSelect=(e)=>{
        if(e.target.value==="light"){
            dispatch(setThemeState(false))
        }
        else{
            dispatch(setThemeState(true))
        }
    }
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
              <div  className={`${styled.wickedImg}`}><img src="https://media.tenor.com/gY2utO0pbwkAAAAi/smile-yana.gif" alt="..." width="40px" /></div>
           </div>
            <div className= {styled.navComp}>
            <div>
                Fresher
            </div>
            <div className={""}>
                Proffesional
            </div>
            <div>
            <select className={`${styled.navSelect} ${state ? styled.navSelectTheme : ""}`}  onChange={(e)=> handleSelect(e)}>
                <option value="dark"  >Dark</option>
                <option value="light" >Light</option>
                <option value="system" >System</option>
            </select>
            </div>
           </div>
          
        </div>)
}
