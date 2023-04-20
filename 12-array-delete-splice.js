const arrPizzas = [
  { id: 1, name: "Salami", price: 5.99 }, // 6.99
  { id: 2, name: "Margeritha", price: 4.99 }, // 5.99
  { id: 3, name: "Sucuk", price: 5.99 }, // 6.99 // pos /index: 2
  { id: 4, name: "Funghi", price: 6.99 }, // 7.99
  { id: 5, name: "Broccoli", price: 7.99 }, // 8.99
];

// JS => delete in original
const arrPizzasCopy = [...arrPizzas]
arrPizzasCopy.splice(2, 1) // from element 2 => delete ONE item

// we can use splice to also ADD and item at any position
// push just adds to END of array. but splice can add everywhere in array!
// arrPizzasCopy.splice(2, 0, { name: "Speciale", price: 9.99 }) // from element 2 => delete ONE item

console.log(arrPizzas)