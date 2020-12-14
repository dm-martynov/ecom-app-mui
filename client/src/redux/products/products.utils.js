export const addingProducts = (prevProducts, nextProducts) => {
  return [...new Set([...prevProducts, ...nextProducts])]
}
