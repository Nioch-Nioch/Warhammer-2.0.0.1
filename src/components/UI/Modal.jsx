import { Fragment } from "react";
import ReactDOM from "react-dom";

import {
  StyledBackground,
  StyledModal,
} from "../../styles/shared/Modal.styled";

function Backdrop(props) {
  return <StyledBackground onClick={props.closeModal}></StyledBackground>;
}

function ModalOverlay(props) {
  return <StyledModal>{props.children}</StyledModal>;
}

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
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
}
