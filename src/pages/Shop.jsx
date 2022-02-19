import React, { useCallback } from "react";

import { useSelector } from "react-redux";

import ItemInfo from "../components/Shop/Item-info";
import ShopCategory from "../components/Shop/Shop-Category";
import ShopItem from "../components/Shop/Shop-Item";
import useFetch from "../hooks-and-function/useFetch";

import { StyledShop } from "../styles/layout/Shop.styled";
import { StyledUl } from "../styles/shared/List.styled";

function Shop({ data, LoadingCategory, errorCategory }) {
  const selectedItems = useSelector((state) => state.category.itemsData);
  const itemInfo = useSelector((state) => state.item.showItemInfo);
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
      <StyledUl mrgBottom={"36px"}>
        {data.map((item) => (
          <ShopCategory
            key={item.id}
            categoryData={item}
            itemsList={fetchDataItems}
          />
        ))}
      </StyledUl>
      <StyledUl>
        {loadingItems && <div>Loading...</div>}
        {errorItems && <div>{errorItems}</div>}
        {!loadingItems &&
          selectedItems &&
          selectedItems.map((item) => (
            <ShopItem key={item.id} itemData={item} />
          ))}
      </StyledUl>
      {itemInfo && <ItemInfo />}
    </StyledShop>
  );
}

export default Shop;
