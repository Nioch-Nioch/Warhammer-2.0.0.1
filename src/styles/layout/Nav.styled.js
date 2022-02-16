import styled from "styled-components";

export const StyledNav = styled.nav`
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 60rem;
  margin: 1rem auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainWhiteColor};

  .title {
    flex: 2;
  }

  .link {
    margin-left: 1rem;
    text-decoration: none;
    padding: 0.375rem;
    background: ${({ theme }) => theme.colors.darkRed};
    border-radius: 0.5rem;
  }

  .link:hover {
    background: pink;
    color: black;
  }
`;
