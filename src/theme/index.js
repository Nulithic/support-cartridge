import { useMemo } from "react";

import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";

import palette from "./palette";

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      typography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
      },
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
