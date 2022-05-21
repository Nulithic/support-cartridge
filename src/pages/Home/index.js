import { Box, useMediaQuery } from "@mui/material";

import Splash from "./Splash";
import Starter from "./Starter";
import FAQ from "./FAQ";
import Tips from "./Tips";
import Contact from "./Contact";

import gradient from "../../assets/gradient.jpg";

const pages = [<Starter />, <Tips />, <FAQ />, <Contact />];

export default function Home() {
  const matches = useMediaQuery("(min-width:900px)");

  const boxStyle = {
    backgroundImage: `url(${gradient})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundAttachment: "fixed",
    padding: matches ? "50px" : "20px 00px 20px 0px",
  };

  return (
    <>
      <Box sx={boxStyle}>
        <Splash />
      </Box>
      {pages.map((page, index) => (
        <Box key={index} sx={{ background: "none", padding: matches ? "50px" : "20px 00px 20px 0px" }}>
          {page}
        </Box>
      ))}
    </>
  );
}
