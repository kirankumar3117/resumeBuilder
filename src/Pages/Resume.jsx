import React, { useEffect, useState } from "react"
import {Document,Page,pdfjs} from "react-pdf"
import styled from "./Resume.module.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;




export const Resume=(props)=>{
    const navigate=useNavigate();

const {resumeData}=useSelector((state)=>state.viewresume)

const handleResumePages=()=>{
    console.log("hgh")
    if(resumeData.name=="resume1"){
        navigate("/resume1")
    }
}

const documentt=[];
    useEffect(()=>{
       for(var i=1;i<=resumeData.noPages;i++){
        documentt.push(<Page pageNumber={i} scale={1.079}/>)
       }
       console.log(documentt)
    },[resumeData])
    return(
        <div className={styled.container}>
            <div className={styled.left}> 
            {resumeData.noPages.map((e)=>{
                return( <div><Document file={resumeData.resume}> 
                    <Page pageNumber={e} scale={1.079}/>
                    
                   {documentt.map(e=>{
                    return React.rendor(e)
                   })}
                </Document><br/></div>)
            })}      
            </div>
            <div className={styled.right}>
                {resumeData.keypoints ? <div>
                    <h1>Main Points</h1>
                    {resumeData.keypoints.map((e)=>{
                       return <li>{e}</li>
                    })}
                </div> : null}
                <button onClick={()=>{handleResumePages()}}>Build This</button>
                <h1>{}</h1>
            </div>
        
        </div>
    )
}