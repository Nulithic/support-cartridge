import { Box, useMediaQuery } from "@mui/material";

import Brands from "./Brands";
import FAQ from "./FAQ";
import Tips from "./Tips";
import Contact from "./Contact";

export default function Home() {
  const matches = useMediaQuery("(min-width:900px)");

  const Wrapper = ({ background, children }) => {
    return <Box sx={{ background: background, padding: matches ? "100px" : "20px 00px 20px 0px" }}>{children}</Box>;
  };

  return (
    <>
      <Wrapper background={"#f6f6fe"}>
        <Brands />
      </Wrapper>
      <Wrapper background={"#ffffff"}>
        <Tips />
      </Wrapper>
      <Wrapper background={"#f6f6fe"}>
        <FAQ />
      </Wrapper>
      <Wrapper background={"#ffffff"}>
        <Contact />
      </Wrapper>
    </>
  );
}
