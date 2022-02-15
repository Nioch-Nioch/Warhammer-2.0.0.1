import { categorySliceActions } from "../../redux/categorySlice";
import { useDispatch } from "react-redux";

function ShopCategory(props) {
  const { categoryData, itemsList } = props;
  const dispatch = useDispatch();

  const selectCategoryHandler = () => {
    dispatch(
      categorySliceActions.selectCategory({
        selectedCategory: categoryData.id,
        itemsList,
      })
    );
  };

  return (
    <li className="shop__list-li" onClick={selectCategoryHandler}>
      {categoryData.name}
    </li>
  );
}

export default ShopCategory;
