import { useEffect, useState } from "react";
import { Typography, Card, CardActionArea, CardContent, Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useParams, useNavigate } from "react-router-dom";

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

export default function Brand() {
  let navigate = useNavigate();
  const { brand } = useParams();

  const [brandObject, setBrandObject] = useState({});
  const [supportList, setSupportList] = useState([]);

  const handleModelLink = (model) => {
    navigate(`../${brand}/${model}`);
  };

  const handleChange = (event) => {
    let filtered = brandObject.support.filter((obj) => obj.Product_Description.includes(event.target.value.toUpperCase()));
    setSupportList(filtered);
  };

  useEffect(() => {
    const obj = brands.filter((item) => item.id === brand);
    setBrandObject(obj[0]);
  }, [brand]);

  useEffect(() => {
    if (brandObject.support !== undefined) setSupportList(brandObject.support);
  }, [brandObject.support]);

  const CardView = () => {
    if (supportList.length > 0) {
      return (
        <Grid container item xs={12} spacing={2} justifyContent="center">
          {supportList.length > 0 ? (
            supportList.map((item, key) => (
              <Grid item key={key} xs={12}>
                <Card>
                  <CardActionArea onClick={() => handleModelLink(item.PID)}>
                    <CardContent>
                      <Typography variant="h5">{item.Product_Description}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h5" paddingTop={2}>
              Coming Soon
            </Typography>
          )}
        </Grid>
      );
    } else return null;
  };

  return (
    <Section>
      <Grid item xs={12}>
        <Img src={brandObject.logo} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Search" onChange={handleChange} />
      </Grid>
      <CardView />
    </Section>
  );
}
