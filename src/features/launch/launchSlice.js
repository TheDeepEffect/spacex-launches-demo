/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import GetLaunches from './services';

const launchSlice = createSlice({
  name: 'launch',
  initialState: {
    launches: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [GetLaunches.pending]: (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [GetLaunches.fulfilled]: (state, action) => {
      state.launches = action.payload;
      state.loading = false;
    },
    [GetLaunches.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});
export default launchSlice.reducer;
