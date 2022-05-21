import { Stack, Grid, Card, CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import Section from "../../components/Section";
import BrotherLogo from "../../assets/brands/Brother_logo.svg";
import CanonLogo from "../../assets/brands/Canon_logo.svg";
import EpsonLogo from "../../assets/brands/Epson_logo.svg";
import HPLogo from "../../assets/brands/HP_logo.svg";
import LexmarkLogo from "../../assets/brands/Lexmark_logo.svg";
import OtherLogo from "../../assets/brands/Other_logo.svg";

const brands = [
  { id: "hp", brand: "HP", logo: HPLogo },
  { id: "epson", brand: "Epson", logo: EpsonLogo },
  { id: "canon", brand: "Canon", logo: CanonLogo },
  { id: "brother", brand: "Brother", logo: BrotherLogo },
  { id: "lexmark", brand: "Lexmark", logo: LexmarkLogo },
  { id: "other", brand: "Other", logo: OtherLogo },
];

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
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
            <CardActionArea onClick={() => handleBrandLink(brand.id)} sx={{ padding: 7 }}>
              <Img src={brand.logo} />
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Section>
  );
}
