import { userState } from '@/common/interface/userState';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const initialState: userState = {
  loading: false,
  error: null,
  users: [],
};

const API_URL = 'https://agros-fs-mini-test-be-production.up.railway.app/api';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    const res = response.data.data;
    console.log(res);
    return {
      users: res,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
});

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id: number) => {
    try {
      const response = await axios.delete(`${API_URL}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      toast.success(response.data.message);
      return {
        message: 'Delete Success',
      };
    } catch (error: any) {
      console.log(error);
      return {
        error: error.message,
      };
    }
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
