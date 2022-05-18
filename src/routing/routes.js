import { Navigate, useRoutes } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../pages/Home";
import Support from "../pages/Support";
import Recycle from "../pages/Home/Recycle";
import FAQ from "../pages/Home/FAQ";
import Error from "../pages/Error";
import Contact from "../pages/Home/Contact";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
    },
    {
      path: "/support",
      element: <Layout />,
      children: [{ index: true, element: <Support /> }],
    },
    {
      path: "/faq",
      element: <Layout />,
      children: [{ index: true, element: <FAQ /> }],
    },
    {
      path: "/recycle",
      element: <Layout />,
      children: [{ index: true, element: <Recycle /> }],
    },
    {
      path: "/contact",
      element: <Layout />,
      children: [{ index: true, element: <Contact /> }],
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
