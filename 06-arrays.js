// const fruit1 = "apple"
// const fruit2 = "banana"
// const fruit3 = "cherry"

// ARRAY
//            0         1         2
const arr = ["apple", "banana", "cherry"]; // [ = suare bracket / brackets

console.log(arr[0]) // apple
console.log(arr[1]) // banana
console.log(arr[3]) // undefined

// const obj = { bla: "blub" } // { key: value } | { property: value }

const arrObjects = [
  // objects
  { title: "Yadda Yadda", date: "2022-10-01", author: "Rob" },
  { title: "Bla", date: "2022-10-01", author: "Kesban" },
  { title: "Blubb", date: "2022-10-01", author: "Edward" },
  { title: "Tadamm", date: "2022-10-01", author: "Edward" },
];

console.log(arrObjects[0]) // prints whole object

const obj = arrObjects[0]; // square brackets grab OBJECT
console.log(obj.title) // dot (.) grabs KEY of object => Yadda Yadda


// arrObjects[0] => gets the object from the array => .title gets some info from the object
console.log(arrObjects[0].title) // Yadda Yadda
console.log(arrObjects[1].title) // Bla
console.log(arrObjects[2].title) // Blubb
console.log(arrObjects[3].title) // Blubb


