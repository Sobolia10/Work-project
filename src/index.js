import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const initialState = {
  count: 0,
}

// action = { type: 'ACTION_TYPE', payload: dataForStore }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, count: state.count + action.payload }
      // { count: 0 }                0      +      66
    case "REMOVE_DATA":
      return { ...state, count: state.count - action.payload }
    default:
      return state;
  }
}

const store = configureStore({reducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
