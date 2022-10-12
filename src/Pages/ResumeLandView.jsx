import React from "react";
import styled from "./ResumeLandView.module.css"
import {resumeAsserts} from "../asserts/resumeAsserts"


export const ResumeLandView=()=>{
    return(
    <div className={styled.container}>
       {resumeAsserts.map(e=>{
          return(<div key={e.noPages}>
                <div className={styled.box}>
                <div> <img src={e.image} alt="" /></div>
                <div>
            <button>View</button>
        </div>
       </div>
          </div>)
       })}
  
    </div>)
}