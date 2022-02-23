import { useDispatch, useSelector } from "react-redux";
import { categorySliceActions } from "../../features/shop/categorySlice";
import { itemSliceActions } from "../../features/shop/itemSlice";

import ShopCategory from "./Shop-Category";

const ShopCategoryFunctionality = (props) => {
  const { fetchDataCategories, loadingCategory, errorCategory } = props;

  const showItemInfo = useSelector((state) => state.item.showItemInfo);
  const dispatch = useDispatch();

  const selectCategoryHandler = (itemId) => {
    dispatch(
      categorySliceActions.selectCategory({
        selectedCategoryId: itemId,
      })
    );

    if (showItemInfo) {
      dispatch(
        itemSliceActions.showSelectedItemInfo({
          showItemInfo: false,
          itemInfo: "unchanged",
        })
      );
    }
  };

  return (
    <>
      <ShopCategory
        fetchDataCategories={fetchDataCategories}
        loadingCategory={loadingCategory}
        errorCategory={errorCategory}
        selectCategoryHandler={selectCategoryHandler}
      />
    </>
  );
};

export default ShopCategoryFunctionality;
