import React, { useCallback } from "react";

import ItemInfoFunctionality from "../components/Shop/Item-Info-Functionality";
import ShopCategoryFunctionality from "../components/Shop/Shop-Category-Functionality";
import ShopItemFunctionality from "../components/Shop/Shop-Item-Functionality";

import useFetch from "../hooks-and-function/useFetch";

import { StyledShop } from "../styles/layout/Shop.styled";

const Shop = () => {
  const {
    data: fetchDataCategories,
    isLoading: loadingCategory,
    error: errorCategory,
  } = useFetch(
    useCallback(async () => {
      try {
        const response = await fetch(
          "https://warhammer-56954-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
        );

        if (response.status === 200) {
          return response.json();
        } else {
          return { errorMessage: response.statusText };
        }
      } catch (err) {
        throw new Error(`Error found: ${err}`);
      }
    }, []),
    []
  );

  const {
    data: fetchDataItems,
    isLoading: loadingItems,
    error: errorItems,
  } = useFetch(
    useCallback(async () => {
      try {
        const response = await fetch(
          "https://warhammer-56954-default-rtdb.europe-west1.firebasedatabase.app/items.json"
        );

        if (response.status === 200) {
          return response.json();
        } else {
          return { errorMessage: response.statusText };
        }
      } catch (err) {
        throw new Error(`Error found: ${err}`);
      }
    }, []),
    []
  );

  const {
    data: fetchDataItemDetails,
    isLoading: loadingItemDetails,
    error: errorItemDetails,
  } = useFetch(
    useCallback(async () => {
      try {
        const response = await fetch(
          "https://warhammer-56954-default-rtdb.europe-west1.firebasedatabase.app/propertiesOfItems.json"
        );

        if (response.status === 200) {
          return response.json();
        } else {
          return { errorMessage: response.statusText };
        }
      } catch (err) {
        throw new Error(`Error found: ${err}`);
      }
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
};

export default Shop;
