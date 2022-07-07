import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

import Routes from "../src/routing/routes";

import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Wrapper>
        <Routes />
      </Wrapper>
    </ThemeConfig>
  );
}
