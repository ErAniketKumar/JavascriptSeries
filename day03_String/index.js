"use strict"
const repo=50;
const name="aniket";
console.log(name+" have "+repo+" repo on github"); //this is old style
// now we can use to reduce complex syntax we use string template i.e back tick

console.log(`${name} have total ${repo} repo on github`);

//we can create string with constructor

const mystring=new String("Aniketkumar");
console.log(mystring);

//see all method we can apply on this

console.log(mystring.__proto__);

//show position ;;

console.log(mystring.charAt(2)); // return value of 2 idx

console.log(mystring.indexOf('k'));
const newstr=mystring.substring(2,6); //start end_index -1 tak
console.log(newstr);
//substring not support negative value
//but slice support both negative and positive 

const ss=mystring.slice(3, 6); //same as substring but it support -ve and +ve both
console.log(ss);

const nstring="  hello    ";

console.log(nstring);

//we can use trim for remove white space from start and end both side

console.log(nstring.trim()); // remove space from end and start bith side

console.log(nstring.trimStart()) // remove space from start only

console.log(nstring.trimEnd()) // remove space from end side

// replace 
const url="https://aniket%20kumar.com"
console.log(url.replace('%20','_')); // replace %20 to _ underscore

console.log(url.includes('aniket')); // i.e aniket present or not in this string if present then return tru else false

// convert array to string 

const arr=mystring.split(""); // passing parameter whoes based we want to split like space or somthing depend upon you
console.log(arr);

// convert array to string
const arrtostring=arr.join(""); //join array element to string
console.log(arrtostring);











