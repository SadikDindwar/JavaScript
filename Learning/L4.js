// User inputs 

// confirm("Ok for confirm \n Cancel for canceling."); // confirm() will generate the pop up saying ok or cancel.


// '??'
// ?? in JavaScript is the nullish coalescing operator.
//Syntax : a ?? b  -> this means if return a is not null or undefined otherwise return b.
//example
let a; // here a is undefined.
let b =10;
console.log(a??b);  

let c;
console.log(c??"c is empty"); // we can also return directly

let d =79;
let e =56;
console.log(d ?? e);


// Functions

//Regular Functions

function sum(num1 , num2){
    return num1+num2;
}

let v1 = function multiply(num1 , num2){
    return num1*num2;
};

let v2 = v1(12 , 5);
console.log(v2);

function doSomething(num1 , num2=2){// here if we donot provide second argument then by defaul 2 will 
    return num1+num2;
}
console.log(doSomething(12, 5));
console.log(doSomething(10));  // second argument by defaul 2 will be set


//Anonymus Function : Anonymus function is the type of function which donot have name ,and it can be passed as a call back to another functions.
//Example

let v3 = function(num1){
    return num1+10;

}
console.log(v3(10));

setTimeout(function(){
    console.log("Statement executed after 5 sec");

}, 5000)


// Arrow Functions : Arrow functions are type of functions which donot have name and a fumction keyword
//introduced in ES6. it reduces the syntax.
//Example

let v4 = ()=> {
    console.log("Arrow func");
    return 2;
}
console.log(v4());
 
//or

let v5 = (num1)=> {
    return num1;
}
console.log(v5(5));

//or

let v6 = num2 => num2+num2; // here if a arrow func only have one param the we can skip the brackets
//and if it has only one statement we can skip curly brackets and return keyword as shown above.
console.log(v6(3));

let v7 = (num1, num2) => num1+num2;
console.log(v7(1,5));








