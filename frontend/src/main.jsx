import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Homepage from './routes/homepage/Homepage.jsx';
import DashboardPage from './routes/dashBoardPage/DashboardPage.jsx';
import ChatPage from './routes/chatPage/ChatPage.jsx';
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import Dashboard from './layouts/dashboardPage/Dashboard.jsx'
const router = createBrowserRouter([
  {
   
    element: <RootLayout />,
    children:[{path:"/",element:<Homepage/>}]
  },
   {
    element:<Dashboard/>,
    children:[{path:"/dashboard",element:<DashboardPage/>},
      {path:"/dashboard/chats/:id",element:<ChatPage/>}]
   }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
    {/* <ChatPage /> */}
    {/* <RootLayout /> */}
  </React.StrictMode>
);
