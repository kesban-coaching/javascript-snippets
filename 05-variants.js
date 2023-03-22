const product = {
  type: "Tea",
  price: 1.99,
  // embedded object / nested object
  variants: {
    sugar: 0.5,
    milk: 0.3,
    double: 1
  }
}

// [ADD SUGAR]
const addSugar = (product) => {
  return { ...product, price: product.price + product.variants.sugar }
}

console.log(product.price)
const productCopy = addSugar(product)
console.log(productCopy.price)

