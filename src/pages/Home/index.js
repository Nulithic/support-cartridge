import { Grid, useMediaQuery } from "@mui/material";

import Splash from "./Splash";
import Starter from "./Starter";
import FAQ from "./FAQ";
import Tips from "./Tips";
import Contact from "./Contact";

import gradient from "../../assets/gradient.jpg";

export default function Home() {
  const matches = useMediaQuery("(min-width:900px)");

  const containerStyle = {
    backgroundImage: `url(${gradient})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <>
      <Grid container justifyContent="center" sx={containerStyle}>
        <Grid item xs={12} padding={matches ? "5rem" : "2rem 0rem"}>
          <Splash />
        </Grid>
        <Grid item xs={12} padding={matches ? "5rem" : "2rem 0rem"} sx={{ backgroundColor: "#fcfcfc" }}>
          <Starter />
        </Grid>
        <Grid item xs={12} padding={matches ? "5rem" : "2rem 0rem"} sx={{ backgroundColor: "#ebf8f4" }}>
          <Tips />
        </Grid>
        <Grid item xs={12} padding={matches ? "5rem" : "2rem 0rem"} sx={{ backgroundColor: "#fcfcfc" }}>
          <FAQ />
        </Grid>
        <Grid item xs={12} padding={matches ? "5rem" : "2rem 0rem"} sx={{ backgroundColor: "#ebf8f4" }}>
          <Contact />
        </Grid>
      </Grid>
    </>
  );
}
