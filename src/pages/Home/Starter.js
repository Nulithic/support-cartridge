import { Stack, Grid, Card, CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import Section from "../../components/Section";
import CanonLogo from "../../assets/brands/Canon_Logo.svg";
import EpsonLogo from "../../assets/brands/Epson_Logo.svg";
import HPLogo from "../../assets/brands/HP_Logo.svg";
import OtherLogo from "../../assets/brands/Other_Logo.svg";

const brands = [
  { id: "hp", brand: "HP", logo: HPLogo },
  { id: "epson", brand: "Epson", logo: EpsonLogo },
  { id: "canon", brand: "Canon", logo: CanonLogo },
];

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  height: "6rem",
});

export default function Starter() {
  let navigate = useNavigate();

  const handleBrandLink = (brand) => {
    if (brand === "other") navigate("../support");
    else navigate(`../support/${brand}`);
  };

  return (
    <Section id="starter" title="Choose a brand to get started:">
      {brands.map((brand, index) => (
        <Grid item key={index} xs={1} sm={1} md={1}>
          <Card component={Stack} elevation={3} direction="column" justifyContent="center" sx={{ height: "10rem" }}>
            <CardActionArea onClick={() => handleBrandLink(brand.id)} sx={{ padding: "2rem" }}>
              <Img src={brand.logo} />
            </CardActionArea>
          </Card>
        </Grid>
      ))}
      <Grid item xs={1} sm={2} md={3}>
        <Card component={Stack} elevation={3} direction="column" justifyContent="center" sx={{ height: "10rem" }}>
          <CardActionArea onClick={() => handleBrandLink("other")} sx={{ padding: "2rem" }}>
            <Img src={OtherLogo} />
          </CardActionArea>
        </Card>
      </Grid>
    </Section>
  );
}
