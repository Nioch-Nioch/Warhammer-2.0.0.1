import React, { useCallback } from "react";

import { Link, Route, Routes } from "react-router-dom";

import useFetch from "./hooks-and-function/useFetch";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Creator from "./pages/Creator";

import { StyledNav } from "./styles/layout/Nav.styled";
import { MainContainer } from "./styles/shared/Container.styled";
import { MainTitle } from "./styles/shared/Title.styled";

function App() {
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

  return (
    <>
      <StyledNav>
        <MainTitle>Warhammer</MainTitle>
        <Link to="/">Home</Link>
        <Link className="link" to="/shop">Sklep</Link>
        <Link className="link" to="/Creator">Kreator</Link>
      </StyledNav>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <>
                {loadingCategory && <div>Loading...</div>}
                {(errorCategory ||
                  (fetchDataCategories &&
                    fetchDataCategories.error != null)) && (
                  <div>{errorCategory}</div>
                )}
                {fetchDataCategories && fetchDataCategories.error == null && (
                  <Shop
                    data={fetchDataCategories}
                    LoadingCategory={loadingCategory && loadingCategory}
                    errorCategory={errorCategory && errorCategory}
                  />
                )}
              </>
            }
          />
          <Route path="/Creator" element={<Creator />} />
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;
