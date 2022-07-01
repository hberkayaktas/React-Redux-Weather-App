import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getWeatherAsync = createAsyncThunk('Weather/getWeatherAsync', async (country) => {
      const res = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${country}&lang=tr&units=metric&cnt=7&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
      return await res.data;
})

export const textSlice = createSlice({
      name:"Weather",
      initialState:{
            items:null,
            isLoading:false,
            error:null,
      },
      reducers:{
            
      },
      extraReducers:{
            [getWeatherAsync.pending]: (state,action) =>{
                  state.isLoading = true;
            },
            [getWeatherAsync.fulfilled]:(state,action) => {
                  state.items = action.payload;
                  state.isLoading = false;
            },
            [getWeatherAsync.rejected]:(state,action) => {
                  state.error =action.error.message;
                  state.isLoading = false;
            },
      }
});



//export const {} = textSlice.actions;
export default textSlice.reducer;