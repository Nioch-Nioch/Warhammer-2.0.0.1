import styled from "styled-components";

export const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.75);

  @media (min-width: 600px) {
    display: none;
  }
`;

export const StyledModal = styled.div`
  min-width: 88%;
  position: absolute;
  top: 18vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  @media (min-width: 600px) {
    display: none;
  }
`;
