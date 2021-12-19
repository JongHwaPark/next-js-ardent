import { combineReducers } from "@reduxjs/toolkit"; 
import { HYDRATE } from "next-redux-wrapper"; 
import counter from './counter'; 
import common from './common'; 
import images from './images'; 
import robots from './robots'; 

const reducer = (state: any, action: any) => { 
    if (action.type === HYDRATE) { 
        return { ...state, ...action.payload }; 
    } 
    return combineReducers({ 
        common,
        counter,
        images,
        robots,
    })(state, action); 
} 
export default reducer;