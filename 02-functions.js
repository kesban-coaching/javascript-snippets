// function hello() {
//   console.log("Hallo Kesban")
// }

const hello = () => {
  console.log("Hallo Kesban");
}

hello()


const buyTea = (name, geld) => {
  console.log("Hey, du kaufst ", name, "und hast Geld gegeben:", geld)
};

buyTea("grüner Tee", "2 EUR")


const summe = (number1, number2) => {
  const result = number1+number2
  console.log(result)
}

summe(3,4) // => 7
summe(3,1) // => 4


const gruss = (name) => {
  console.log("Hallo", name)
}

gruss("Kesban") // "Hallo Kesban"
gruss("Edward") // "Hallo Edward"
