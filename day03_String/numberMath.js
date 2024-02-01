"use strict";

//numbers and math;;
//NUMBER

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

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//+++++++++++Maths +++++++++++++++//

console.log(Math);
console.log(Math.abs(-1)) // absolute value i.e negative also treat as posotive

console.log(Math.round(4.6)) // roundoff
console.log(Math.ceil(4.6)); // next to decimal value i.e 4.6--> 5;

console.log(Math.floor(6.9)); // remove decimal i.e 6.9--> 6;

// Math.min();
// Math.max();
// Math.pow();
// Math.random(); lies between 0 to 1 i.e in decimal form


const minval=10;
const maxval=20;
console.log(Math.floor(Math.random()*(maxval-minval +1) )+minval)


