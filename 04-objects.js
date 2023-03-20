const product = {
  name: "Wasching machine",
  price: 199.00 // 299
}

// console.log(product);
// product.price += 100 // MUTATION
// console.log(product)

// React => COPY des Objects erzeugen
// const productCopy = { ...product };
// productCopy.price += 100

const productCopy = { 
  ...product, // COPY original
  price: product.price + 100,
  rebate: "10%"
}

// CHECK
console.log(product) // Original not changed
console.log(productCopy) // only copy changed
