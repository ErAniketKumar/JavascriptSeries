"use strict";
//singleton

//object literals

// const obj={}  //empty object singleton
const mysymbol=Symbol("key");
const obj={
    name: "Aniket",
    "full name":"Aniket Kumar", //space in key 
    age:20,
    email:"aniket@google.com",
    isLogedin:false,
    lastLoginDays:["Monday","saturday"],
    [mysymbol]:"key1"  // declear symbol in object

}

console.log(obj.email);
console.log(obj["email"]);
console.log(obj["full name"])
console.log(obj[mysymbol]);

//update value
obj.age=40;
console.log(obj.age);

// Object.freeze(obj); ///freeze obj it means we can't change the or update the value of object

// obj.name="Ram"; //we cant change after freeze

// obj.age=90;

console.log(obj);

// function declearation and defination and add in object

obj.greeting=function()
{
    console.log("hello user");
}

obj.greetingTwo=function()
{
    console.log(`hello ${this["full name"]}, your welcome`);
}

console.log(obj.greeting); // output anonymous function

console.log(obj.greeting()); // function run and gives output

console.log(obj.greetingTwo());




 
