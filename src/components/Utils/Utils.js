
const getFromLS = (slot) => {

  const localItems = JSON.parse(localStorage.getItem(slot));
  const itemsLS = localItems ? localItems : [];
  return itemsLS;
}

const saveItemstoLS = (items, slot) => {
  localStorage.setItem(slot, items);
}

const saveToLS = (item, slot) => {
  const localItems = getFromLS(slot);
  const newItems = JSON.stringify([...localItems, item]);

  saveItemstoLS(newItems, slot);
}


export { getFromLS, saveToLS };