import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  lastLogin: '',
  role: '',
  userId: '',
  accessToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {
        name,
        email,
        last_login: lastLogin,
        role,
        user_id: userId,
        accessToken,
      } = action.payload;
      Object.assign(state, {name, email, lastLogin, role, userId, accessToken});
    },
    resetUser: (state, action) => {
      Object.assign(state, initialState);
    },
  },
});

export const {setUser, resetUser} = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user;
export const selectCurrentToken = (state) => state.user.accessToken;
