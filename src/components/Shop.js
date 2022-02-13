import React from 'react';

function Shop({data, LoadingCategory, errorCategory}) {
  console.log(data);
  return <div className='shop'>

       <ul className='shop__list'>
         {data.map(item => <li className="shop__list-li" key={item.id}>{item.name}</li>)}
       </ul>
       <ul className='shop__list'>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
           <li className="shop__list-li">div</li>
       </ul>
  </div>;
}

export default Shop;
