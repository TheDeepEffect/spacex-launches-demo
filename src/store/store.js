import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../features/filters/filterSlice';
import launchSlice from '../features/launch/launchSlice';
import notificationSlice from '../features/notifications/notificationSlice';

export default configureStore({
  reducer: {
    launch: launchSlice,
    filters: filterSlice,
    notifications: notificationSlice,
  },
});
