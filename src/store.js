import { configureStore } from '@reduxjs/toolkit';
import users from './store/users/usersSlice';

export const store = configureStore({
  reducer: {
    users: users.reducer,
  },
});
