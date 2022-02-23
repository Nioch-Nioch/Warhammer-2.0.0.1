import { StyledLi, StyledUl } from "../../styles/shared/List.styled";

function ShopItem(props) {
  const { filteredItemsList, loadingItems, errorItems, showItemInfoHandler } =
    props;

  if (filteredItemsList == null || filteredItemsList === undefined)
    return <StyledUl />;

  if (loadingItems === true)
    return (
      <StyledUl>
        <div>Loading</div>
      </StyledUl>
    );

  if (errorItems != null)
    return (
      <StyledUl>
        <div>{errorItems}</div>
      </StyledUl>
    );

  return (
    <StyledUl>
      {filteredItemsList.map((item) => {
        return (
          <StyledLi key={item.id} onClick={() => showItemInfoHandler(item)}>
            {item.name}
          </StyledLi>
        );
      })}
    </StyledUl>
  );
}

export default ShopItem;
