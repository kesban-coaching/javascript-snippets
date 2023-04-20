const arrPizzas = [
  { name: "Salami", price: 5.99 }, // 6.99
  { name: "Margeritha", price: 4.99 }, // 5.99
  { name: "Sucuk", price: 5.99 }, // 6.99
  { name: "Funghi", price: 6.99 }, // 7.99
  { name: "Broccoli", price: 7.99 }, // 8.99
];

// JS way: add new item to array
const pizzaNew = { 
  name: "Speciale", price: 8.99
}

console.log(arrPizzas)

// push function / method => adds a new item to the array at the end
// const arrPizzasCopy = [...arrPizzas] // create copy of original array
// arrPizzasCopy.push(pizzaNew)

// alternative way of creating copy + add new item in one step
const arrPizzasCopy = [...arrPizzas, pizzaNew]

console.log(arrPizzasCopy);
