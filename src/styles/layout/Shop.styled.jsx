import styled from "styled-components";

export const MainShopContainer = styled.div`
  box-sizing: border-box;
  margin: 1.25rem auto;
  padding: 1.25rem 0;
  min-width: 90%;

  @media (min-width: 400px) {
    min-width: 10rem;
  }
  @media (min-width: 600px) {
    max-width: 80rem;
  }
`;

export const StyledShop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
