import styled from "styled-components";

export const StyledLi = styled.li`
  cursor: pointer;
  display: block;
  color: ${({ theme }) => theme.colors.greyTextColor};
  margin-top: 0.3125rem;
  border-radius: 0.125rem;

  &:nth-child(2n) {
    background-color: ${({ theme }) => theme.colors.lightRed};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainWhiteColor};
  }
`;

export const StyledUl = styled.ul`
  box-sizing: border-box;
  max-height: 50vh;
  min-height: 50vh;
  min-width: 100%;
  background-color: rgb(146, 143, 143);
  padding: 0.625rem;
  border: 0.125rem solid ${({ theme }) => theme.colors.darkRed};
  border-radius: 0.5rem;
  overflow: auto;
  margin-bottom: ${({ mrgBottom }) => mrgBottom};
  &::-webkit-scrollbar {
    width: 0.625rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    background-color: #737272;
  }

  @media (min-width: 600px) {
    max-width: 270px;
    min-width: 270px;
    margin-bottom: 0;
  }
`;
