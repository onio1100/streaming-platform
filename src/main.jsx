import React from 'react'
import ReactDOM from 'react-dom/client'
import Chat from './components/Chat.jsx'
import "./style.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat />,
    errorElement: <div>Page not found: ERROR 404</div>
  },
  {
    path: "/main",
    element: <div>elo elo w main</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Chat /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
