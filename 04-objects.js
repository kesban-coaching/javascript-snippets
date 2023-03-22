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
  price: Number((product.price * 1.1).toFixed(2)),
  rebate: "10%"
}

// CHECK
console.log(product) // Original not changed
console.log(productCopy) // only copy changed

const addMilk = (product) => {
  return {...product, milk: true}
}

const increasePrice = (product, upcount) => {
  return { ...product, price: product.price + upcount  }
}

const productCopy2 = addMilk(product)
console.log(productCopy2)

const productCopy3 = increasePrice(productCopy2, 50)
console.log(productCopy3)
