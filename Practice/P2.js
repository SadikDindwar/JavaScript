//Write a JavaScript function which return random character from your name

function generateRandom(name){
    return name.charAt(Math.floor(Math.random() * name.length))
}

console.log(generateRandom("Sadik"))