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
