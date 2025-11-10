// Promises (V.Imp)








let value  = 13;
const promise = new Promise((resolve , reject)=>{
    if(value> 10){
        resolve("Everything is Good.");
    }
    else{
        reject("Something went wrong");
    }

});


promise.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
});



// 


const promiseTwo = new Promise((resolve , reject)=>{
    if(value +1 > 10){
        resolve({id: 101,
            name: "sadik"
        });
    }
    else{
        reject({id:102, name: "not Sadik"});
    }

});


function doSomething(data){
    console.log(data);
}
promiseTwo.then(doSomething).catch((data)=>{
    console.log(data);
});


//

const promiseThree = new Promise((resolve, reject)=>{
    if(value > 10){
        resolve("200 Ok");
    }
    else{
       reject("404 not found");
    }

});

promiseThree.then((data)=> {
    console.log(data);
}, 
(data)=>{
    console.log(data);
});


//  

function f1(data){
    console.log(data);
}
function f2(data){
    console.log(data);
}

const promiseFour = new Promise((resolve , reject)=>{
    if(value > 10){
        resolve("Fine");
    }
    else{
        reject("Not Fine");
    }

});

promiseFour.then(f1, f2);
console.log("This is Sync code");

//

const promiseFive = new Promise((resolve , reject)=>{
    if(value > 10 ){
        resolve("Ok");
    }
    else{
        reject("Not Ok");
    }

});
const promiseSix = new Promise((resolve , reject)=>{
    if(value > 10 ){
       reject("Not Ok");
    }
    else{
        resolve("Ok");
    }

});
const promiseSeven = new Promise((resolve , reject)=>{
    if(value > 10 ){
        resolve("Ok");
    }
    else{
        reject("Not Ok");
    }

});

Promise.all([promiseFive , promiseSix, promiseSeven]).then((data)=>{
    console.log(data , " All Promises resolved");
},
(data)=>{
    console.log(data, " Something went wrong");
});

