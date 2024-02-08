"use script";
// scope of variable
//let, var, const


// let a=10
// const b=20
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);


if(true)
{
let x=10
const y=20
var z=30
}

// console.log(x)// error we cant access outside the bracket/ scope
// console.log(y)// error we cant access outside the bracket/ scope

console.log(z); // var is global i.e we can access var outsize the bracket
//so var is not best use so we ignore variable declear with var

let a=500;
{
    let a=100;
    console.log(a); // this a is another his scope inside the brackets
    
}

console.log(a);
