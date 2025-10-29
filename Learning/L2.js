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
//Number is the inbuilt Object in JavaScript which has many inbuilt methods for different operations.

//Number.isInteger() funtion determines weather the passed value is the integer or not
console.log(Number.isInteger(2))
console.log(Number.isInteger(v1))
console.log(Number.isInteger(v2))

//Number.parseInt() method parses an argument and returns a Number.If the number cannot be parsed from an argment then it will
//return NaN

console.log(Number.parseInt("10"));  // It converts String into a Number
console.log(Number.parseInt("123sadik")); // here it will only return 123 and remove sadik
console.log(Number.parseInt("hello"));  // Here the String cannot be parsed so it will return NaN(Not a Number)
console.log(Number.parseInt(10.90)) // Here it will only gives the NUmber and removes the decemal point

//Number.parseFloat() method parses an argument and returns a floating point.

console.log(Number.parseFloat("hello"));

//Number.toFixed() method helps use to fix how many digits we want after decimal point. It also converts the result to a String

console.log(10.890.toFixed(2));  // here only 2 degits are allowed after decimal point.
console.log(typeof 10.8776870.toFixed(3)); 


//Number.toString() will convert the number to a String. 

console.log(typeof Number.parseInt("8866.8989").toString());


//Math methods
// Math is the inbuilt object which has both properties and methods.

console.log(Math.PI);
console.log(Math.round(Math.PI))
console.log(Math.round(12.54)); //if the value after decimal is above five then it will round to the next number and if it is lees than five
//then it will round it to current number
console.log(Math.trunc(Math.PI));  // Math.trunc() will remove decimal
console.log(Math.ceil(6.3)); // Math.ceil() will round the value up
console.log(Math.floor(6.3)); // Math.floor() will round the value down 
console.log(Math.pow(2, 67)); // Math.pow() use to calculate n to the power m , whre n and m are passed as an argument.
console.log(Math.min(11,23,4,5,65,2,56,78));
console.log(Math.max(11,23,4,5,65,2,56,78));
console.log(Math.random()) // Math.random() will generate random number from o.0 to 0.9
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10)+1);


























