function randomInt(min, max) {
  //min = 5 , max = 10
  return Math.floor(Math.random() * (max - min + 1) + min); // 10.99999 (floor) = 10
}

function product(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = "cheap";
  if (productPrice > 20) {
    priceCategory = "fair";
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}
const prodName = "Java";
const prodPrice = 29.99;
const productOutput = product`This product (${prodName} is ${prodPrice}.)`;
