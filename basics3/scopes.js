/*let a=200

if (true){
    let a=10
    const b=20
    //var c=30   //avoid var as it print out of the scope
}

console.log(a);
//console.log(b);
//console.log(c);*/

function one(){
    const username="Deepika"
    function two(){
        const website="youtube"
        console.log(username);
    }
   // console.log(website);

    two()
}
//one()
 if (true){
    const username="deepika"
    if(username=="deepika"){
        const website=" youtube"
        console.log(username+ website);
    }
    //console.log(website);
 }
 //console.log(username);
 addone(5)
 function addone(value){
    return value+1
 }

 //addtwo(5)  it will always give error
 const addtwo=function(value){       //when we declare fun in a var then it should be written before the function call otherwise it will give error this is called hoisting.
    return value +2
 }

 addtwo(5)
 