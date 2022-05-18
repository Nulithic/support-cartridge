import { Box, useMediaQuery } from "@mui/material";

import Brands from "./Brands";
import FAQ from "./FAQ";
import Tips from "./Tips";
import Contact from "./Contact";

export default function Home() {
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <>
      <Box sx={{ background: "#f6f6fe", padding: matches ? "100px" : "20px 00px 20px 0px" }}>
        <Brands />
      </Box>
      <Box sx={{ padding: matches ? "100px" : "20px 00px 20px 0px" }}>
        <Tips />
      </Box>
      <Box sx={{ background: "#f6f6fe", padding: matches ? "100px" : "20px 00px 20px 0px" }}>
        <FAQ />
      </Box>
      <Box sx={{ padding: matches ? "100px" : "20px 00px 20px 0px" }}>
        <Contact />
      </Box>
    </>
  );
}
