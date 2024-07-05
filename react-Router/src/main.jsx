import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
// const router=createBrowserRouter([{
//   path:'/',
//   element:<App/>,
//   children:[{
//      path:'/',
//      element:<Home/>
     
//   },
//   {
//     path:'/about',
//     element:<About/>
//   },
//   {
//     path:'/contact',
//     element:<Contact/>
//   }
// ]
// }])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
              <Route path='' element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='contact/:id' element={<Contact/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>

)
