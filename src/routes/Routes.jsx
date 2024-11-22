import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Dashboard from "../pages/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home />, children: [] },

      { path: "/Products", element: <Products />, children: [] },

      { path: "/Dashboard", element: <Dashboard />, children: [] },
    ],
  },
]);
export default routes;
