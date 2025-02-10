import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/home/HomePage.jsx';
import DashboardPage from './routes/dashboard/dashboardPage.jsx';
import ChatPage from './routes/chat/Chatpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/dashboard",
    children: [
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/dashboard/chats/:id", element: <ChatPage /> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
