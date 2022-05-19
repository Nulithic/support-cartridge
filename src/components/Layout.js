import { Outlet } from "react-router-dom";
// import { Box, useMediaQuery } from "@mui/material";

import Navbar from "./Navbar";
import Footer from "./Footer";
// import Background from "../assets/background.jpg";

export default function Layout() {
  // const matches = useMediaQuery("(min-width:600px)");

  // const backgroundStyle = {
  //   height: matches ? "calc(100vh - 64px)" : "calc(100vh - 56px)",
  //   backgroundImage: `url(${Background})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundAttachment: "fixed",
  // };

  return (
    <>
      <Navbar />
      {/* <Box sx={backgroundStyle}> */}
      <Outlet />
      {/* </Box> */}
      <Footer />
    </>
  );
}
