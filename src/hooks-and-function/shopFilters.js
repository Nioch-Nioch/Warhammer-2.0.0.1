export const itemsFilter = (selectedCategoryId, itemsList) => {
  if (
    selectedCategoryId === undefined ||
    selectedCategoryId == null ||
    itemsList === undefined ||
    itemsList == null
  ) {
    return null;
  }

  if (selectedCategoryId === "0") {
    return itemsList;
  } else {
    return itemsList.filter((item) => {
      return item.categoryId === selectedCategoryId;
    });
  }
};

export const detailsFilter = (itemData, detailsList) => {
  if (
    detailsList === undefined ||
    detailsList == null ||
    itemData === undefined ||
    itemData == null
  )
    return false;

  let selectedItemDetails = detailsList.filter((item) => {
    return itemData.propertiesId.indexOf(item.id) !== -1;
  });

  if (typeof itemData.propertiesId === "string") {
    selectedItemDetails = selectedItemDetails.filter(
      (item) => item.id === itemData.propertiesId
    );
  }
  return selectedItemDetails;
};
