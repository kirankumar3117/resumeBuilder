import React, { useRef, useState } from "react";
import {useReactToPrint} from "react-to-print"
import styled from './Resume1.module.css'

function Resume1(){
    const componentRef=useRef();

    const handleBuild=useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:"enterResumeName",
        onafterprint:()=> alert("Document Priented Successfully...(: "),
       
    })

    const [data,setData]=useState(null);

    const handleSubmit=(e)=>{
       e.preventDefault();
        let obj={
            firstname:e.target.firstname.value,
            lastname:e.target.lastname.value,
            profession:e.target.profession.value,
            careerobjective:e.target.careerobjective.value,
        }
       setData({...obj});
    }

    return(<div>
       
       <div>
        <form action="" onSubmit={(e)=>{handleSubmit(e)}} class="form-group">
            <label htmlFor="">First Name</label>
            <input type="text"  name="firstname" class="form-control"/>
            <label htmlFor="">Last Name</label>
            <input type="text"  name="lastname" class="form-control"/>
            <label>profession <span style={({fontSize:"10px"})}>ex: (Fullstack Developer,Copy Writer)</span></label>
            <input type="text" class="form-control" name="profession"/>
            <label htmlFor="">Creer Objective</label>
            <textarea name="careerobjective" rows="4" cols="35" className="form-control"></textarea>
           <button>Add</button>
        </form>
       </div>

        <button onClick={()=>{
            handleBuild()
        }}>Build This</button>

        <div ref={componentRef} className={styled.container}>
           <div className={styled.left}>
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
                    <div className={styled.professionlinetop}></div>
                </div>
               <div>{!data ? "proffesion" : data.profession}</div>
               <div>
                <div>career objective</div>
                <div>{!data ? "Personable, driven human resources specialist looking to secure a role with KPM Public Schools. Previous experience as an intern with park service, which included helping interview potential part-time personnel. Experience in onboarding new employees, as well as running fingerprinting and background checks. Seeking an opportunity to utilise these skills as a part-time HR Specialist Assistant." : data.careerobjective}</div>
               </div>
               </div>
               {/* Left Page end */}
           </div>

           <hr/>

            <div className={styled.right}>

            </div>

        </div>







    </div>)
}

export default Resume1;