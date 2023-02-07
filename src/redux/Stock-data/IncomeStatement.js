import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const IC = createAsyncThunk('Capstone/incomeStatement/fetchdata', async () => {
    const url = `https://financialmodelingprep.com/api/v3/income-statement/NVDA?limit=1&apikey=41efa39e0c22f8d0149cc5c4406e677c`;
    const ICfetch = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const fetchdataconvert = await ICfetch.json();
    console.log(fetchdataconvert);
    return fetchdataconvert;
})

const ICslice = createSlice({
    name:'Capstone/incomeStatement/fetchdata/fullfilled',
    initialState: { data: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(IC.fulfilled, (states, action) => {
                states.data = action.payload
            })
    }
})

export default ICslice;