import React, { useCallback } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Shop from "./pages/Shop";

import useFetch from "./hooks/useFetch";

function App() {
  const {
    data: fetchDataCategories,
    isLoading: loadingCategory,
    error: errorCategory,
  } = useFetch(
    useCallback(async () => {
      const response = await fetch(
        "https://warhamme-56954-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
      );
      return response.json();
    }, []),
    []
  );
  console.log(fetchDataCategories, loadingCategory, errorCategory);
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar__title">Warhammer</h1>
        <Link to="/">Home</Link>
        <Link className="navbar__link" to="/shop">
          Sklep
        </Link>
      </nav>
      <div className="content">
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
        </Routes>
      </div>
    </>
  );
}

export default App;
