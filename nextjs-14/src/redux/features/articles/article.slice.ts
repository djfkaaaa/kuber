import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./article.init";
import { getArticles } from "./article.service";
import { Pending } from "@mui/icons-material";
import { getAllArticlesAPI } from "./article.api";

const articleThunks = [getArticles]

const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected : 'rejected'
}



const handlePending = (state:any) => {
    
}


const handleRejected = (state:any) => {
    
}

const handleFulfilled = (state:any,{payload}:any) => {
    console.log('--------conclusion--------')
    state.array = payload
    console.log(state.array)
}



export const articleSlice = createSlice({
    name : "article",
    initialState,
    reducers:{},
    extraReducers: builder => {
        const {pending,rejected} = status;

        builder
        .addCase(getArticles.fulfilled, handleFulfilled)
    }
})

export const getAllArticles = (state : any) => {
    console.log('------------Before useSelector--------------')
    console.log(JSON.stringify(state.article.array.result))
    return state.article.array.result;
}

export const {} = articleSlice.actions

export default articleSlice.reducer;