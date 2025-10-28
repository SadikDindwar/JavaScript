
//Write a JavaScript code to find a number is prime number or not.

export function isPrime(num){
    if(num == 0 || num == 1){
        return false;
    }
    for(let i=2; i<num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

let result = isPrime(5);

if(result){
    console.log("Prime Number");
}
else{
    console.log("Not a Prime Number");
}
