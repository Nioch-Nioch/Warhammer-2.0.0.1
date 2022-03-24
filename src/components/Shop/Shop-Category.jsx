import { StyledLi, StyledUl } from "../../styles/shared/List.styled";

const ShopCategory = (props) => {
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

  if (errorCategory != null || fetchDataCategories.errorMessage != null)
    return (
      <StyledUl>
        <h3>{errorCategory}</h3>
        <h3>{fetchDataCategories.errorMessage}</h3>
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
};

export default ShopCategory;
