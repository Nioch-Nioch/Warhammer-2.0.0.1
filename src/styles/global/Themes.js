import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    greyTextColor: "#333",
    mainWhiteColor: "#f2f2f2",
    darkRed: "#751d1d",
    lightRed: "#b17d7d",
  },
};

const Themes = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Themes;
