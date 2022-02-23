import React from "react";

import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import { StyledNav } from "./styles/layout/Nav.styled";
import { MainShopContainer } from "./styles/layout/Shop.styled";
import { MainTitle } from "./styles/shared/Title.styled";
import { useDispatch } from "react-redux";
import { itemSliceActions } from "./features/shop/itemSlice";
import { categorySliceActions } from "./features/shop/categorySlice";

import Shop from "./pages/Shop";

function App() {
  const dispatch = useDispatch();

  const storeItemDetailsHideHandler = () => {
    dispatch(
      itemSliceActions.showSelectedItemInfo({
        showItemInfo: false,
        itemInfo: null,
      })
    );

    dispatch(
      categorySliceActions.selectCategory({
        selectedCategoryId: "0",
      })
    );
  };

  return (
    <>
      <StyledNav>
        <MainTitle>Warhammer</MainTitle>
        <Link to="/" onClick={storeItemDetailsHideHandler}>
          Home
        </Link>
        <Link className="link" to="/shop">
          Sklep
        </Link>
      </StyledNav>
      <MainShopContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </MainShopContainer>
    </>
  );
}

export default App;
