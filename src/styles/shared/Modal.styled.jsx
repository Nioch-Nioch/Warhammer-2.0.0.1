import styled from "styled-components";

export const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 16vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  background-color: #fff;
`;
