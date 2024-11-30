import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from './components/pages/Home';
import {Allpost} from './components/pages/Allpost';
import {Addpost} from './components/pages/Addpost';
import {Register} from './components/pages/Register';
import {Login} from './components/pages/Login';
import {Userwritepage} from './components/pages/Userwritepage';
import MainLayout from './components/layouts/MainLayout';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/allpost',
        element: <Allpost />
      },
      {
        path: '/:slug',
        element: <Addpost />
      },
      {
        path: '/userwrite',
        element: <Userwritepage />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
);
