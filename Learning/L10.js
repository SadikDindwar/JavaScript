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

promiseFour.then(f1, f2);  // if resolves then f1 will be called and if rejected then f2 will be called.


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


// function that returns Promise. example :


const v1 = "sadiq";
function promiseFunction(){
    return new Promise((resolve, reject)=>{
        if(v1.includes("sadik")){
            resolve("Name Matched");
        }
        else{
            reject("Name Not Matched");
        }
    })
}

promiseFunction().then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
});







//Making http call to my Spring Boot backend application running locally on port number 8080 :

function httpRequest(){
    return new Promise((resolve , reject)=>{
        fetch("http://localhost:8080/employee/getAll").then((data)=>{
    const jsObj=data.json();
    resolve(jsObj);
    }).catch((data)=>{
    reject(data);

});
});
}

// httpRequest().then((obj)=>{
//     console.log(obj);
// }).catch((data)=>{
//     console.log(data);
// });



// fetch("http://localhost:8080/employee/getAll").then((data)=>{
//     return data.json();
// }).then((data)=>{
//    console.log(data);
//    return data;
// }).then((data)=>{
//     console.log(data[2].name);
// }).catch((data)=>{
//     console.log(data);
// });



//checking for pending state

function promiseTen(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("OK 200");
        }, 2000);
    });
}


const v2 = promiseTen(); // this a Async call
console.log(v2);   // Here the v2 is promise and its still not resolved so it will return Pending. 



// calling external Api.

function f3(){
    fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast").then((data)=>{
        return data.json();
    }).then((data)=>{
        console.log(data);
    });
}

f3();

