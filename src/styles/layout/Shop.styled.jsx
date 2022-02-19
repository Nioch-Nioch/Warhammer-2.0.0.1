import styled from "styled-components";

export const StyledShop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  justify-content: space-evenly;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
