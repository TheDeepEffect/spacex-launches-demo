/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import GetLaunches from '../launch/services';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: [],
  reducers: {
    setNotification: (state, action) => [...state, { ...action.payload, id: uuidv4() }],
    removeNotification: (state, action) => state.filter((x) => x.id !== action.payload),
  },
  extraReducers: {
    [GetLaunches.rejected]: (state, action) => [...state, {
      id: uuidv4(),
      label: action.error.message,
      visible: true,
      type: 'danger',
    }],
  },
});

export const { setNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
