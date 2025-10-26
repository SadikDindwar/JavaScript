//Numbers

// JavaScript considers both integers and flots as Number data type

console.log(typeof 90);
console.log(typeof 9.9);

//If number is added to a String then they will be concatinated and returned as String

let v1 = "12";
let v2 = 5;

let v3 = v1+v2;
console.log(v3);
console.log(typeof v3)

// We can change the String type to number by using Number() function

let v4 = Number(v3);
console.log(typeof v4)


//false=0 and true =1
console.log(Number(true))
console.log(Number(false)) 

//Number Functions

//Number.isInteger() funtion determines weather the passed value is the integer or not
console.log(Number.isInteger(2))
console.log(Number.isInteger(v1))
console.log(Number.isInteger(v2))










