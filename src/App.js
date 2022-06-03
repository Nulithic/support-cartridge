import Routes from "../src/routing/routes";

import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";

export default function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Routes />
    </ThemeConfig>
  );
}
