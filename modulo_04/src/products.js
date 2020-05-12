function filterProductList(idList, productsList) {
  const filteredProductList = productsList.filter(product => idList.includes(product.id));
  return filteredProductList;
}

function getProductNameCategory(productsList) {
  const products = [];
  productsList.map(product => {
    products.push({
      name: product.name,
      category: product.category
    });
  });

  return products;
}

module.exports = {
  filterProductList,
  getProductNameCategory
};