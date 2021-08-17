import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../oldproj/counter/counterSlice';
import sidebarReducer from "./sidebar/sidebarSlice"

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    sidebar:sidebarReducer
  },
});
