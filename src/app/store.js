import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from '../features/studentsSlice'
import sidebarReducer from '../features/sidebarSlice'

export const store = configureStore({
  reducer: {
    students: studentsReducer,
    sidebar: sidebarReducer
  },
});
