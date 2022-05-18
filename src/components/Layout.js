import { Outlet } from "react-router-dom";
import { Stack, Box, useMediaQuery } from "@mui/material";

import Navbar from "./Navbar";
// import Background from "../assets/background.jpg";

export default function Layout() {
  const matches = useMediaQuery("(min-width:600px)");

  const backgroundStyle = {
    height: matches ? "calc(100vh - 64px)" : "calc(100vh - 56px)",
    // backgroundImage: `url(${Background})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundAttachment: "fixed",
  };
  return (
    <Stack>
      <Navbar />
      <Box sx={backgroundStyle}>
        <Outlet />
      </Box>
    </Stack>
  );
}
