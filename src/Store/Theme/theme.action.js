import {SET_THEME} from "./theme.type.js";

export const setThemeState=(value)=>(dispatch)=>{
    dispatch({type:SET_THEME,payload:value})
}