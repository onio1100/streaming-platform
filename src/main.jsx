import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import Chat from './components/Chat.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainOutlet from './components/MainOutlet'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet />,
    errorElement: <div>Page not found: ERROR 404</div>,
    // children: [{
    //   path: "home",
    //   element: <Home></Home>,
    // },]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
