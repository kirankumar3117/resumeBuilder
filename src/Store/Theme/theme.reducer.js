import {SET_THEME} from "./theme.type.js"


const initial={
    state:false;
}

export const SET_THEME_REDUCER=(state=initial,{type,payload})=>{
    switch(type){
        case SET_THEME:{
           return{
            ...state,
            state:payload
           }
        }
        default :{
            return state;
        }
    }
}