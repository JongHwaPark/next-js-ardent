import { createSlice } from '@reduxjs/toolkit'; 
const initialState = { 
    ui: {
        openSideBar: false,
        openRobotList: false,
    }
};
const counterSlice = createSlice({ 
    name: 'counter', 
    initialState: initialState,
    reducers: { 
        toggleImageSide: state => {
            state.ui.openSideBar = !state.ui.openSideBar;
            return state;
        },
        toggleRobotList: state => {
            state.ui.openRobotList = !state.ui.openRobotList;
            return state;
        },
    }, 
}); 
export const { 
    toggleImageSide,
    toggleRobotList,
} = counterSlice.actions; // 액션 생성함수 
export default counterSlice.reducer; // 리듀서  
