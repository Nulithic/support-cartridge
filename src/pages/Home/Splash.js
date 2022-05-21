import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Section from "../../components/Section";

import splash from "../../assets/splash.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Splash() {
  return (
    <Section id="splash" title="">
      <Grid item xs={12}>
        <Img src={splash}></Img>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h3">How can we help you?</Typography>

        <Typography variant="subtitle">We have the information and support for many common brands.</Typography>
      </Grid>
    </Section>
  );
}
