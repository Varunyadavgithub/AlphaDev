import { createSlice } from "@reduxjs/toolkit";

const initialState={
    theme:'light',
}

const themSlice=createSlice({
    name:"them",
    initialState,
    reducers:{
        toggleTheme:(state)=>{
            state.theme=state.theme==='light'?'dark':'light';
        }
    }
})

export const { toggleTheme }=themSlice.actions;
export default themSlice.reducer;