function checkCategory(productList) {
	const categories = [];
	productList.forEach(product => {
		categories.push(product.category)
	});
	const categoryList = categories.filter((category, index) => {
		return categories.indexOf(category) === index
	});
	return categoryList.length;
}

module.exports = {
	checkCategory
}