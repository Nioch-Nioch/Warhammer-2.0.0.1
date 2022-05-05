import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";

import "../node_modules/hamburgers/dist/hamburgers.css";

import { categorySliceActions } from "./features/shop/categorySlice";
import { itemSliceActions } from "./features/shop/itemSlice";

import Home from "./pages/Home";
import Shop from "./pages/Shop";

import { StyledApp } from "./styles/layout/App.styled";
import {
  BurgerInnerStyled,
  BurgerInnerStyledSpace,
  BurgerOuterStyled,
  MenuBurger,
  MenuBurgerList,
} from "./styles/layout/Menu.styled";
import { StyledNav } from "./styles/layout/Nav.styled";
import { MainShopContainer } from "./styles/layout/Shop.styled";
import { MainTitle } from "./styles/shared/Title.styled";

const App = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
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

  const burgerClickHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <StyledApp>
      <StyledNav>
        <MainTitle>Warhammer</MainTitle>
        <BurgerOuterStyled
          className={`hamburger hamburger--spin ${isActive && "is-active"}`}
          type="button"
          onClick={burgerClickHandler}
        >
          <BurgerInnerStyledSpace className="hamburger-box">
            <BurgerInnerStyled className="hamburger-inner"></BurgerInnerStyled>
          </BurgerInnerStyledSpace>
        </BurgerOuterStyled>
        <MenuBurger className={isActive && "active"}>
          <MenuBurgerList>
            <Link to="/" onClick={storeItemDetailsHideHandler}>
              Home
            </Link>
            <Link className="link" to="/shop">
              Sklep
            </Link>
          </MenuBurgerList>
        </MenuBurger>
      </StyledNav>
      <MainShopContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </MainShopContainer>
    </StyledApp>
  );
};

export default App;
