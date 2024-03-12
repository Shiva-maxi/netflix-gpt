import { createSlice } from "@reduxjs/toolkit";

const gptslice=createSlice({
    name:"gpt",
    initialState:{
        issearchgpt:false,
        movienames:null,
        movieresults:null,
    },
    reducers:{
        togglesearchgpt:(state)=>{
            state.issearchgpt=!state.issearchgpt;
        },
        addgptmoviesresults:(state,action)=>{
            const {gptMovies,gptResults}=action.payload;
            state.movienames=gptMovies;
            state.movieresults=gptResults
        }
    }
})



export const {togglesearchgpt,addgptmoviesresults}=gptslice.actions;

export default gptslice.reducer;