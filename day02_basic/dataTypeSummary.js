"use strict"
//datatype summary


//usally 7 type :   String,Number, Boolean, null,undefined,Object, Symbol, bigint
//two type 
//1 premitive:  String,Number, Boolean, null,undefined, Symbol, bigint;
//2 nonPremitive  Array, Onject, function

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id==anotherId);

const bigNumber=3342123242423341323n; // put n at the last so made bigint


// refrence data type

//array
const heros=["shaktiman", "aniket","ssr","ajay"];


//object
const obj={
    name:"aniket",
    roll:1054,
    age:20
}
//function


const myFun=function()
{
    console.log("hello from function");
}

myFun();

console.log(typeof myFun);



