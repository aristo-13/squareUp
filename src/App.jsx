import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import Process from './pages/Process'
import About from './pages/About'
import Careers from './pages/Careers'

function App() {
 const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children:[
          {
            index: true,
            element: <Home />
          },
          {
            path: "services",
            element: <Services />
          },
          {
            path: "work",
            element: <Work />
          },
          {
            path: "process",
            element: <Process />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path: "careers",
            element: <Careers />
          },
       ]
    }
  ]
 )
 

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
