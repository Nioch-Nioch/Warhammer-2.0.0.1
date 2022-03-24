import { Fragment } from "react";
import ReactDOM from "react-dom";

import {
  StyledBackground,
  StyledModal,
} from "../../styles/shared/Modal.styled";

const Backdrop = (props) => {
  return <StyledBackground onClick={props.closeModal}></StyledBackground>;
};

const ModalOverlay = (props) => {
  return <StyledModal>{props.children}</StyledModal>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.closeModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
