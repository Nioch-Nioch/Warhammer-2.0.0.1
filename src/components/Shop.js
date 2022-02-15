import React from 'react';

function Shop({dataCategory, dataItems, getCategory, getItem}) {
  return <div className='shop'>

       <ul className='shop__list'>
         {dataCategory.map(item => <li className="shop__list-li" key={item.id} onClick={() => getCategory(item.id)}>{item.name}</li>)}
       </ul>
       <ul className='shop__list'>
          {dataItems.map(item => <li className="shop__list-li" key={item.id} onClick={() => getItem(item.id, item.propertiesId)}>{item.name}</li>)}
       </ul>
  </div>;
}

export default Shop;
