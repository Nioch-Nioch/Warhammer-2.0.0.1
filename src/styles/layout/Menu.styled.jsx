import styled from "styled-components";

export const BurgerOuterStyled = styled.button`
  display: none;

  @media (max-width: 600px) {
    display: inline-block;
  }
`;

export const BurgerInnerStyledSpace = styled.span``;

export const BurgerInnerStyled = styled.span`
  &&&,
  &&&::before,
  &&&::after {
    background-color: #f2f2f2;
  }
`;

export const MenuBurger = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
    max-height: 0;
    overflow: hidden;

    &.active {
      max-height: 100%;
    }
  }
`;

export const MenuBurgerList = styled.ul`
  list-style: none;
  text-align: right;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 20px 15px 10px;
  }
`;
