import { useEffect, useState } from "react";
import { Typography, Card, CardActionArea, CardContent, Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";

import Section from "../../components/Section";

import BrotherLogo from "../../assets/brands/Brother_Logo.svg";
import CanonLogo from "../../assets/brands/Canon_Logo.svg";
import EpsonLogo from "../../assets/brands/Epson_Logo.svg";
import HPLogo from "../../assets/brands/HP_Logo.svg";
import LexmarkLogo from "../../assets/brands/Lexmark_Logo.svg";
import DellLogo from "../../assets/brands/Dell_Logo.svg";
import SamsungLogo from "../../assets/brands/Samsung_Logo.svg";
import KodakLogo from "../../assets/brands/Kodak_Logo.svg";

import HPSupport from "../../api/HP.json";
import EpsonSupport from "../../api/Epson.json";
import CanonSupport from "../../api/Canon.json";

const brands = [
  { id: "hp", brand: "HP", logo: HPLogo, support: HPSupport },
  { id: "epson", brand: "Epson", logo: EpsonLogo, support: EpsonSupport },
  { id: "canon", brand: "Canon", logo: CanonLogo, support: CanonSupport },
  { id: "brother", brand: "Brother", logo: BrotherLogo, support: [] },
  { id: "lexmark", brand: "Lexmark", logo: LexmarkLogo, support: [] },
  { id: "dell", brand: "Dell", logo: DellLogo, support: [] },
  { id: "samsung", brand: "Samsung", logo: SamsungLogo, support: [] },
  { id: "kodak", brand: "Kodak", logo: KodakLogo, support: [] },
];

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  height: "8rem",
});

export default function Model() {
  const { brand, model } = useParams();

  const [modelObject, setModelObject] = useState({});

  useEffect(() => {
    const brandsObj = brands.filter((item) => item.id === brand);
    const modelObj = brandsObj[0].support.filter((item) => item.PID.toString() === model);
    setModelObject(modelObj[0]);
  }, [brand, model]);

  return (
    <Box sx={{ backgroundColor: "#ebf8f4" }}>
      <Section>
        <Grid item xs={12}>
          {/* <Img src={brandsObj[0].logo} /> */}
          <Typography>{modelObject["Product Description"]}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{modelObject.FAQ1}</Typography>
          <Typography>{modelObject.Solution1}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{modelObject.FAQ2}</Typography>
          <Typography>{modelObject.Solution2}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{modelObject.FAQ3}</Typography>
          <Typography>{modelObject.Solution3}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{modelObject.FAQ4}</Typography>
          <Typography>{modelObject.Solution4}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{modelObject.FAQ5}</Typography>
          <Typography>{modelObject.Solution5}</Typography>
        </Grid>
      </Section>
    </Box>
  );
}
