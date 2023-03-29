const arrPizzas = [
  { name: "Salami", price: 5.99 }, // 6.99
  { name: "Margeritha", price: 4.99 }, // 5.99
  { name: "Sucuk", price: 5.99 }, // 6.99
  { name: "Funghi", price: 6.99 }, // 7.99
  { name: "Broccoli", price: 7.99 }, // 8.99
]

console.log(arrPizzas)

const arrPizzaNames = arrPizzas.map(item => {
  return item.name
  // return item.name.toUpperCase()
})

return;


// => [ Salami, Margeritha, Sucuk, Funghi ]
// const pizza1 = "<div>" +  arrPizzas[0].name + "</div>"
// const pizza2 = "<div>" + arrPizzas[1].name + "</div>"
// const pizza3 = "<div>" + arrPizzas[2].name + "</div>"

