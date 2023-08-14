import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import Chat from './components/Chat.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainOutlet from './components/MainOutlet'
import Home from './components/Home'
import UserPage from './components/UserPage'
import { loader as userLoader } from "./components/UserPage";
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet />,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [{
      path: ":userName",
      element: <UserPage></UserPage>,
      loader: userLoader,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>,
    }
  ]},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
