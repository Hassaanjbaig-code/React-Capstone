import { configureStore } from '@reduxjs/toolkit';
import stockslice from './Stock-data/stock';
import ICslice from './Stock-data/IncomeStatement';
import stockreducer from './Stock-data/Storestock';

const store = configureStore({
  reducer: {
    stock: stockslice.reducer,
    IncomeStatement: ICslice.reducer,
    boxStock: stockreducer,
  },
});

export default store;
