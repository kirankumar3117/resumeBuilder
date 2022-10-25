import React, { useEffect, useState } from "react"
import {Document,Page,pdfjs} from "react-pdf"
import styled from "./Resume.module.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {resumeAsserts} from "../asserts/resumeAsserts"



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;




export const Resume=(props)=>{
    const navigate=useNavigate();
    const [resumeData,setResumeData]=useState(null);

    const {name}=useParams();
  
    
    



const handleResumePages=()=>{
    console.log("hgh")
    navigate(  `/${resumeData.name}`)
}

const documentt=[];
    useEffect(()=>{
        resumeAsserts.filter(e=>{
            if(e.name==name){
              setResumeData(e);
              console.log(e,resumeData)
              return;
            }
        })
        if(resumeData){
            for(var i=1;i<=resumeData.noPages;i++){
                documentt.push(<Page pageNumber={i} scale={1.079}/>)
            }
                  
        }
    
    },[resumeData])

    if(!resumeData){
        return(<div>Loading...</div>)
    }
    return(

        <div className={styled.container}>
           
          
            <div className={styled.left}> 
            {resumeData.noPages.map((e)=>{
                return( <div><Document file={resumeData.resume}> 
                    <Page pageNumber={e} scale={0.75}/>
                    
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