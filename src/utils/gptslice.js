import { createSlice } from "@reduxjs/toolkit";

const gptslice=createSlice({
    name:"gpt",
    initialState:{
        issearchgpt:false,
    },
    reducers:{
        togglesearchgpt:(state)=>{
            state.issearchgpt=!state.issearchgpt;
        }
    }
})



export const {togglesearchgpt}=gptslice.actions;

export default gptslice.reducer;