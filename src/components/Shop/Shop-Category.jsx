import { useDispatch } from "react-redux";

import { categorySliceActions } from "../../features/shop/categorySlice";

import { StyledLi } from "../../styles/shared/List.styled";

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
    <StyledLi onClick={selectCategoryHandler}>{categoryData.name}</StyledLi>
  );
}

export default ShopCategory;
