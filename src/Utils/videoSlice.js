import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"video",
    initialState:{
        Videos:[],
    },
    reducers:{
        setVideos:(state,action)=>{
            state.Videos=[...action.payload]
        }
    }
    
})
export const {setVideos}=videoSlice.actions
export default videoSlice.reducer