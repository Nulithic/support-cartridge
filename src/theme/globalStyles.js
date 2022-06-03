import { GlobalStyles as GlobalThemeStyles } from "@mui/material";

export default function GlobalStyles() {
  return (
    <GlobalThemeStyles
      styles={{
        "::-webkit-scrollbar": {
          width: " 10px",
        },
        /* Track */
        "::-webkit-scrollbar-track": {
          background: "#f1f1f1",
          borderRadius: "4px",
        },

        /* Handle */
        "::-webkit-scrollbar-thumb": {
          background: "#888",
          borderRadius: "4px",
        },

        /* Handle on hover */
        "::-webkit-scrollbar-thumb:hover": {
          background: "#555",
          borderRadius: "4px",
        },
      }}
    />
  );
}
