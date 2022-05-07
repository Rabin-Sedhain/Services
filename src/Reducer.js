import {createSlice} from '@reduxjs/toolkit';


export const reducerSlice = createSlice({
    name:'reduce',
    initialState:{
      reduce:[],
      isLoading:true,
    },
    reducers:{
        getReduceFetch: (state) => {
            state.isLoading=true;
        },
        getReduceSuccess: (state, action) =>{
        state.reduce = action.payload;
        state.isLoading= false;
        },
        getReduceFailure: (state) => {

        state.isLoading = false;
        }
    }


});
export const {getReduceFetch, getReduceSuccess, getReduceFailure} = reducerSlice.actions;

export default reducerSlice.reducer;
