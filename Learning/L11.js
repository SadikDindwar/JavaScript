// Async / Await (V.Imp)

/*
Async/Await: is JavaScript syntax that lets us handle proises and it help us to write  asynchronous code in a clean, step-by-step and readable way.
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




/*
Rules to be Followed while using async await
1.async and await must be used together for eg we cannot use await outside the async function.In some exceptional cases we can use await 
  outside async function like while we are using JS Modules and Chorome dev tool console also allow this thing. 
2.async await only affects the promise reciever not the promise creater.
3.We can await any function that returns Promise.
4.Any function can be converted to async.
5.all async functions returns a promises.
6.async await let us handle errors using try/catch.
7.we can use the catch() block with await but its not a standard way instead use try/catch
8. Remember when a prommise is rejected() you must have catch() block or you should use try catch block to handle the rejection 
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
//promiseFunction();



//Example of using async and await for above code.
async function asyncFunc(){

    const jsonData = await fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast");

    const jsObj =  await jsonData.json();

    console.log(jsObj);
}

//asyncFunc();


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


//handling errors using try catch

function promiseThree(){
    return new Promise((resolve, reject)=>{
        if(!true){
            resolve("Resolved no exception....");
        }
        else{
            reject("Something went wrong.");
        }

        
    })
}

async function asyncFunc3(){
    try{
        const data = await promiseThree();
        console.log(data);
    }
    catch(err){
        console.log(`Exception Occured : ${err}`);
    }
}

asyncFunc3();



//using catch()
async function asyncFunc4(){
    const data = await promiseThree()
    .catch((err)=>{
        console.log(err);
    });
    console.log(data);   //when you use catch() the data will be undefined or you will loose the data once you come out of chain. 
}
asyncFunc4();
