import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,

      children: [
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
      ],
    },

  ])

  return <RouterProvider router={router} />
}

export default App
