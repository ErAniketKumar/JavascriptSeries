"use strict";
//date

let mydate=new Date();
console.log(mydate);
console.log(mydate.toString()); //goves date
console.log(mydate.toTimeString()); //gives time 

let mycdate=new Date(2023, 1, 25);
console.log(mycdate);

console.log(mycdate.getTime()); //gives time when not assign this will gives 00:00 
 
let myTimeStamp=Date.now();
console.log(myTimeStamp);

//various method

let nDate=new Date();
console.log(nDate.getFullYear());
console.log(nDate.getDay());

nDate.toLocaleString('default',{
    weekday:"long",
    timeZone:"" //we can also define which time zone we want
    
})

console.log(nDate);
