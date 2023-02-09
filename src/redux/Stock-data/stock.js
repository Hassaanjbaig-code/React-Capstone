import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 41efa39e0c22f8d0149cc5c4406e677c

const url = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=48&apikey=1f85ca6ba401c59c243a51e402d21c12';

export const stockdata = createAsyncThunk('Capstone/stock/fetchdata', async () => {
  const fetchd = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const convertdata = await fetchd.json();
  return convertdata;
});

const stockslice = createSlice({
  name: 'Capstone/stock',
  initialState: { data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(stockdata.fulfilled, (states, action) => (
        { ...states, data: [...action.payload] }
      ));
  },
});

export default stockslice;
