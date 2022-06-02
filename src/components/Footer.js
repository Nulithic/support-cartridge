import { Typography, Container, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ background: "#ddd", display: "flex", justifyContent: "center" }}>
      <Container sx={{ textAlign: "center", margin: 2 }}>
        <Typography variant="body1">© SupportCartridge.com 2022. All Rights Reserved.</Typography>
      </Container>
    </Box>
  );
}
