import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import Chat from './components/Chat.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainOutlet from './components/MainOutlet'
import Home from './components/Home'
import UserPage from './components/UserPage'
import { loader as userLoader } from "./components/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet />,
    errorElement: <div>Page not found: ERROR 404</div>,
    children: [{
      path: ":userName",
      element: <UserPage></UserPage>,
      loader: userLoader,
    },]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
