import { Box, AppBar, Toolbar, Typography, Container, Stack, Link } from "@mui/material";
import navbar from "../../routing/navbar";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <Stack>
      <AppBar position="static">
        <Container maxWidth={false}>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography variant="h4">Support Cartridge</Typography>
            <Stack direction="row" spacing={2}>
              {navbar.map((page) => (
                <Link key={page.id} href={page.path}>
                  <Typography variant="body" sx={{ color: "white" }}>
                    {page.title}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ display: "flex", padding: "24px" }}>
        <Outlet />
      </Box>
    </Stack>
  );
}
