import { configureStore } from '@reduxjs/toolkit';
import launchSlice from '../features/launch/launchSlice';

export default configureStore({
  reducer: {
    launch: launchSlice,
  },
});
