"use strict";
//array

const myArr=[1,2,3,4,5,"hello", true, "Aniket", "kr"]; //mix data dype can be defined
console.log(myArr);

//another way to declear array

const myArr2=new Array(1,2,3,4,6);
console.log(myArr2);

//array method
// myArr.push(10) //add value at end;

// myArr.pop() //delete at last

// myArr.unshift(100); // add at begin

//myArr.shift() // remove at begin

//cosole.log(myArr.include(9))    //9 present or not  it return bool value

//myArr.indexOf(val) // return index if present if not present then return -1;

//slice and splice

const myNewArr1=myArr.slice(1,4); //start 1 ind to endidx-1;
 console.log(myNewArr1);

 console.log(myArr);
 const nArr2=myArr.splice(1,4);
 console.log(nArr2);
 console.log(myArr);
 const carray=myArr.concat(nArr2); //join i.e concatinate both array into one
 console.log(carray);

 //  concatinate using sprade operator

 const myA=[...myNewArr1];
 console.log(myA);
 // multidimentational array

 const mArr=[[1,2,3,],[1,3,4],[34,2,4]];
 //or
 const mArr2=[2,3,4,5,[144,4,[2,34,90,23,4,1],5,56,],3,35,[24,5,6,]];

 // flat return a new array to subarray we pas depth how inner subarray we wanr to flat

 const farr=myArr2.flat(Infinity);
 console.log(farr);


 const mkArr=Array.from("Aniket"); //convert into array //we can pass string object and any data 

 console.log(mkArr);
 




