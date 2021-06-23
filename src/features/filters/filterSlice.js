import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    search: {
      searchParameter: 'ROCKET_NAME',
      searchQuery: '',
    },
    dateFilter: 'ALL',
    statusFilter: 'ALL',
    isUpcoming: null,
  },
  reducers: {
    setSearch: (state, action) => {
      const { payload: { parameter = 'ROCKET_NAME', query } } = action;
      return {
        ...state,
        search: {
          searchParameter: parameter,
          searchQuery: query,
        },
      };
    },
    setDateFilter: (state, action) => {
      const { payload = 'ALL' } = action;
      return {
        ...state,
        dateFilter: payload,
      };
    },
    setStatusFilter: (state, action) => {
      const { payload = 'ALL' } = action;
      return {
        ...state,
        statusFilter: payload,
      };
    },
    setIsUpcoming: (state, action) => {
      const { payload = null } = action;
      return {
        ...state,
        isUpcoming: payload,
      };
    },
  },
});

export const {
  setSearch, setDateFilter, setStatusFilter, setIsUpcoming,
} = filterSlice.actions;

export default filterSlice.reducer;
