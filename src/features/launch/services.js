import { createAsyncThunk } from '@reduxjs/toolkit';
import GET from '../../helpers/httpServices';

const GetLaunches = createAsyncThunk(
  'launch/getLaunches',
  async () => {
    try {
      const data = await GET({ url: 'launches' });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
);
export default GetLaunches;
