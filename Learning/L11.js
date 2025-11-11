// Async / Await (V.Imp)

/*
Async/Await: is JavaScript syntax that lets us write asynchronous code in a clean, step-by-step and readable way.
It works on top of Promises, and behind the scenes it uses microtasks and the event loop to handle all the waiting.

Async: Async is a keyword that is used before the function to tell the function will return a Promise and that fnction may have Asynchronous code.

Await: Await is the keyword that is used inside the async function to pause the function execution until the promise gets resolved or rejected.
*/





/*
There are two parts to any Promise
1.Promise maker (craetes the promise and returns it)
2.Promise reciever (recieve the promise and does something with that promise)

1.Promise maker:

function examplePromise(){
    return new Promise((resolve, reject)=>{
        if(true){
            resolve("Promose resolved.");
        }
        else{
            reject("Promise rejected.");
            }
        
        });
}

2. Promise reciever :

examplePromise()
.then((result)=>{})
.then((data)=>{})
.catch((err)=>{});


so as shown above every Promise has Two parts Promise maker and Promise reciever and we use async/await when we are recieving promise.

*/



//Example without async await
function promiseFunction(){
    fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast")
    .then((jsonData)=>{
        return jsonData.json();
    })
    .then((jsObj)=>{
        console.log(jsObj);
    });
} 
promiseFunction();



//Example of using async and await for above code.
async function asyncFunc(){

    const jsonData = await fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast");

    const jsObj =  await jsonData.json();

    console.log(jsObj);
}

asyncFunc();


//Example 2 for using async and await

function f1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(true){
                resolve("everything is OK");
            }
            else{
                reject("Not OK");
            }
        }, 1000)
    })
}

// using then() chain to handle above promise function
f1().then((data)=>{
    return data.toUpperCase();
})
.then((data)=>{
    console.log(data);
});

//using async await for better readbility

async function asyncFunc2(){
    const data = await f1();
    const capital = await data.toUpperCase();  // await is optional here cause toUpperCase is synchronous method.
    console.log(capital);

}

asyncFunc2();


