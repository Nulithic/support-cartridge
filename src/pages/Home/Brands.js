import { Stack, Typography, Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import BrotherLogo from "../../assets/brands/Brother_logo.svg";
import CanonLogo from "../../assets/brands/Canon_logo.svg";
import EpsonLogo from "../../assets/brands/Epson_logo.svg";
import HPLogo from "../../assets/brands/HP_logo.svg";
import LexmarkLogo from "../../assets/brands/Lexmark_logo.svg";
import OtherLogo from "../../assets/brands/Other_logo.svg";

const brands = [HPLogo, EpsonLogo, CanonLogo, BrotherLogo, LexmarkLogo, OtherLogo];

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Brands() {
  return (
    <Container sx={{ background: "transparent" }}>
      <Grid container alignItems="center" spacing={6}>
        <Grid item>
          <Typography variant="h4">Choose a brand to get started:</Typography>
        </Grid>
        <Grid item container columns={{ xs: 1, sm: 8, md: 12 }} spacing={2}>
          {brands.map((item, index) => (
            <Grid item key={index} xs={1} sm={4} md={4}>
              <Paper component={Stack} elevation={3} direction="column" justifyContent="center" sx={{ height: "10rem", padding: 5 }}>
                <Img alt="complex" src={item} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
