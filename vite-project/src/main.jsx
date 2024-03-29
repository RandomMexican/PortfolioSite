import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "./index.css"

import Root from './Components/Root.jsx'
import Home from './Components/Home.jsx'
import Resume from './Components/Resume.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
import NotFound from './Components/NotFound.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    children: [
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"/Resume",
        element: <Resume/>,
      },
      {
        path:"/Portfolio",
        element: <Projects/>,
      },
      {
        path:"/Contact",
        element: <Contact/>,
      },
      {
        path:"*",
        element: <NotFound/>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
