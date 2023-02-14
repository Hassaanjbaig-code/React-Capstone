import { createAction, createReducer } from '@reduxjs/toolkit';

export const senddata = createAction('Capstone/Redux/Show-Stock');

const initialState = {
  data: {},
};

const stockreducer = createReducer(initialState, (builder) => {
  builder.addCase(senddata, (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state.data = action.payload;
  });
});

export default stockreducer;
