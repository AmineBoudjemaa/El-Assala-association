import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from '../features/studentsSlice'
import categoriesReducer from '../features/categoriesSlice'

export const store = configureStore({
  reducer: {
    students: studentsReducer,
    categories: categoriesReducer
  },
});
