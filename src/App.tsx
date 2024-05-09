import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { SearchAppBar } from "./components/navBar/Navbar";
import { ArtworkDetailCard } from "./pages/ArtworkDetailPage";
import { SearchPage } from "./pages/SearchPage"; // Import the SearchPage component
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { DepartmentArtworkListPage } from "./pages/DepartmentArtworkListPage";
import { SearchAdvancedPage } from "./pages/SearchAdvancedPage";



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
        { path: "/", element: <HomePage/> },
        { path: "/department/:departmentId", element: <DepartmentArtworkListPage /> },
        { path: "/:ArtworkId", element: <ArtworkDetailCard /> },
        {path: "/search/:searchTerm", element: <SearchPage />},
        {path: "/searchAdvanced/:query", element: <SearchAdvancedPage />}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
