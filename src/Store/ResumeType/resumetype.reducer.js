import { RESUME_TYPE } from "./resumetype.type";

// import {}
export let data={}
const initial={
    resumeData:null,
    
}

export const ResumeTypeReducer=(state=initial,{type,payload})=>{
    switch(type){
        case(RESUME_TYPE):{
            data=payload
            return {
                ...state,
                resumeData:payload,
            }
        }
        default:{
            return state
        }
    }
}
