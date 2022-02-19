import { createGlobalStyle } from "styled-components";
import backgroundImg from "../../assets/background.jpg";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
  color: ${({ theme }) => theme.colors.mainWhiteColor};
  user-select: none;
  text-decoration: none;
}

body {
    background-image: url(${backgroundImg});
}
`;

export default GlobalStyles;
