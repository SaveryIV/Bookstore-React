import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesQuantity: [],
  status: 'Under Construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateStatus: (state) => {
      state.status = 'Under Construction';
    },
  },
});

export const { updateStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
