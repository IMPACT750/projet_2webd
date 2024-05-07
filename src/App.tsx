import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ArtworkListPage } from "./pages/ArtworkListPage";
import { SearchAppBar } from "./components/Navbar";
import { ArtworkDetailCard } from "./pages/ArtworkDetailPage";
import { SearchPage } from "./pages/SearchPage"; // Import the SearchPage component
import "./App.css";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <SearchAppBar />
          <Outlet />
        </>
      ),
      errorElement: <div>Page non trouvée</div>,
      children: [
        { path: "/", element: <ArtworkListPage /> },
        { path: "/:ArtworkId", element: <ArtworkDetailCard /> },
        {path: "/search/:searchTerm", element: <SearchPage />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
