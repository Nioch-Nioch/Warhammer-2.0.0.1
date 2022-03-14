import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 1rem auto;
  padding: 1.25rem;
  min-width: 90%;
  max-width: 0;
  @media (min-width: 400px) {
    min-width: 80%;
    max-width: 0;
  }
  @media (min-width: 600px) {
    max-width: 60rem;
  }
`;

export const StyledContainer = styled.div``;