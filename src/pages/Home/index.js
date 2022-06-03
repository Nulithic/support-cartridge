import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Splash from "./Splash";
import Starter from "./Starter";
import FAQ from "./FAQ";
import Tips from "./Tips";
import Contact from "./Contact";

const pages = [<Splash />, <Starter />, <Tips />, <FAQ />, <Contact />];

export default function Home() {
  const matches = useMediaQuery("(min-width:900px)");
  const theme = useTheme();

  return (
    <Grid container justifyContent="center" sx={{ background: theme.palette.gradients.gradientOne }}>
      {pages.map((page, index) => (
        <Grid key={index} item xs={12} padding={matches ? "5rem" : "2rem 0rem"}>
          {page}
        </Grid>
      ))}
    </Grid>
  );
}
