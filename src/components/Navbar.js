import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Stack, Box, AppBar, Toolbar, IconButton, Typography, Container, Drawer, List, Divider, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import links from "../routing/links";

export default function Navbar() {
  const [drawerState, setDrawState] = useState(false);

  const toggleDrawer = () => {
    setDrawState((prev) => !prev);
  };

  return (
    <AppBar position="static" sx={{ zIndex: 1 }}>
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            Support Cartridge
          </Typography>

          <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={toggleDrawer} color="inherit">
              <MenuIcon />
            </IconButton>

            <Drawer anchor="top" open={drawerState} onClose={toggleDrawer}>
              <Box sx={{ width: "auto" }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                <List>
                  {links.map((page, index) => (
                    <Box key={page.id}>
                      <ListItem>
                        <ListItemButton component={NavLink} to={page.path}>
                          <ListItemText primary={page.title} />
                        </ListItemButton>
                      </ListItem>
                      {index + 1 !== links.length ? <Divider /> : null}
                    </Box>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>

          <Typography variant="h5" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            Support Cartridge
          </Typography>

          <Stack direction="row" spacing={2} sx={{ flexGrow: 1, justifyContent: "flex-end", display: { xs: "none", md: "flex" } }}>
            {links.map((page) => (
              <NavLink key={page.id} to={page.path} style={{ textDecoration: "none", color: "white" }}>
                {({ isActive }) => (
                  <Typography variant="body" sx={{ textDecorationLine: isActive ? "underline" : "none" }}>
                    {page.title}
                  </Typography>
                )}
              </NavLink>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
