import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../actions/actions';

const dataSlice = createSlice({
   name: 'data',
   initialState: {
      loading: false,
      error: null,
      data: null
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchData.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});

export default dataSlice.reducer;
