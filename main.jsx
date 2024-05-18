import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from './routes/Home';
import Countdown from './routes/Countdown';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
    {
      path: "/",
      Element: <Home />,
    },
    {
      path: "/countdown",
      Element: <Countdown />,
    },
  ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
