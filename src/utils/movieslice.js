import { createSlice } from "@reduxjs/toolkit";
const movieslice=createSlice({
    name:"movie",
    initialState:{
        nowplayingmovies:null,
        nowplayingtrailer:null
    },
    reducers:{
        addnowplayingmovies:(state,action)=>{
            state.nowplayingmovies=action.payload;
        },
        addtrailer:(state,action)=>{
            state.nowplayingtrailer=action.payload;
        }
    }
})



export const {addnowplayingmovies,addtrailer}=movieslice.actions;
export default movieslice.reducer;