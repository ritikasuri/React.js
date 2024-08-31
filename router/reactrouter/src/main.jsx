import { Children,StrictMode } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import Home from './components/Home/home.jsx'
const router1=CreateBrowserRouter(
[  {path:"/",
  element:<App/>
 Children:[
  {
  
 }]
  }]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider  router={router1}/>
  </StrictMode>,
)
