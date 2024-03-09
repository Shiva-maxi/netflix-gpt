import { createSlice } from "@reduxjs/toolkit";
const movieslice=createSlice({
    name:"movie",
    initialState:{
        nowplayingmovies:null
    },
    reducers:{
        addnowplayingmovies:(state,action)=>{
            state.nowplayingmovies=action.payload;
        }
    }
})



export const {addnowplayingmovies}=movieslice.actions;
export default movieslice.reducer;