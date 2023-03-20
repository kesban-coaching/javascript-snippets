var v = "v"
const c = "c"
let l = "l"

// const variables could not be overwritten with new value!
// c = "d"

console.log(v);
v = "neu"
console.log(v);

if(true) {
  var z = "neues" // let => BLOCK SCOPED VARIABLE
  var k = "kaaaa" // const => BLOCK SCOPED VARIABLE
  console.log("Hallo")
}

console.log(k)