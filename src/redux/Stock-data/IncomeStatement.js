import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const IC = createAsyncThunk('Capstone/incomeStatement/fetchdata', async (cname) => {
  const url = `https://financialmodelingprep.com/api/v3/income-statement/${cname}?limit=120&apikey=1bf12139f9a0524d067ed60538e47b50`;
  const ICfetch = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const fetchdataconvert = await ICfetch.json();
  return fetchdataconvert;
});

const ICslice = createSlice({
  name: 'Capstone/incomeStatement/fetchdata/fullfilled',
  initialState: { data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(IC.fulfilled, (states, action) => (
        { ...states, data: [...action.payload] }
      ));
  },
});

export default ICslice;
