import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Success from './Success.jsx';
import Cancel from './Cancel.jsx';
import LoginSignup from './LoginSignup.jsx';
import Popular from "./Popular.jsx"
import Frontpage from './Frontpage.jsx';
const router = createBrowserRouter([{
  path:"/",
  element: <Frontpage/>
},
{
  path:"/Signin",
  element: <Popular/>
},
{
  path:"/Signup",
  element: <Popular/>
},
{
  path:"/login",
  element: <LoginSignup/>
},
{
  path: "/Popular",
  element: <Popular/>
},
{
  path: "/Dashboard",
  element: <App/>
},
{
  path: "/success",
  element: <Success/>
},{
  path: "/cancel",
  element: <Cancel/>
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
