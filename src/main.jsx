import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/home';
import HomeAfter from './pages/HomeAfter/HomeAfter';
import BillingPage from './pages/Billing/BillingPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/homeafter',
    element: <HomeAfter />
  },
  {
    path: '/bill',
    element: <BillingPage/>
    
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


