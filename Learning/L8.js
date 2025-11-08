// High Order Functions (HOF) and Callbacks.
/*
 High order functions are the type of functions which take callback functions as parametres or the functions which return another function.
 example: map(),reduce(), setTimeout(callback, time_in_miliseconds)
 */
//Example for high order functions
//setTimeout
const arr =[1,2,3,4,5,6,78,9,10];
const square = arr.map((item)=>{
    return item * item ;
});
console.log(arr,square);


// Callback
/*
Callback is the function which is pased as the parameter to another function.
*/
//Example 1
setTimeout(()=>{
    console.log("Do Something.")
}, 5000);

//Example 2 : we can define call back func separatly as shown below.

function f1(callbackFunc , num1 , num2){
    const v1 = num1 + num2 + 10;
    callbackFunc(v1);

}


function f2(num){
    const v2 = num + 5;
    console.log(v2);
}

f1(f2 , 6, 7);

//Example 3 : without declaring the call back func seperatly we can directly decalre the call back as the method param.

function f3(callbackFunc2 , num){
    let v3 = callbackFunc2() + num;
    return v3;
}

const v4 =f3(()=>{
    return 30;
}, 10);

console.log(v4);


// wrong syntax : We cannot decalre the function in the parameter of another function.

// function f4(function f5(){
//  return 4;
// }, num){
//  return f5() +num;
// }


// Example 4 : The function which returns another function

function f6(){
    return function (){
        return 10 + 10;
    }
}


let v5 = f6(); // here we are calling function f6 wich returns function and we are storing that function in the variable v5.
let v6 = v5();      // we can call that stored function simply using that variable name so shown in yjsi line.
console.log(v6);    




// CallBack Hell 
/*
Callback hell is nesting callback inside the callback tp the degree that the code  become unreadable and unmaintanable.
To get rid of callback hell we can make use of Promises and Async/Await.


*/ 
