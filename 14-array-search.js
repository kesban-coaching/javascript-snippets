const arrPizzas = [
  { name: "Salami", price: 5.99 }, // 6.99
  { name: "Margeritha", price: 4.99 }, // 5.99
  { name: "Sucuk", price: 5.99 }, // 6.99
  { name: "Funghi", price: 6.99 }, // 7.99
  { name: "Broccoli", price: 7.99 }, // 8.99
];

// in react we typically delete items by FILTERING them out!
const arrPizzasCopy = arrPizzas.filter( (pizza) => {
  // just return the items we want to keep!
  if(pizza.price > 6 )
    return pizza
})

console.log("Filtered array: ", arrPizzasCopy)