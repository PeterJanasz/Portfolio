// Importing necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Importing Font Awesome styles
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importing routing-related dependencies from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing page components for different routes
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume.jsx';
//import Error from './pages/Error';

// Define the accessible routes and corresponding components
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, // Note: Error component is commented out and not imported
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        index: true,
        path: '/About',
        element: <About />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

// Rendering the application with the router provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
