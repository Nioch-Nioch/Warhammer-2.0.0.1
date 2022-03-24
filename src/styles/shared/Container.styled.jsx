import styled from "styled-components";

export const StyledContainerItemDetails = styled.div`
  min-height: 50vh;
  max-height: 50vh;
  background-color: rgb(146, 143, 143);
  left: -40%;
  z-index: 1;
  flex-basis: 30%;
  opacity: 0;
  position: relative;
  overflow-y: scroll;
  padding: 0.3125rem 0.625rem 0;
  border: 0.125rem solid ${({ theme }) => theme.colors.darkRed};
  border-radius: 0.5rem;
  margin-bottom: 2.5rem;
  transition: all.4s;
  animation: ${({ state }) =>
      state !== undefined
        ? state === "entering" || state === "entered"
          ? "showInfo"
          : "hideInfo"
        : ""}
    2.2s both;

  @keyframes showInfo {
    0% {
      left: -40%;
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      left: 0;
    }
  }

  @keyframes hideInfo {
    0% {
      left: 0;
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    60% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      left: -40%;
    }
  }

  &::-webkit-scrollbar {
    width: 0.625rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    background-color: #737272;
  }

  @media (max-width: 600px) {
    max-height: 100%;
    display: ${({ modalDetails }) => (modalDetails ? "block" : "none")};
  }
  @media (max-width: 800px) {
    flex-basis: 60%;
  }
`;

export const StyledContainerShop = styled.div`
  padding-top: 2rem;
`;
export const StyledContainer = styled.div`
  margin-bottom: 1rem;
`;
