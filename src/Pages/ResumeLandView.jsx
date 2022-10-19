import React from "react";
import styled from "./ResumeLandView.module.css"
import {resumeAsserts} from "../asserts/resumeAsserts"
import { useDispatch } from "react-redux";
import { resumetype } from "../Store/ResumeType/resumetype.action";
import {useNavigate} from "react-router-dom"
export const ResumeLandView=()=>{
   const dispatch=useDispatch();
   const navigate=useNavigate();
   const handleView=(e)=>{
      dispatch(resumetype(e));
     navigate(`/view/${e.name}`)
      // const win = window.open(`view/${e.name}`,"blank");
      //  if (win != null) {
      //     win.focus();
      //  }
   }
    return(
    <div className={styled.container}>
       {resumeAsserts.map(e=>{
          return(<div key={e.noPages}>
                <div className={styled.box}>
                <div> <img src={e.image} alt="" /></div>
                <div>
            <button onClick={()=>{
               handleView(e)
            }}>View</button>
        </div>
       </div>
          </div>)
       })}
  
    </div>)
}