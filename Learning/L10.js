// Promises (V.Imp)
/*
-> then(()=>{}) : .then will take one callback and it will run if the promise is resolved(); 
-> .then(()=>{}, ()=>{}); : .then will also take two callbacks first callback will be executed when the promise is resolved,
    and if the promise is rejected then the second callback will be executed.
-> And if we donot want to handle both resolve and reject inside then() we can use catch() with then.
   syntax : promise.then((data)=>{ console.log("if Resolved")}).catch((data)=>{console.log(idf Rejected)});.
-> we Can also check multiple promise at once using Promise.all() and perform someting if all the promise resolved and if any of the promise
   rejected then catch() will be executed. 
   suntax: Promise.all([promiseOne, promiseTwo, promiseThree]).then((data)=>{ //if all reslves }).catch((data)=>{//if any one rejects});
-> we can also add finally() at last and it will be executed no matter if the promise is resolved or rejected.
   syntax : promise.then(callBack).catch(callBack).finally(()=>{});
   remember finally(()=>{})
   will not recieve any value like resolved value or err message etc.   







*/






// Promise Examples :

//
let value  = 18;
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




//then() with catch

const promiseEight = new Promise((resolve , reject)=>{
    if(value >= 10 ){
        resolve("Yes Resolved");
    }
    else{
        reject("No Rejected");
    }

});

promiseEight.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
})

//finally()


const promiseNine = new Promise((resolve , reject)=>{
    if(value >10){
        resolve("Resolved...");
    }
    else{
        reject("Rejected...");
    }
});

promiseNine.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
}).finally(()=>{
    console.log("Finally block executed");
});

console.log("This is Sync code");


