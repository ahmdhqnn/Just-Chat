import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/home/HomePage.jsx';
import DashboardPage from './routes/dashboard/DashboardPage.jsx';
import ChatPage from './routes/chat/ChatPage.jsx';
import RootLayout from './laylouts/rootLayout/RootLayout.jsx';
import DashboardLayout from './laylouts/dashboardLayout/DashboardLayout.jsx';
import SigninPage from './routes/signin/SigninPage.jsx';
import SignupPage from './routes/signup/SignupPage.jsx';


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/sign-in/*',
        element: <SigninPage />,
      },
      {
        path: '/sign-up',
        element: <SignupPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
