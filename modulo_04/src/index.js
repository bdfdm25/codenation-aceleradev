const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

const price = require('./price');
const category = require('./category');
const products = require('./products');

let promotionPrice = 0;
let subtotal = 0;
let cart = {};

function createShoppingCart(productsList, promotion, totalPrice, subtotal) {
	const shoppingCart = {
		products: products.getProductNameCategory(productsList),
		promotion: promotion,
		totalPrice: totalPrice,
		discountValue: (subtotal - totalPrice).toFixed(2),
		discount: (((subtotal - totalPrice) * 100) / subtotal).toFixed(2) + '%'
	};

	return shoppingCart;
}


function getShoppingCart(ids, productsList) {
	const filteredList = products.filterProductList(ids, productsList);
	const categories = category.checkCategory(filteredList);

	switch (categories) {
		case 1:
			promotionPrice = price.getPromotionPrice(promotions[0], filteredList);
			subtotal = price.calculateSubTotal(filteredList);
			cart = createShoppingCart(filteredList, promotions[0], promotionPrice, subtotal);
			break;
		case 2:
			promotionPrice = price.getPromotionPrice(promotions[1], filteredList);
			subtotal = price.calculateSubTotal(filteredList);
			cart = createShoppingCart(filteredList, promotions[1], promotionPrice, subtotal);
			break;
		case 3:
			promotionPrice = price.getPromotionPrice(promotions[2], filteredList);
			subtotal = price.calculateSubTotal(filteredList);
			cart = createShoppingCart(filteredList, promotions[2], promotionPrice, subtotal);
			break;
		case 4:
			promotionPrice = price.getPromotionPrice(promotions[3], filteredList);
			subtotal = price.calculateSubTotal(filteredList);
			cart = createShoppingCart(filteredList, promotions[3], promotionPrice, subtotal);
			break;
		default:
			console.log('ERROR');
	}

	return cart;
}

module.exports = {
	getShoppingCart
};