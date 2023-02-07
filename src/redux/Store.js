import { configureStore } from '@reduxjs/toolkit';
import stockslice from './Stock-data/stock';

const store = configureStore({
    reducer: {
        stock: stockslice.reducer,
    }
})

export default store;