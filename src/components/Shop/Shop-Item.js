import { itemSliceActions } from "../../redux/itemSlice";
import { useDispatch } from "react-redux";

function ShopItem(props) {
  const { itemData } = props;
  const dispatch = useDispatch();
  const showItemInfoHandler = () => {
    dispatch(
      itemSliceActions.showSelectedItemInfo({
        showItemInfo: true,
        selectedItem: itemData,
      })
    );
  };

  return (
    <li className="shop__list-li" onClick={showItemInfoHandler}>
      {itemData.name}
    </li>
  );
}

export default ShopItem;
