"use strict";
// Whil using any data type it will remove type safety of type script 
let data = "Maths";
data = 34;
data = true;
console.log(data);
// Any will give type Error 
let value = "Mansoor";
value = 14723;
// console.log(value.toUpperCase());
// Unknown is the Safest version of Any 
let user_name = "mansoor";
if (typeof user_name === "string") {
    console.log(user_name.toUpperCase());
}
