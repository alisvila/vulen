import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: ['admin'], // TODO: change to guest or something
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setUserRole } = userSlice.actions;
export default userSlice.reducer;
