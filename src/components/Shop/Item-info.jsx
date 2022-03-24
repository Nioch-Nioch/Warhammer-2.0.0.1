import { Transition } from "react-transition-group";

import {
  StyledContainer,
  StyledContainerItemDetails,
  StyledContainerShop,
} from "../../styles/shared/Container.styled";
import { StyledParagraph } from "../../styles/shared/Text.styled";
import { StyledTitle2, StyledTitle3 } from "../../styles/shared/Title.styled";

import Modal from "../UI/Modal";

const ItemInfo = (props) => {
  const {
    filteredDetails,
    closeModalHandler,
    showItemInfo,
    itemInfo,
    loadingItemDetails,
    errorItemDetails,
  } = props;

  if (loadingItemDetails === true) return <div>Loading</div>;

  const ItemInfoSpaceChanger = (props) => {
    return (
      <>
        <Modal closeModal={() => closeModalHandler()}>
          <Transition in={showItemInfo} timeout={500}>
            {(state) => (
              <StyledContainerItemDetails state={state} modalDetails={true}>
                {props.children}
              </StyledContainerItemDetails>
            )}
          </Transition>
        </Modal>

        <Transition in={showItemInfo} timeout={500}>
          {(state) => (
            <StyledContainerItemDetails state={state} modalDetails={false}>
              {props.children}
            </StyledContainerItemDetails>
          )}
        </Transition>
      </>
    );
  };

  if (errorItemDetails != null || filteredDetails.errorMessage !== undefined)
    return (
      <ItemInfoSpaceChanger>
        <h3>{errorItemDetails}</h3>
        <h3> {filteredDetails.errorMessage}</h3>
      </ItemInfoSpaceChanger>
    );

  return (
    <ItemInfoSpaceChanger>
      <StyledTitle2 color="#333">{itemInfo.name}</StyledTitle2>
      <StyledParagraph>{itemInfo.price} zł</StyledParagraph>
      <StyledContainerShop>
        {filteredDetails.map((item) => (
          <StyledContainer key={item.id}>
            <StyledTitle3 color="#751d1d">{item.name}</StyledTitle3>
            <StyledParagraph>{item.info}</StyledParagraph>
          </StyledContainer>
        ))}
      </StyledContainerShop>
    </ItemInfoSpaceChanger>
  );
};

export default ItemInfo;
