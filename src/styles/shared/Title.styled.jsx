import styled from "styled-components";

export const MainTitle = styled.h1`
  flex: 2;
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.mainWhiteColor};
`;

//h1 do tytułów nad listami

export const StyledTitle1 = styled.h1`
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.mainWhiteColor};
`;

export const StyledTitle2 = styled.h2`
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.mainWhiteColor};
`;

export const StyledTitle3 = styled.h3`
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.mainWhiteColor};
`;
