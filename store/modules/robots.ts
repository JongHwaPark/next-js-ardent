import { createSlice } from '@reduxjs/toolkit'; 
const initialState = { 
    robots: [],
};
const imageSlice = createSlice({ 
    name: 'robots', 
    initialState: initialState,
    reducers: { 
        setRobots: (state, { payload }) => {
            state.robots = payload;
            return state;
        },
    }, 
}); 
export const { 
    setRobots,
} = imageSlice.actions; // 액션 생성함수 
export default imageSlice.reducer; // 리듀서  
