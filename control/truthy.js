const email=[]
if (email){
    console.log("got email");
}
else{
    console.log("dont have email");
}

//false values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truth values
//"0","false"," ",[],{},function(){}

// const emptyObj={}

// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }
//Nullish Coalescing Operaor (??):null undefined

let val1;
//val1=5??10
val1=null??10

console.log(val1);

//ternary operator 
//condition?true:false
const a=10
a==8 ? console.log("less than 10"):console.log("more than or equal to 10");