import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
   const response = await fetch(
      `https://tyradex.vercel.app/api/v1/gen/1`
   );
   
   return response.json();
});
