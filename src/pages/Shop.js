import React, { useCallback } from "react";
import { useSelector } from "react-redux";

import ShopCategory from "../components/Shop/Shop-Category";
import ShopItem from "../components/Shop/Shop-Item";
import useFetch from "../hooks/useFetch";

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
    <div className="shop">
      <ul className="shop__list">
        {data.map((item) => (
          <ShopCategory
            key={item.id}
            categoryData={item}
            itemsList={fetchDataItems}
          />
        ))}
      </ul>
      <ul className="shop__list">
        {loadingItems && <div>Loading...</div>}
        {errorItems && <div>{errorItems}</div>}
        {selectedItems &&
          selectedItems.map((item) => (
            <ShopItem key={item.id} itemData={item} />
          ))}
      </ul>
    </div>
  );
}

export default Shop;
