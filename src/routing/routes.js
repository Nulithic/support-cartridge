import { Navigate, useRoutes } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../pages/Home";
import Support from "../pages/Support";
import Brand from "../pages/Support/Brand";
import Error from "../pages/Error";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "/support",
      element: <Layout />,
      children: [
        { index: true, element: <Support /> },
        { path: ":brand", element: <Brand /> },
      ],
    },
    {
      path: "/error",
      element: <Layout />,
      children: [{ index: true, element: <Error /> }],
    },
    {
      path: "*",
      element: <Navigate to="/error" />,
    },
  ]);
}
