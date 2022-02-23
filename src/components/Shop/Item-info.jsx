import { Transition } from "react-transition-group";

import {
  StyledContainer,
  StyledContainerItemDetails,
  StyledContainerShop,
} from "../../styles/shared/Container.styled";
import { StyledParagraph } from "../../styles/shared/Text.styled";
import { StyledTitle2, StyledTitle3 } from "../../styles/shared/Title.styled";

import Modal from "../UI/Modal";

export default function ItemInfo(props) {
  const { filteredDetails, closeModalHandler, showItemInfo, itemInfo } = props;

  const DetailsElements = (
    <>
      <StyledTitle2 color="greyTextColor">{itemInfo.name}</StyledTitle2>
      <StyledParagraph>{itemInfo.price} zł</StyledParagraph>
      <StyledContainerShop>
        {filteredDetails.map((item) => (
          <StyledContainer key={item.id}>
            <StyledTitle3 color="darkRed">{item.name}</StyledTitle3>
            <StyledParagraph>{item.info}</StyledParagraph>
          </StyledContainer>
        ))}
      </StyledContainerShop>
    </>
  );

  return (
    <>
      <Modal closeModal={() => closeModalHandler()}>
        <Transition in={showItemInfo} timeout={500}>
          {(state) => (
            <StyledContainerItemDetails state={state} modalDetails={true}>
              {DetailsElements}
            </StyledContainerItemDetails>
          )}
        </Transition>
      </Modal>

      <Transition in={showItemInfo} timeout={500}>
        {(state) => (
          <StyledContainerItemDetails state={state} modalDetails={false}>
            {DetailsElements}
          </StyledContainerItemDetails>
        )}
      </Transition>
    </>
  );
}
