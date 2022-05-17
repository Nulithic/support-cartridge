import { Navigate, useRoutes } from "react-router-dom";

import Navbar from "../components/Navbar";

import Home from "../pages/Home";
import Support from "../pages/Support";
import Recycle from "../pages/Recycle";
import FAQ from "../pages/FAQ";
import Error from "../pages/Error";
import Contact from "../pages/Contact";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navbar />,
      children: [{ path: "/", element: <Home /> }],
    },
    {
      path: "/support",
      element: <Navbar />,
      children: [{ index: true, element: <Support /> }],
    },
    {
      path: "/faq",
      element: <Navbar />,
      children: [{ index: true, element: <FAQ /> }],
    },
    {
      path: "/recycle",
      element: <Navbar />,
      children: [{ index: true, element: <Recycle /> }],
    },
    {
      path: "/contact",
      element: <Navbar />,
      children: [{ index: true, element: <Contact /> }],
    },
    {
      path: "/error",
      element: <Navbar />,
      children: [{ index: true, element: <Error /> }],
    },
    {
      path: "*",
      element: <Navigate to="/error" />,
    },
  ]);
}
