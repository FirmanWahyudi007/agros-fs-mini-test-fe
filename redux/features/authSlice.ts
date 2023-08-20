import { AuthState } from '@/common/interface/authState';
import { loginType, registerType } from '@/common/types/auth';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
  token: undefined,
  isLogin: false,
};

const API_URL = 'https://agros-fs-mini-test-be-production.up.railway.app/api';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: loginType) => {
    try {
      const response = await axios.post(`${API_URL}/login`, data);
      const res = response.data.data;
      console.log(res);
      localStorage.setItem('token', res.token.access_token);
      localStorage.setItem('user', JSON.stringify(res.user));

      const bearerToken = `Bearer ${res.token.access_token}`;
      console.log(bearerToken);
      return {
        user: res.user,
        bearerToken,
      };
    } catch (error: any) {
      return {
        error: error.message,
        data: error.data ? error.data : null,
      };
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data: registerType) => {
    try {
      await axios.post(`${API_URL}/register`, data);
      return {
        message: 'Register Success',
      };
    } catch (error: any) {
      return {
        error: error.message,
        data: error.data ? error.data : null,
      };
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  try {
    const token = localStorage.getItem('token');
    console.log(token);
    const response = await axios.get(API_URL + '/logout', {
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    return {
      message: response.data.message,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload.user;
        state.token = action.payload.bearerToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = 'idle';
        state.user = null;
        state.token = undefined;
        state.isLogin = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = 'idle';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setIsLogin } = authSlice.actions;

export default authSlice.reducer;
