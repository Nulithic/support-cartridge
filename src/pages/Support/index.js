import { Stack, Grid, Card, CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import Section from "../../components/Section";
import BrotherLogo from "../../assets/brands/Brother_Logo.svg";
import CanonLogo from "../../assets/brands/Canon_Logo.svg";
import EpsonLogo from "../../assets/brands/Epson_Logo.svg";
import HPLogo from "../../assets/brands/HP_Logo.svg";
import LexmarkLogo from "../../assets/brands/Lexmark_Logo.svg";
import DellLogo from "../../assets/brands/Dell_Logo.svg";
import SamsungLogo from "../../assets/brands/Samsung_Logo.svg";
import KodakLogo from "../../assets/brands/Kodak_Logo.svg";

const brands = [
  { id: "hp", brand: "HP", logo: HPLogo },
  { id: "epson", brand: "Epson", logo: EpsonLogo },
  { id: "canon", brand: "Canon", logo: CanonLogo },
  { id: "brother", brand: "Brother", logo: BrotherLogo },
  { id: "lexmark", brand: "Lexmark", logo: LexmarkLogo },
  { id: "dell", brand: "Dell", logo: DellLogo },
  { id: "samsung", brand: "Samsung", logo: SamsungLogo },
  { id: "kodak", brand: "Kodak", logo: KodakLogo },
];

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  height: "6rem",
});

export default function Support() {
  let navigate = useNavigate();

  const handleBrandLink = (brand) => {
    navigate(`../${brand}`);
  };

  return (
    <Section title="Choose a brand to get started:">
      {brands.map((brand, index) => (
        <Grid item key={index} xs={1} sm={1} md={1}>
          <Card component={Stack} elevation={3} direction="column" justifyContent="center" sx={{ height: "10rem" }}>
            <CardActionArea onClick={() => handleBrandLink(brand.id)} sx={{ padding: "2rem" }}>
              <Img src={brand.logo} />
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Section>
  );
}
