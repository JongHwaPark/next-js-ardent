import { combineReducers } from "@reduxjs/toolkit"; 
import { HYDRATE } from "next-redux-wrapper"; 
import counter from './counter'; 
import common from './common'; 
const reducer = (state: any, action: any) => { 
    if (action.type === HYDRATE) { 
        return { ...state, ...action.payload }; 
    } 
    return combineReducers({ 
        common,
        counter,
    })(state, action); 
} 
export default reducer;