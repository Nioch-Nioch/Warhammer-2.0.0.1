import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { itemSliceActions } from "../../features/shop/itemSlice";

import { StyledContainer } from "../../styles/shared/Container.styled";

import Modal from "../UI/Modal";

export default function ItemInfo() {
  const dispatch = useDispatch();
  const modalRequired = useSelector((state) => state.item.modalRequired);

  return (
    <>
      {modalRequired && (
        <Modal
          closeModal={() =>
            dispatch(
              itemSliceActions.showSelectedItemInfo({ showItemInfo: false })
            )
          }
        >
          ItemInfo
        </Modal>
      )}
      {!modalRequired && <StyledContainer>asd</StyledContainer>}
    </>
  );
}
