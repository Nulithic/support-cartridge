import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Navbar />
      <Grid item xs={12}>
        <Outlet />
      </Grid>
      <Grid item xs={12} alignSelf="flex-end">
        <Footer />
      </Grid>
    </Grid>
  );
}
