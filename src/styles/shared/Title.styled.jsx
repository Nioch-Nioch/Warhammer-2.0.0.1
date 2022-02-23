import styled from "styled-components";

const colorTypeHandler = (color) => {
  switch (color) {
    case "darkRed":
      return "#751d1d";
    case "greyTextColor":
      return "#333";
    default:
      return "#f2f2f2";
  }
};

export const MainTitle = styled.h1`
  flex: 2;
  color: ${({ color }) => colorTypeHandler(color)};
`;

export const StyledTitle1 = styled.h1`
  color: ${({ color }) => colorTypeHandler(color)};
`;

export const StyledTitle2 = styled.h2`
  color: ${({ color }) => colorTypeHandler(color)};
`;

export const StyledTitle3 = styled.h3`
  color: ${({ color }) => colorTypeHandler(color)};
`;

export const StyledTitle4 = styled.h4`
  color: ${({ color }) => colorTypeHandler(color)};
`;
