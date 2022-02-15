function ShopItem(props) {
  const { itemData } = props;

  return <li className="shop__list-li">{itemData.name}</li>;
}

export default ShopItem;
