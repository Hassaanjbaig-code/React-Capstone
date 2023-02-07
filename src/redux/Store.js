import { configureStore } from '@reduxjs/toolkit';
import stockslice from './Stock-data/stock';

export default configureStore({
    reducer: {
        stockslice,
    }
})
