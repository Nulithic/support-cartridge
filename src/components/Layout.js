import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "#ebf8f4", minHeight: "calc(100vh - 80px)" }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
