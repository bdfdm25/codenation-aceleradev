function getPromotionPrice(lookType, productsList) {
  let promotionPrice = 0;
  let hasPromotionPrice = false;
  productsList.map(product => {
    hasPromotionPrice = false;
    product.promotions.filter(promotion => {
      if (promotion.looks.includes(lookType)) {
        promotionPrice += promotion.price;
        hasPromotionPrice = true;
      }
    });
    
    if (!hasPromotionPrice) {
      promotionPrice += product.regularPrice;
    }
    
  });
  
  return promotionPrice.toFixed(2);
}

function calculateSubTotal(productList) {
  let subTotal = 0;
  productList.map(product => {
    subTotal += product.regularPrice;
  });
  return subTotal.toFixed(2);
}


module.exports = {
  getPromotionPrice,
  calculateSubTotal
}