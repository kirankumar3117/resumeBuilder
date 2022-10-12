import { RESUME_TYPE } from "./resumetype.type";


export const resumetype=(value)=>(dispatch)=>{
    dispatch({type:RESUME_TYPE,payload:value})
}