import { useDispatch } from "react-redux";

import { itemSliceActions } from "../../features/shop/itemSlice";

import { StyledLi } from "../../styles/shared/Li.styled";

function ShopItem(props) {
  const { itemData } = props;
  const dispatch = useDispatch();

  const showItemInfoHandler = () => {
    dispatch(
      itemSliceActions.showSelectedItemInfo({
        showItemInfo: true,
        selectedItem: itemData,
      })
    );
  };

  return (
    <StyledLi className="shop__list-li" onClick={showItemInfoHandler}>
      {itemData.name}
    </StyledLi>
  );
}

export default ShopItem;
