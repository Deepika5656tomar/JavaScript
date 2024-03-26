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