import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'

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
          }
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
