import { Typography, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box sx={{ background: theme.palette.primary.main, display: "flex", justifyContent: "center" }}>
      <Container sx={{ textAlign: "center", margin: 2 }}>
        <Typography variant="body1">© SupportCartridge.com 2022. All Rights Reserved.</Typography>
      </Container>
    </Box>
  );
}
