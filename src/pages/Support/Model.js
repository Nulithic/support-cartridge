import { useEffect, useState } from "react";
<<<<<<< HEAD
import { Paper, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Divider } from "@mui/material";
=======
import { Paper, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Box, Divider } from "@mui/material";
>>>>>>> 84bcbc50ac69f1c2f23e5a645198223c59459e1f
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  height: "20rem",
});

export default function Model() {
  const { brand, model } = useParams();

  const [modelObject, setModelObject] = useState({});

  useEffect(() => {
    const brandsObj = brands.filter((item) => item.id === brand);
    const modelObj = brandsObj[0].support.filter((item) => item.PID.toString() === model);
    setModelObject(modelObj[0]);
  }, [brand, model]);

  const AccordionView = () => {
    if (modelObject.Troubleshooting !== undefined) {
      const troubleshooting = modelObject.Troubleshooting.filter((item) => item.Problem !== null);
      return (
        <>
          {troubleshooting.map((item, index) => (
            <Grid item key={index} xs={12}>
              <Accordion elevation={3}>
                <AccordionSummary component={Paper} expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{item.Problem}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography variant="body1" whiteSpace="pre-wrap">
                        {item.Solution}
                      </Typography>
                      <Divider sx={{ paddingY: 1 }} />
                    </Grid>

                    {item.Solution_Figure.map((pics, index) => (
                      <Grid item key={index}>
                        <Img src={`https://supportcartridge.com/img/${brand}/${pics}`} />
                        <Typography variant="body2">{`Figure ${index + 1}`}</Typography>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </>
      );
    } else return null;
  };

  return (
    <Section>
      <Grid item xs={12}>
        {/* <Img src={brandsObj[0].logo} /> */}
        <Typography variant="h4">{modelObject.Product_Description}</Typography>
      </Grid>
      <AccordionView />
    </Section>
  );
}
