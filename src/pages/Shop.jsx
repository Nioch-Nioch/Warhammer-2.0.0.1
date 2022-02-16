import React, { useCallback } from "react";
import { useSelector } from "react-redux";

import ShopCategory from "../components/Shop/Shop-Category";
import ShopItem from "../components/Shop/Shop-Item";
import useFetch from "../hooks-and-function/useFetch";

import { StyledShop } from "../styles/layout/Shop.styled";

function Shop({ data, LoadingCategory, errorCategory }) {
  const selectedItems = useSelector((state) => state.category.itemsData);

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

  return (
    <StyledShop>
      <ul className="list">
        {data.map((item) => (
          <ShopCategory
            key={item.id}
            categoryData={item}
            itemsList={fetchDataItems}
          />
        ))}
      </ul>
      <ul className="list">
        {loadingItems && <div>Loading...</div>}
        {errorItems && <div>{errorItems}</div>}
        {selectedItems &&
          selectedItems.map((item) => (
            <ShopItem key={item.id} itemData={item} />
          ))}
      </ul>
    </StyledShop>
  );
}

export default Shop;
