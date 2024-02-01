"use strict";

//numbers and math;;
// NUMBER

const score=400;
console.log(score);
//another way to init number
const balance= new Number(1000);
console.log(balance);

console.log(typeof balance); 
console.log(typeof score);
// conver number to string
console.log(balance.toString());
console.log(typeof balance.toString());
// toFixed properties to specifry how much decimal value consider 

const mixval=1023.234223;
console.log(mixval);
console.log(mixval.toFixed(2)); // only 2 digit decimal value consider
// 
console.log(mixval.toPrecision(2));
//toLocalString

console.log(mixval.toLocaleString()); // followed by the us standered i.e sperate by , like thousand lakhs and so more


