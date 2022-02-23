import styled from "styled-components";

export const StyledLi = styled.li`
  display: block;
  margin-bottom: 0.3125rem;
  padding: 0.18rem;
  border: none;
  border-radius: 0.125rem;
  color: ${({ theme }) => theme.colors.greyTextColor};
  background-color: ${({ theme }) => theme.colors.lightRed};
  cursor: pointer;
  font-size: 17px;

  &:nth-child(2n) {
    background-color: rgb(146, 143, 143);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainWhiteColor};
  }
`;

export const StyledUl = styled.ul`
  box-sizing: border-box;
  max-height: 50vh;
  min-height: 50vh;
  min-width: 80%;
  max-width: 80%;

  flex-basis: 30%;
  margin-bottom: 2.5rem;
  padding: 0.3125rem 0.625rem 0;
  border: 0.125rem solid ${({ theme }) => theme.colors.darkRed};
  border-radius: 0.5rem;
  background-color: rgb(146, 143, 143);
  overflow: auto;
  transition: all 0.2s;
  z-index: 2;
  &::-webkit-scrollbar {
    width: 0.625rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    background-color: #737272;
  }
  @media (min-width: 600px) {
    max-width: 300px;
    min-width: 280px;
  }
`;
