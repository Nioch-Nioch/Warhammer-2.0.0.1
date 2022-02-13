import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import useFetch from './hooks/useFetch';

import './App.css';

import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  const [data, setData] = useState(null)
  const { dataOfFatch: fatchData, LoadingCategory, errorCategory} = useFetch('http://localhost:3001/categories'); 

  useEffect(() => {
    setData(fatchData)
    console.log(LoadingCategory)
    console.log(errorCategory)
  }, [fatchData])
 


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
            {LoadingCategory && <div>Loading...</div>}
            {errorCategory && <div>{errorCategory}</div>}
            {data &&  <Shop data={data} LoadingCategory={LoadingCategory && LoadingCategory} errorCategory={errorCategory && errorCategory}/>}
          </>}/>

        </Routes>
      </div>
    </>    
  );
}

export default App;
