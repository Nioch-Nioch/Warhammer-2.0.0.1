import { StyledLi, StyledUl } from "../../styles/shared/List.styled";

function ShopCategory(props) {
  const {
    fetchDataCategories,
    loadingCategory,
    errorCategory,
    selectCategoryHandler,
  } = props;

  if (loadingCategory === true)
    return (
      <StyledUl>
        <div>Loading</div>
      </StyledUl>
    );

  if (errorCategory != null)
    return (
      <StyledUl>
        <div>{errorCategory}</div>
      </StyledUl>
    );

  return (
    <StyledUl>
      {fetchDataCategories.map((item) => (
        <StyledLi key={item.id} onClick={() => selectCategoryHandler(item.id)}>
          {item.name}
        </StyledLi>
      ))}
    </StyledUl>
  );
}

export default ShopCategory;
