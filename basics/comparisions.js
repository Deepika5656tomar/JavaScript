/*console.log("2">1);
console.log("02">1);
console.log("2"===2);
console.log(null >0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined == 0);
console.log(undefined >0);
console.log(undefined <0);*/

//****summary ****//

//primitive 

// 7 types : string,number,boolean,null,undefined,symbol,BigInt

// reference type(non primitive)
// array,objects,functions

const id=Symbol('123')
const anotherId =Symbol('123')
console.log(id===anotherId);


const heros=["shaktimaan","naagaaj","doga"];
let myObj = {
    name: "Deepika",
    age: 21,
}
const myFunction = function(){
    console.log("hello world");
}