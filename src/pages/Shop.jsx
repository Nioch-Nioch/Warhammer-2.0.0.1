import React, { useCallback } from "react";

import ItemInfoFunctionality from "../components/Shop/Item-Info-Functionality";
import ShopCategoryFunctionality from "../components/Shop/Shop-Category-Functionality";
import ShopItemFunctionality from "../components/Shop/Shop-Item-Functionality";

import useFetch from "../hooks-and-function/useFetch";

import { StyledShop } from "../styles/layout/Shop.styled";

function Shop() {
  const {
    data: fetchDataCategories,
    isLoading: loadingCategory,
    error: errorCategory,
  } = useFetch(
    useCallback(async () => {
      const response = await fetch(
        "https://warhammer-56954-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
      );
      return response.json();
    }, []),
    []
  );

  const {
    data: fetchDataItems,
    isLoading: loadingItems,
    error: errorItems,
  } = useFetch(
    useCallback(async () => {
      const response = await fetch(
        "https://warhammer-56954-default-rtdb.europe-west1.firebasedatabase.app/items.json"
      );
      return response.json();
    }, []),
    []
  );

  const {
    data: fetchDataItemDetails,
    isLoading: loadingItemDetails,
    error: errorItemDetails,
  } = useFetch(
    useCallback(async () => {
      const response = await fetch(
        "https://warhammer-56954-default-rtdb.europe-west1.firebasedatabase.app/propertiesOfItems.json"
      );
      return response.json();
    }, []),
    []
  );

  return (
    <StyledShop>
      <ShopCategoryFunctionality
        fetchDataCategories={fetchDataCategories}
        loadingCategory={loadingCategory}
        errorCategory={errorCategory}
      />
      <ShopItemFunctionality
        fetchDataItems={fetchDataItems}
        loadingItems={loadingItems}
        errorItems={errorItems}
      />
      <ItemInfoFunctionality
        fetchDataItemDetails={fetchDataItemDetails}
        loadingItemDetails={loadingItemDetails}
        errorItemDetails={errorItemDetails}
      />
    </StyledShop>
  );
}

export default Shop;
