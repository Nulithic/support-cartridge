import { useState, cloneElement } from "react";
import {
  Stack,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";

import links from "../routing/links";

export default function Navbar() {
  let navigate = useNavigate();
  let location = useLocation();

  const [drawerState, setDrawState] = useState(false);

  const toggleDrawer = () => {
    setDrawState((prev) => !prev);
  };

  const scrollToSection = (id) => {
    var element = document.getElementById(id);
    if (location.pathname !== "/") navigate("../");
    switch (id) {
      case "home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "support":
        navigate("../support");
        break;
      default:
        var position = element.getBoundingClientRect().top;
        window.scrollTo({ top: position + window.pageYOffset - 100, behavior: "smooth" });
    }
  };

  const ElevationScroll = (props) => {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  };

  return (
    <>
      <ElevationScroll>
        <AppBar>
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
                            <ListItemButton onClick={() => scrollToSection(page.id)}>
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

              <Typography variant="h4" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" }, fontWeight: "bold" }}>
                Support Cartridge
              </Typography>

              <Stack direction="row" spacing={2} sx={{ flexGrow: 1, justifyContent: "flex-end", display: { xs: "none", md: "flex" } }}>
                {links.map((page) => (
                  <Link key={page.id} underline="hover" variant="body" color="black" sx={{ cursor: "pointer" }} onClick={() => scrollToSection(page.id)}>
                    {page.title}
                  </Link>
                ))}
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
