import React, { useRef, useState } from "react";
import {useReactToPrint} from "react-to-print"
import styled from './Resume1.module.css'
import {IoIosCall} from "react-icons/io"
import {GrMail} from "react-icons/gr"
import {AiOutlineGlobal} from "react-icons/ai"

function Resume1(){
    const componentRef=useRef();

   const [language,setLanguage]=useState([]);
   const [typeLanguage,setTypeLanguage]=useState("");
   const [selectLanguage,setSelectLanguage]=useState("");
   const [image,setImage]=useState(null);
   const [portfolio,setPortfolio]=useState(false)
   const [extracert,setExtracert]=useState(false)
   const [intern,setIntern]=useState(false)
   const [lightColor,setLightColor]=useState("rgb(241, 247, 252)")
   const [darkColor,setDarkColor]=useState("rgb(161, 208, 247)")

   const handleColor=(e)=>{
    setLightColor(e.target.value)
    if(e.target.value=="rgb(255, 255, 255)"){
        setDarkColor("rgb(128, 128, 128)")
    }
    else if(e.target.value=="rgb(241, 247, 252)"){
        setDarkColor("rgb(161, 208, 247)")
    }
    else if(e.target.value=="rgb(252, 241, 241)"){
        setDarkColor("rgb(247, 161, 161)")
    }
    else if(e.target.value=="rgb(252, 244, 241)"){
        setDarkColor("rgb(247, 188, 161)")
    }
    else if(e.target.value=="rgb(244, 252, 241)"){
        setDarkColor("rgb(207, 247, 161)")
    }
    else if(e.target.value=="rgb(245, 241, 252)"){
        setDarkColor("rgb(191, 161, 247)")
    }
   }

   const languageControl=(e)=>{
        let data={
            name:typeLanguage,
            range:selectLanguage
        }
       if(!typeLanguage || selectLanguage.length==0){
        alert("Enter All Language Fields")
       }
       else{
        let newdata=language;
        newdata.push(data);
        setLanguage(newdata)
       }
       setTypeLanguage("")
       setSelectLanguage("")
       console.log(language[0].name)
      
   }

    const handleBuild=useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:"enterResumeName",
        onafterprint:()=> alert("Document Priented Successfully...(: "),
       
    })

    // this data field serve the major purpose

    const [data,setData]=useState(null);

    const handleSubmit=(e)=>{
       e.preventDefault();
       let techskills=e.target.technicalskills.value;
       techskills=techskills.split(",").join(" | ")
       let softskills=e.target.softskills.value;
       softskills=softskills.split(",").join(" | ")
       
       let interests=e.target.interests.value;
       interests=interests.split(",").join(" | ")

       let projecttechskills=e.target.projecttechskills.value;
       projecttechskills=projecttechskills.split(",").join(" | ")

       let certifications=e.target.certifications.value;
       certifications=certifications.split("/");

       let extracurricular=e.target.extracurricular.value;
       extracurricular=extracurricular.split("/");

       if(e.target.extracurricular.value.length>0){
           setExtracert(true)
       }

       if(e.target.portfolio.value){
        setPortfolio(true)
       }

       if(e.target.internshiptitle.value.length>0){
        setIntern(true)
       }

        let obj={
            firstname:e.target.firstname.value,
            lastname:e.target.lastname.value,
            profession:e.target.profession.value,
            careerobjective:e.target.careerobjective.value,
            course1name:e.target.course1name.value,
            course1course:e.target.course1course.value,
            course1year:e.target.course1year.value,
            course1rank:e.target.course1rank.value,
            course2name:e.target.course2name.value,
            course2course:e.target.course2course.value,
            course2year:e.target.course2year.value,
            course2rank:e.target.course2rank.value,
            technicalskills:techskills,
            softskills:softskills,
            languages:language,
            interests:interests,
            portfolio: e.target.portfolio.value,
            mobilenumber:e.target.mobilenumber.value,
            email:e.target.email.value,
            certifications:certifications.length>0 ? certifications : [],
            projectabout:e.target.projectabout.value,
            projecttechskills:projecttechskills,
            projectoutcome:e.target.projectoutcome.value,
            projectname:e.target.projectname.value,
            extracurricular:extracurricular,
            internshiptitle:e.target.internshiptitle.value,
            internshipabout:e.target.internshipabout.value,
        }
       setData({...obj});

       alert("Data Submitted SuccessFully..(:")
    }

    return(<div>
       
       <div>
        <form action="" onSubmit={(e)=>{handleSubmit(e)}} class="form-group">

            {/* leftside data */}
            <div>
            <label htmlFor="">First Name</label>
            <input type="text"  name="firstname" class="form-control" required/>
            <label htmlFor="">Last Name</label>
            <input type="text"  name="lastname" class="form-control" required/>
            <label>profession <span style={({fontSize:"10px"})}>ex: (Fullstack Developer,Copy Writer)</span></label>
            <input type="text" class="form-control" name="profession" required/>
            <label htmlFor="">Creer Objective</label>
            <textarea name="careerobjective" rows="4" cols="35" className="form-control" defaultValue={"A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills."} required></textarea>

            {/* INPUT EDUCATION */}

            <h4>EDUCATION (Add top two courses)</h4>

            {/* COURSE 1 */}

            <label>course 1</label>
            <input className="form-control" type="text" placeholder="School/College name" name="course1name" required/>
            <br/>
            <input className="form-control" type="text" placeholder="course name ex:(compoter scince)" name="course1course" required/>
            <br/>
            <input className="form-control" type="text" placeholder="course time ex:(2017/20221 , 2017-2021)" name="course1year" required/>
            <label htmlFor="">how much knowledge did you gain ?</label>
            <input className="form-control" type="text" placeholder="ex:(98% , 98/100 , Master)" name="course1rank" required/>

            {/* COURSE 2 */}
            <label>course 2</label>
            <input className="form-control" type="text" placeholder="School/College name " name="course2name" required/>
            <br/>
            <input className="form-control" type="text" placeholder="course name ex:(compoter scince)" name="course2course" required/>
            <br/>
            <input className="form-control" type="text" placeholder="course time ex:(2017/20221 , 2017-2021)" name="course2year" required/>
            <label htmlFor="">how much knowledge did you gain ?</label>
            <input className="form-control" type="text" placeholder="ex:(98% , 98/100 , Master)" name="course2rank" required/>

            {/* Skills & Languages */}

            <label htmlFor="">Technical Skills (separate with "," and always end with ".")</label>
            <input type="text" name="technicalskills" className="form-control" defaultValue={"C,Python,Java"} required/>
            <label htmlFor="">Soft Skills (separate with "," and always end with ".")</label>
            <input type="text" name="softskills" className="form-control" defaultValue={"Communication,Teamwork,Leadership."} required/>

            <label>Languages <span>({language.length} Added)</span></label>
            <div>
           <input type="text" placeholder="Type Language" className="form-control" value={typeLanguage} onChange={(e)=>{
            setTypeLanguage(e.target.value)
           }}/>
           <br/>
            <select class="form-select" aria-label="Default select example" style={({backgroundColor:"white"})} onChange={(e)=>{
                setSelectLanguage(e.target.value);
            }} value={selectLanguage}>
            <option selected>Scale On Language</option>
            <option value="Native">Native</option>
            <option value="Basic">Basic</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Fluent">Fluent</option>
            </select>

            <div className={styled.languageaddbox} onClick={(e)=>languageControl(e)}>ADD</div>

            </div>

                {/* Habbits */}

            <label>Habbits</label>
            <input type="text" name="interests" defaultValue={"Running,Reading-Books,Netflix."} className="form-control" required/>


            </div>

            {/* ----------left side data ends-------------- */}

            
            {/*-----Right side data start */}
            <div>
                <label htmlFor="">Image file</label>
                <input type="file" onChange={(event)=>{
                    if (event.target.files && event.target.files[0]) {
                        setImage(URL.createObjectURL(event.target.files[0]));
                      }
                }} className="form-control"/>
                <label>Mobile number include country code</label>
                <input type="text" placeholder={"ex:(+91 9874561230"} name="mobilenumber" className="form-control" required/>
                <label>Email</label>
                <input type="email" name="email" className="form-control" required/>
                <label>Personal Website (Not manedatory)</label>
                <input type="text" name="portfolio" className="form-control"/>
                <label htmlFor="">Project Details</label>
                <input type="text" name="projectname" placeholder="project name" className="form-control" required/>
                <textarea type="text" placeholder="about the project" name="projectabout" rows="3" cols="30" className="form-control" required></textarea>
                <br/>
                <input type="text" placeholder="Techskills used in project ex:(HTML5,CSS3.)" name="projecttechskills" className="form-control" required/>
                <textarea type="text" className="form-control" placeholder="project outcome in a single line" name="projectoutcome" required></textarea>

                <label htmlFor="">Certifications </label>
                <textarea type="text" placeholder="seperate each certificate with /  " className="form-control" name="certifications"></textarea>
                <label htmlFor="">Extra Curricular (not manedatory and try to add only one )</label>
                <textarea type="text" placeholder="seperate each certificate with /  " className="form-control" name="extracurricular"></textarea>
                <label>Internship (Your choice)</label>
                <input type="text" className="form-control" name="internshiptitle" placeholder="Intern ship Title"/>
                <br/>
                <textarea type="text" placeholder="about internship" className="form-control" name="internshipabout"></textarea>

            </div>
            {/*-----Right side data ends */}

            <br/>
            <div>
                <select className={`form-select ${styled.changecolor}`} aria-label="Default select example" style={({backgroundColor:"white"})} 
                onChange={(e)=>handleColor(e)} >
                <option selected>Change background Ccolor</option>
                <option value="rgb(255, 255, 255)">plain</option>
                <option value="rgb(241, 247, 252)">light blue</option>
                <option value="rgb(252, 241, 241)">strong red</option>
                <option value="rgb(252, 244, 241)">light red</option>
                <option value="rgb(244, 252, 241)">light green</option>
                <option value="rgb(245, 241, 252)">light purple</option>
                </select>
            </div>
          

           

           <button className={styled.submitbutton}>Submit Data</button>
        </form>
       </div>

        <button onClick={()=>{
            handleBuild()
        }} className={styled.buildthis}>Build This</button>

        <div ref={componentRef} className={styled.container}>
           <div className={styled.left} style={({borderRight:`3.3px dotted ${darkColor}`})}>
              {/*Left page start*/}
              <div className={styled.leftcontainer}>

                {/* name in resume starts */}

               <div className={styled.name}>
                {data ? <div className={styled.namecontainer}>
                    <h1>{data.firstname}</h1>
                    <h1>{data.lastname}</h1>
                </div> : <div className={styled.namecontainer}><h1>Olivia Wilson Mondela</h1></div>}
               </div>

                {/* name in resume ends */}

                {/* proffestion starts */}

                <div>
                    <div className={styled.professionlinetop} style={({backgroundColor:`${darkColor}`})}></div>
                    <div className={styled.professionname}>{!data ? "Software Engineer" : data.profession}</div>
                    <div className={styled.professionlinebottom} style={({backgroundColor:`${darkColor}`})}></div>
                </div>

                {/* proffestion enda */}
               


                {/* career , edu , skill & lan */}


                <div className={styled.leftitems}>

                {/* career objective starts */}
               <div className={styled.career}>
                <div className={styled.careername}>career objective</div>
                <div className={styled.careerdata}>{!data ? "A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills." : data.careerobjective}</div>
               </div>
                {/* career objective Ends */}

                {/* Education Starts */}

                <div>
                    <div className={styled.eduname}>education</div>
                    <div className={styled.collegecontainer}>
                    <div>
                        <div className={styled.collegename}>{!data ? "VR Siddhartha Engineering College"  : data.course1name}</div>
                        <div className={styled.collegecourse}>{!data ? "Mechanical" : data.course1course}</div>
                        <div>{!data ? "2017-2022" : data.course1year}</div>
                        <div>FinalVote: {!data ? "65%" : data.course1rank}</div>
                    </div>
                    <div>
                        <div className={styled.collegename}>{!data ? "Sri Chaithanya Junior College"  : data.course2name}</div>
                        <div className={styled.collegecourse}>{!data ? "MPC" : data.course2course}</div>
                        <div>{!data ? "2015-2017" : data.course2year}</div>
                        <div>FinalVote: {!data ? "93%" : data.course2rank}</div>
                    </div>
                    </div>
                </div>

                {/* Skills And Lnguages */}

                <div className={styled.skillsandlnguages}>
                    <div className={styled.skills}>
                        <div className={styled.skillsname}>skills</div>
                        <div>
                            <div className={styled.techskills}>Technical skills</div>
                            <div className={styled.technicalskillslist}>{!data ? "Reactjs | NodeJs | Java." : data.technicalskills}</div>
                        </div>
                        <div>
                            <div className={styled.softskills}>Soft skills</div>
                            <div className={styled.softskillslist}>{!data ? "Communication,Teamwork,Leadership." : data.softskills}</div>
                        </div>
                    </div>
                    <div className={styled.languages}>
                        <div className={styled.languagesname}>
                           languages
                        </div>
                        <div className={styled.languageslist}>
                           {language.map((e)=>{
                            return(<div key={e.name}>{e.name}-{e.range}</div>)
                           })}
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styled.interestsname}>interests</div>
                    <div className={styled.interestslist}>{!data ? "Reading-Books | Netflix | Running | Projects with Blender." : data.interests}</div>
                </div>


                </div>




               </div>
               {/* Left Page end */}
           </div>

          

            <div className={styled.right} style={({backgroundColor:`${lightColor}`})}>
                <div className={styled.imagediv}>
                <img src={!image ? "https://cdn.pixabay.com/photo/2020/06/07/07/03/girl-5269312_960_720.jpg" : image} alt="preview image" />
                </div>


                {/* right container */}

                <div className={styled.rightcontainer}>






                {/* contacts */}
                <div>
                    <div className={styled.contactsname}>contacts</div>
                    <div>
                        <div className={styled.contactdata}>
                            <div className={styled.contactnumber}>
                            <div className={styled.callicondiv} style={({border:`2px solid ${darkColor}`})}><IoIosCall size="25px" className={styled.callicon} style={({color:`${darkColor}`})}/>
                            </div>
                            <div className={styled.mobilenumber}>{!data ? "+91 9876543210" : data.mobilenumber}</div>
                            </div>

                            <div className={styled.contactmail}>
                                <div>
                                     <GrMail size="33px" className={styled.mailicon} style={({color:`${darkColor}`})}/>
                                </div>
                                <div className={styled.mailid}>
                                   {!data ? "example.gmail.com" : data.email}
                                </div>
                            </div>

                            {portfolio ?<div className={styled.contactportfolio}>
                                <div>
                                   <AiOutlineGlobal size="33px" className={styled.portfolioicon} style={({color:`${darkColor}`})}/>
                                </div>
                                <div className={styled.portfolio}>
                                 {!data ? null : data.portfolio}
                                </div>
                            </div> : null}
                            
                        </div>
                    </div>
                </div>
                {/* contact ends */}
           
                           {/* project details starts */}
                           <div>
                                <div>
                                    <div className={styled.projectname}>
                                       project
                                    </div>
                                    <div style={({fontWeight:"bold",fontSize:"23px"})}>{!data ? null : data.projectname}</div>
                                    {!data ? null :
                                    <div>
                                    <div className={styled.projectabout}>
                                    {data.projectabout}

                                    </div>
                                    <div style={({fontSize:"18px",marginTop:"7px"})}><span style={({fontWeight:"bold"})}>Tech Stack: </span>{data.projecttechskills}</div>

                                    <div style={({fontSize:"18px",marginTop:"7px"})}><span style={({fontWeight:"bold"})}>Outcome: </span>{data.projectoutcome}</div>
                                    </div>
                                    }
                                </div>
                           </div>
                           {/* project details ends */}


                           {/* certifications starts */}
                           <div>
                                <div className={styled.certifications}>certifications</div>
                                <div>
                                   {!data ? null : <div>
                                    
                                    {data.certifications.map((e)=>{
                                        return<div style={({display:"flex"})}>
                                            <li ></li><div>{e}</div>
                                        </div>
                                    })}
                                    </div>}
                                </div>
                           </div>
                           {/* certifications ends */}


                            {/* internship starts */}
                            {intern ? <div>
                                <div className={styled.internshipname}>internship</div>
                                <div style={({fontWeight:"bold"})}>{!data ? "internship title" : data.internshiptitle }</div>
                                <div className={styled.internshipabout}>
                                    {!data ? "Tell about internship Tell about internship Tell about internship Tell about internship Tell about internship Tell about internship Tell about internship" : data.internshipabout}
                                </div>
                            </div> : null}
                            {/* internship ends */}




                           {/*Extra curricular */}
                          {extracert==true ?  <div>                               
                                    <div className={styled.extracurricularname}>extra-curricular</div>
                                    <div>
                                   {!data ? null : <div>
                                    
                                    {data.extracurricular.map((e)=>{
                                        return<div style={({display:"flex"})}>
                                            <li ></li><div>{e}</div>
                                        </div>
                                    })}
                                    </div>}
                                </div>
                                  
                           </div> : null}
                           {/*Extra curricular */}
                           
                </div>

                {/* right container ends */}

            </div>

            {/* right  ends */}

        </div>







    </div>)
}

export default Resume1;