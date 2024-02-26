import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/login'
import Register from './components/Register'


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  }, {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <div><div className=' m-5 p-2 rounded mt-8 border w-max mx-auto'>
      <h1 className=' text-center text-9xl'>404</h1>
      <h1 className='mt-2 text-4xl font-bold text-center' >page not found</h1>
    </div></div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
