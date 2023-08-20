import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/redux/features/authSlice';
import userReducer from '@/redux/features/userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
