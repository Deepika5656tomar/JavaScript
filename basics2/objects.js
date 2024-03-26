// if constructor then singleton
// object literals 
//object.create == constructor
/*const mySym=Symbol("key1")
const user1= {
    name: "deepika",
    [mySym]:"mykey1", //for symbol [] are necessary to write
    age: 21,
    city: "pilkhuwa",
    email: "tomardeepika2610@gmail.com",
    ifLoggedIn: false
}

// console.log(user1.email);
// console.log(user1["email"]);
// console.log(user1[mySym]);
// console.log(typeof mySym);

//user1.name="deepa"
//Object.freeze(user1)// further no changes
//user1.age=22
console.log(user1);

user1.greeting=function(){
    console.log(`hello user, ${this.name}`);
}

console.log(user1.greeting());

//const user = new Object()
const user={}
user.id="101abc"
user.name="deepika"
user.isLoggedIn=false
console.log(user);

const user2= {
    email:"any@gmail.com",
    fullname: {
        userfullname: {
            firstname: "deepika",
            lastname:"tomar"
        }
    }
}

console.log(user2.fullname.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3=Object.assign({},obj1,obj2)//to combine objects
const obj3= {...obj1,...obj2}
console.log(obj3);
console.log(Object.keys(user2));
console.log(Object.values(user2));
console.log(Object.entries(user2));
console.log(user2.hasOwnProperty('isLoggedIn'));*/

const course={
    coursename: "js",
    price: 1000,
    courseInstructor:"Deepika"
}
//const{courseInstructor}=course
//console.log(courseInstructor);
const {courseInstructor:instructor}=course
console.log(instructor);

/*{
    name:"deepika",
    "coursename": "js",//API 
    "price":1000
}

[
    {},
    {},
    {}
]*/
