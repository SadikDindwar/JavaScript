// Write a while loop to print numbers from 1 to 50.

let num = 1;

while(num<=50){
    console.log(num);
    num++;
}

//write a Js func which extracts the name from email

function extractName(email){
    return email.slice(0 , email.indexOf("@"));
}

console.log(extractName("alice@gmail.com"));


//write a Js function which make name in correct format like first letter Capital and remainiing letter small.

function nameFormat(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(nameFormat("aLiCe"));
