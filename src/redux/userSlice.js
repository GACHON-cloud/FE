import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  accessToken: null,
  userId: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.userId = null;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { login, logout, setUserId } = userSlice.actions;
export default userSlice.reducer;
