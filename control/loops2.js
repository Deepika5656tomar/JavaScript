// const arr=[1,2,3,4,5]

// for (const  i of arr) {
//     console.log(i);
// }

// const g="hello world"
// for (const  greet of g) {
//     console.log(`each char is ${greet}`);
// }

// const map=new Map()

// map.set('IN',"india")
// map.set('USA',"united states of America")
// map.set('Fr',"France")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
// for (const [key,value] of map) {
//     console.log(key,':->',value);
// }

// const myObj={
//     js:'javaScript',
//     cpp:'c++',
//     rb:'ruby',
//     py:'python'
// }

// for (const key in myObj) {
//     console.log(`${key} for ${myObj[key]}`);
// }

const arr=["js","python","cpp"]

// arr.forEach(function(val){
//     console.log(val);
// })

// arr.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// arr.forEach(printMe)

// arr.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCode=[
    {
        lname:"javaScript",
        lfname:"js"
    },
    {
        lname:"java",
        lfname:"java"
    },
    {
        lname:"python",
        lfname:"py"
    }
]

myCode.forEach((item)=>{
    console.log(item.lname);
})
