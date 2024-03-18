const name="deepika-t"
const count= 100

console.log(`hello my name is ${name} and count is ${count}`);//string interpolation
const gameName = new String("d-e-e-pika");
a=gameName.charAt();
console.log(a);
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('e'));
const newString = gameName.substring(0,4)
console.log(newString);
const s1= gameName.substring(-5,4)
console.log(s1);
const s2="  deepika "
console.log(s2.trimStart());
const url="https://google.com/google%20search"
console.log(url.replace('%20',"-"));
console.log(url.includes('deepika'));
console.log(gameName.split('-'));
console.log(gameName.substr(0,4));
console.log(gameName.repeat(4));
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);
let text1 = "I love Cats. Cats are very easy to love. Cats are very popular."
text1 = text1.replaceAll("Cats","Dogs");
console.log(text1);
