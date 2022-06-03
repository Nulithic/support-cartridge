import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const theme = useTheme();

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", alignItems: "center", background: theme.palette.gradients.gradientOne, minHeight: "calc(100vh - 80px)" }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
