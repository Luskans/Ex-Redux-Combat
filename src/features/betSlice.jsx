import { createSlice } from '@reduxjs/toolkit';

export const betSlice = createSlice({
   name: 'bet',
   initialState: {
      money: 100,
      bet: 0  
   },
   reducers: {
        
   }
});

export const {  } = betSlice.actions;
export default betSlice.reducer;