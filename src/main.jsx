import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import Chat from './components/Chat.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainOutlet from './components/MainOutlet'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet />,
    errorElement: <div>Page not found: ERROR 404</div>
  },
  {
    path: "/main",
    element: <Chat></Chat>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
