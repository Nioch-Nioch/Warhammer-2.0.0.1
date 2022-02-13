import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import useFetch from './hooks-and-function/useFetch';
import filtration from './hooks-and-function/filtration';

import './App.css';

import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  const [dataCategory, setDataCategory] = useState(null)
  const [dataItems, setDataItems] = useState(null)
  const [dataItemsProps, setDataItemsProps] = useState(null)

  const { dataOfFatch: fatchDataCategory, LoadingCategory, errorCategory} = useFetch('http://localhost:3001/categories'); 
  const { dataOfFatch: fatchDataItems, LoadingItems, errorItems} = useFetch('http://localhost:3001/items'); 
  const { dataOfFatch: fatchDataItemsProps, LoadingItemsProps, errorItemsProps} = useFetch('http://localhost:3001/propertiesOfItems'); 


  useEffect(() => {
    setDataCategory(fatchDataCategory)
    setDataItems(fatchDataItems)
    setDataItemsProps(fatchDataItemsProps)
  }, [fatchDataCategory, fatchDataItems, fatchDataItemsProps])
  
  const getCategory = (id = 1) => {
    const newItemsList = filtration(fatchDataItems, "categoryId", id);     
    setDataItems(newItemsList)
  }

  const getItem = (id, propertiesId) => {
    const newProperties = filtration(fatchDataItemsProps, "id", propertiesId); 
    const newItems = filtration(fatchDataItems, "id", id);     
    setDataItems(newItems);
    setDataItemsProps(newProperties);
}

  return (
    <>
      <nav className="navbar">
          <h1 className='navbar__title'>Warhammer</h1>
          <Link to="/">Home</Link>
          <Link className="navbar__link" to="/shop">Sklep</Link>
      </nav>
      <div className="content">
        <Routes>  
          <Route path="/" element={<Home/>} />
          <Route path="shop" element={<>
            {LoadingCategory && LoadingItems && LoadingItemsProps && <div>Loading...</div>}
            {errorCategory && errorItems && errorItemsProps && <div>Dane się nie pobrały</div>}
            {dataCategory && dataItems && dataItemsProps && <Shop dataCategory={dataCategory} dataItems={dataItems} getCategory={getCategory} dataItemsProps={dataItemsProps} getItem={getItem} />}
          </>}/>

        </Routes>
      </div>
    </>    
  );
}

export default App;
