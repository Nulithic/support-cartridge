import { Grid, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import splash from "../../assets/splash.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Splash() {
  return (
    <Container>
      <Grid container alignItems="center" justifyContent="center" spacing={5} sx={{ paddingTop: 2, paddingBottom: 5 }}>
        <Grid item container columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          <Grid item xs={12}>
            <Img src={splash}></Img>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              How can we help you?
            </Typography>
            <Typography variant="subtitle">We are happy to provide you with information and support for many common brands.</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
