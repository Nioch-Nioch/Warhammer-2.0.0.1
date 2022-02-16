import styled from "styled-components";

export const StyledShop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  .list {
    max-height: 72vh;
    width: 30vw;
    background-color: rgb(146, 143, 143);
    padding: 0.625rem;
    border: 0.125rem solid ${({ theme }) => theme.colors.darkRed};
    border-radius: 0.5rem;
    overflow: auto;
  }

  .list::-webkit-scrollbar {
    width: 0.625rem;
  }

  .list::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    background-color: #737272;
  }
`;
