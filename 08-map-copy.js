const arrPizzas = [
  { name: "Salami", price: 5.99 }, // 6.99
  { name: "Margeritha", price: 4.99 }, // 5.99
  { name: "Sucuk", price: 5.99 }, // 6.99
  { name: "Funghi", price: 6.99 }, // 7.99
  { name: "Broccoli", price: 7.99 }, // 8.99
];

console.log(arrPizzas)

// map function => loops through ALL items of array
// and executes some code on each item
// it puts the item as INPUT of a function
const arrPizzasCopy = arrPizzas.map((item) => {
  // console.log(pizza.name)
  // item.price++ // increase price by one
  // item.name = item.name.toUpperCase(); // => Salami => SALAMI
  // REACT way to update => always create a COPY of original item
  return { ...item, name: item.name.toUpperCase(), price: item.price + 2 };
});

console.log();
console.log(arrPizzasCopy);

// if we want REPEAT the same thing multiple times.... ?
// LOOP => map, for, while, forEach, reduce, filter

// just grab pizza names and store them in new Array
// const arrPizzaNames = [pizza1, pizza2, pizza3, pizza4]

// console.log(arrPizzaNames)
