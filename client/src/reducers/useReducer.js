import { createReducer, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { profileActionTypes } from '../constants';

export const initialState = {
  counter: 0,
  profile: {
    name: 'Koushik',
    age: 50,
    status: 'active',
  },
};
export const fetchUserName = createAsyncThunk('fetchUserName', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data[Math.floor(Math.random() * data.length - 1)].name;
});
export const profileReducer = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.profile.name = action.payload;
    },
    updateAge: (state, action) => {
      state.profile.age = action.payload;
    },
    updateStatus: (state, action) => {
      state.profile.status = action.payload;
    },
  },
  extraReducers: {
    [fetchUserName.fulfilled]: (state, action) => {
      state.profile.name = action.payload;
    },
    [fetchUserName.pending]: (state) => {
      state.profile.name = 'Loading...';
    },
    [fetchUserName.rejected]: (state) => {
      state.profile.name = 'try again later!';
    },
  },
});

export const { updateName, updateAge, updateStatus } = profileReducer.actions;
export const profileReducerFn = profileReducer.reducer;

export const baseReducer = createReducer(initialState, (builder) => {
  builder.addCase(profileActionTypes.UPDATE_AGE, (state, action) => {
    state.profile.age = action.payload;
  });
  builder.addCase(profileActionTypes.UPDATE_NAME, (state, action) => {
    state.profile.name = action.payload;
  });
  builder.addCase(profileActionTypes.UPDATE_STATUS, (state, action) => {
    state.profile.status = action.payload;
  });
});
