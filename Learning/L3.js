// Ternery Operations.

//syntax : let variable = condition ? ifTrue : ifFalse

let v1 = 10>12 ? 1:0;
console.log(v1);

let item = "Ps5";
let response = item ? "Yes we have "+ item : "sorry, we donot have ";

console.log(response);

let item2; // undefined (undefined is considered as False.)
let response2= item2 ? "yes we have item2" : "sorry we donot have item2";
console.log(response2);


//If we want to check multiple conditions using ternary operations 
//Scenario 1
let age =19;
let height= 7;

let isEligible = age>18 ? height >6 ? "Your eligible":"height not good":"age not good";
//First age > 18 true then height> 6 true so your eligible will execute.

console.log(isEligible);


//Scenario 2
let isMonster = false;
let gender = "girl"

let isGoodAtDriving = isMonster ?  "No, You are Monster" : gender.includes("boy") ? "Yes": "No"
console.log(isGoodAtDriving);


