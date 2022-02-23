import { detailsFilter } from "../../hooks-and-function/shopFilters";
import { StyledContainerItemDetails } from "../../styles/shared/Container.styled";
import { useDispatch, useSelector } from "react-redux";
import { itemSliceActions } from "../../features/shop/itemSlice";

import ItemInfo from "./Item-info";
const ItemInfoFunctionality = (props) => {
  const { fetchDataItemDetails } = props;
  const itemInfo = useSelector((state) => state.item.itemInfo);

  const showItemInfo = useSelector((state) => state.item.showItemInfo);
  const dispatch = useDispatch();
  const filteredDetails = detailsFilter(itemInfo, fetchDataItemDetails);

  const closeModalHandler = () => {
    dispatch(itemSliceActions.showSelectedItemInfo({ showItemInfo: false }));
  };

  if (itemInfo == null)
    return <StyledContainerItemDetails></StyledContainerItemDetails>;

  return (
    <ItemInfo
      filteredDetails={filteredDetails}
      closeModalHandler={closeModalHandler}
      showItemInfo={showItemInfo}
      itemInfo={itemInfo}
    />
  );
};

export default ItemInfoFunctionality;
