import { createSlice } from "@reduxjs/toolkit";
const movieslice=createSlice({
    name:"movie",
    initialState:{
        nowplayingmovies:null,
        nowplayingtrailer:null,
        nowplayingpopularmovies:null,
        nowplayingtoprated:null,
        nowplayingupcoming:null,
    },
    reducers:{
        addnowplayingmovies:(state,action)=>{
            state.nowplayingmovies=action.payload;
        },
        addtrailer:(state,action)=>{
            state.nowplayingtrailer=action.payload;
        },
        addpopularmovies:(state,action)=>{
            state.nowplayingpopularmovies=action.payload;
        },
        addtopratedmovies:(state,action)=>{
            state.nowplayingtoprated=action.payload;
        },
        addupcomingmovies:(state,action)=>{
            state.nowplayingupcoming=action.payload;
        }

    }
})



export const {addnowplayingmovies,addtrailer,addpopularmovies,addtopratedmovies,addupcomingmovies}=movieslice.actions;
export default movieslice.reducer;