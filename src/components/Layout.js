import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./Navbar";
import Footer from "./Footer";
// import Background from "../assets/background.jpg";

export default function Layout() {
  // const backgroundStyle = {
  //   backgroundImage: `url(${Background})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundAttachment: "fixed",
  // };

  return (
    <Box>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
}
