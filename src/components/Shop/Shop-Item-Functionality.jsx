import React from "react";

import { useSelector } from "react-redux";

import { itemsFilter } from "../../hooks-and-function/shopFilters";
import { useDispatch } from "react-redux";

import { itemSliceActions } from "../../features/shop/itemSlice";
import ShopItem from "./Shop-Item";

const ShopItemFunctionality = (props) => {
  const { fetchDataItems, loadingItems, errorItems } = props;

  const selectedCategoryId = useSelector(
    (state) => state.category.selectedCategoryId
  );
  const dispatch = useDispatch();

  const filteredItemsList = itemsFilter(selectedCategoryId, fetchDataItems);

  const showItemInfoHandler = (item) => {
    dispatch(
      itemSliceActions.showSelectedItemInfo({
        showItemInfo: true,
        itemInfo: item,
      })
    );
  };

  return (
    <ShopItem
      filteredItemsList={filteredItemsList}
      loadingItems={loadingItems}
      errorItems={errorItems}
      showItemInfoHandler={showItemInfoHandler}
    />
  );
};

export default ShopItemFunctionality;
