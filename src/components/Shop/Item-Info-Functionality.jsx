import { useDispatch, useSelector } from "react-redux";
import { itemSliceActions } from "../../features/shop/itemSlice";

import { detailsFilter } from "../../hooks-and-function/shopFilters";

import { StyledContainerItemDetails } from "../../styles/shared/Container.styled";

import ItemInfo from "./Item-info";

const ItemInfoFunctionality = (props) => {
  const { fetchDataItemDetails, loadingItemDetails, errorItemDetails } = props;

  const itemInfo = useSelector((state) => state.item.itemInfo);
  const showItemInfo = useSelector((state) => state.item.showItemInfo);

  const dispatch = useDispatch();

  let filteredDetails = fetchDataItemDetails;

  if (
    errorItemDetails == null &&
    fetchDataItemDetails != null &&
    fetchDataItemDetails.errorMessage === undefined
  )
    filteredDetails = detailsFilter(itemInfo, fetchDataItemDetails);

  const closeModalHandler = () => {
    dispatch(itemSliceActions.showSelectedItemInfo({ showItemInfo: false }));
  };

  if (itemInfo == null)
    return <StyledContainerItemDetails></StyledContainerItemDetails>;

  return (
    <ItemInfo
      filteredDetails={filteredDetails}
      loadingItemDetails={loadingItemDetails}
      errorItemDetails={errorItemDetails}
      itemInfo={itemInfo}
      showItemInfo={showItemInfo}
      closeModalHandler={closeModalHandler}
    />
  );
};

export default ItemInfoFunctionality;
