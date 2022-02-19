import { useDispatch } from "react-redux";

import { itemSliceActions } from "../../features/shop/itemSlice";

import { StyledLi } from "../../styles/shared/List.styled";

function ShopItem(props) {
  const { itemData } = props;
  const dispatch = useDispatch();

  const showItemInfoHandler = () => {
    const windowWidth = document.getElementById("root").offsetWidth < 600;

    dispatch(
      itemSliceActions.showSelectedItemInfo({
        showItemInfo: true,
        selectedItem: itemData,
        modalRequired: windowWidth,
      })
    );
  };

  return <StyledLi onClick={showItemInfoHandler}>{itemData.name}</StyledLi>;
}

export default ShopItem;
