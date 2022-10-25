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
                    <Page pageNumber={e} scale={0.78}/>
                    
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
                       return <div className={styled.mainlist}><li></li> <div>{e}</div></div>
                    })}
                </div> : null}

                <div className={styled.highpoints}>
                    <h5 style={({textAlign:"left"})}>You can view how resume looks on submitting the data</h5>
                <h5 style={({textAlign:"left"})}>you can submit data as many times you want, just don't refresh the page.</h5>
                <h5 style={({textAlign:"left"})}>language field can't be changed once it's submitted, so fill carefully this one field</h5>
                </div>

                <div className={styled.mobilelook}>
                    <div style={({textAlign:"left"})}><h5>Mobile saving</h5></div>
                    <div style={({textAlign:"left"})}>
                        <div>for mobile printer some mobile's show like this. </div>
                        <div>You need change this default setting while saving as pdf</div>
                        <img src="https://i.postimg.cc/J7jdzjJJ/pd2.jpg" alt="" width="100%"/>
                    </div>
                    <div style={({textAlign:"left"})}>
                        <div>Change the printer to save as pdf</div>
                        <div >
                            This is importent, change paper size from 
                            <span style={({fontWeight:"bold"})}> Letter </span>
                           to 
                            <span style={({fontWeight:"bold"})}> ISO A4</span>
                            </div>
                        <img src="https://i.postimg.cc/jqhrCVYR/pd1.jpg" alt="" width="100%"/>
                    </div>
                </div>
                
                <button onClick={()=>{handleResumePages()}} className={styled.buildthis}>Build This</button>
                <h1>{}</h1>
            </div>
        
        </div>
    )
}                                                                                  