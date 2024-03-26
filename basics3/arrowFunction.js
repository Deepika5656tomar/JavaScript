/*const user={
    username:"deepika",
    price:1000,

    welcomeMsg:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}
user.welcomeMsg()
user.username="riya"
user.welcomeMsg()

function Try(){
    console.log(this);// this.username will not work in function,only work in objects.
}
Try()*/

// const Try= () =>{
//     let username="Deepika"
//     console.log(this);
// }

//Try()

// const addnum=(n1,n2)=>{
    // return n1+n2
// }
//const addnum=(n1,n2) =>  (n1+n2)//implicit return as it is without return statement
// const addnum=(n1,n2) =>  ({username:"deepa"})
// console.log(addnum(3,4))


//*******************immediaely invoked fun exp*********/

(function Try(){
    //named iife
    console.log(`hey folks`);
})();
( (name)=> {                 //argument
    console.log(`hello everyone,myself ${name}`);
})("depika");         //parameter