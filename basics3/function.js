/*function myFun(n1,n2){
    console.log(n1+n2);
}

myFun(3,4)*/

function myFun(n1,n2){
    let answer=n1+n2
    return answer
}
const result=myFun(3,2)

console.log("answer:",result);

function logInUSer(username){
    return `${username} just logged in`   
}

 console.log(logInUSer("deepika"))

 function price(...num){      //if in parameter val1,val2,...num will pass then it'll take 200 as val1 and 300 as val2 and remaining in num.
    return num 
 }

 console.log(price(200,300,400));

const user={
    username:"Deepika",
    age:21
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}`);
}

//handleObject(user)
handleObject({
    username:"abc",
    age:22
})

const myArray=[1,2,3,4,5]

function returnSecondvalue(getArray){
    return getArray[1]
}
//console.log(returnSecondvalue(myArray));
console.log(returnSecondvalue([3,4,6]));