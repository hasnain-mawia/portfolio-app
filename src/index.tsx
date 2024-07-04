import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Portfolio from './pages/portfolio';
import Aboutme from './pages/Aboutme';
import Testimonial from './pages/Testimonial';
import Contact from './pages/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:"Page not found",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/aboutme",
        element: <Aboutme/>,
      },
      {
        path: "/testimonial",
        element: <Testimonial/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
