import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import store from "./store/store.js";
import { RouterProvider } from 'react-router-dom';
import {routes } from "./routes";
import App from './App.js';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <RouterProvider router={routes} /> */}
    <App />
    </Provider>
  </React.StrictMode>
)
