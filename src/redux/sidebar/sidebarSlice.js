import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPlaying: true,
    messages: [],
  };

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    message: (state, action) => {
      state.messages.push(action.payload);
    },
    setSidebarStatus: (state,action)=>{
        state.isPlaying=action.payload
    }
  }
});

export const { message,setSidebarStatus } = sidebarSlice.actions;
export const selectIsPLaying = (state) => state.sidebar.isPlaying;
export const selectMessages = state=>state.sidebar.messages;
export default sidebarSlice.reducer;
