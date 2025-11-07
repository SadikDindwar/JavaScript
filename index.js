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
let v3 =0;




document.getElementById("button1").addEventListener('click' ,()=>{
    if(v3 < 10){
        console.log("button clicked "+(++v3)+" times.");
    }
    else{
        v3++;
        console.log("button cannot be clicked more than 10 times.");
        document.querySelector('body').style.backgroundColor = 'red';
    }
});

