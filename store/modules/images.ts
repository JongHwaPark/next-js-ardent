import { createSlice } from '@reduxjs/toolkit'; 
const initialState = { 
    list: [],
    activeIndex: null,
};
const imageSlice = createSlice({ 
    name: 'images', 
    initialState: initialState,
    reducers: { 
        setImageList: (state, { payload }) => {
            state.list = payload;
            return state;
        },
        setActiveIndex: (state, { payload }) => {
            state.activeIndex = payload;
            return state;
        },
    }, 
}); 
export const { 
    setImageList,
    setActiveIndex,
} = imageSlice.actions; // 액션 생성함수 
export default imageSlice.reducer; // 리듀서  
