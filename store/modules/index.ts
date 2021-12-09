import { combineReducers } from "@reduxjs/toolkit"; 
import { HYDRATE } from "next-redux-wrapper"; 
import counter from './counter'; 
import common from './common'; 
import images from './images'; 

const reducer = (state: any, action: any) => { 
    if (action.type === HYDRATE) { 
        return { ...state, ...action.payload }; 
    } 
    return combineReducers({ 
        common,
        counter,
        images,
    })(state, action); 
} 
export default reducer;