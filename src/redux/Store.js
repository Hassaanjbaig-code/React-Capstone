import { configureStore } from '@reduxjs/toolkit';
import stockslice from './Stock-data/stock';
import ICslice from './Stock-data/IncomeStatement';

const store = configureStore({
    reducer: {
        stock: stockslice.reducer,
        IncomeStatement: ICslice.reducer
    }
})

export default store;