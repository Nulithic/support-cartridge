import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  Stack,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import navbar from "../../routing/navbar";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(false);

  const toggleDrawer = () => {
    setAnchorElNav((prev) => !prev);
  };

  return (
    <Stack>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              Support Cartridge
            </Typography>

            <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" onClick={toggleDrawer} color="inherit">
                <MenuIcon />
              </IconButton>

              <Drawer anchor="top" open={anchorElNav} onClose={toggleDrawer}>
                <Box sx={{ width: "auto" }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                  <List>
                    {navbar.map((page, index) => (
                      <Box key={page.id}>
                        <ListItem>
                          <ListItemButton component={NavLink} to={page.path}>
                            <ListItemText primary={page.title} />
                          </ListItemButton>
                        </ListItem>
                        {index + 1 !== navbar.length ? <Divider /> : null}
                      </Box>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Box>

            <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
              Support Cartridge
            </Typography>

            <Stack direction="row" spacing={2} sx={{ flexGrow: 1, justifyContent: "flex-end", display: { xs: "none", md: "flex" } }}>
              {navbar.map((page) => (
                <NavLink key={page.id} to={page.path} style={{ textDecoration: "none" }}>
                  {({ isActive }) => (
                    <Typography variant="body" sx={{ color: "white", textDecorationLine: isActive ? "underline" : "none" }}>
                      {page.title}
                    </Typography>
                  )}
                </NavLink>
              ))}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{ display: "flex", padding: "24px" }}>
        <Outlet />
      </Container>
    </Stack>
  );
}
