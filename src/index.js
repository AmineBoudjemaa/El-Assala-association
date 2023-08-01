import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchStudents } from './features/studentsSlice';
import { fetchCategories } from './features/categoriesSlice';

store.dispatch(fetchStudents());
store.dispatch(fetchCategories());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);