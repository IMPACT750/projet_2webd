import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { ArtworkListPage } from './pages/ArtworkListPage'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:(
      <>
       <Outlet />
       </>),
      errorElement: <div>page non trouve</div>,

      children: [
        { path: '/', element: <ArtworkListPage /> },
        { path: 'about', element: <p>test</p> },
        { path: 'contact', element: <p>test</p>  },
      ]
    }

  ])

  return <RouterProvider router={router} />
}

export default App
