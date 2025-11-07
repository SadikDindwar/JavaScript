function f1(callback ,  num){
    let v1 = callback();
    return v1 + num;
}


function f2(){
    return 56;
}

setTimeout(()=>{
    console.log("set time out executed.")
},5000);

let v2 = f1(f2 , 4);
console.log(v2);
