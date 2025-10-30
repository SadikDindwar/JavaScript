//Write a JavaScript function which return random character from your name

function generateRandom(name){
    return name.charAt(Math.floor(Math.random() * name.length))
}

console.log(generateRandom("Sadik"))

// game

let player ="stone";
let random = Math.floor((Math.random() * 3)+1);
let computer = random === 1 ? "stone":random === 2 ? "paper" : "scissor";

function check(player , computer){
    if(player === computer) return `Player : ${player}\nComputer : ${computer}\nMatch Draw`;
    else if((player === "stone" && computer === "paper") || (player === "paper" && computer === "scissor") || (player === "scissor" && computer === "stone")){
        return `Player : ${player}\nComputer : ${computer}\nComputer Win.`;
    }
    else{
         return `Player : ${player}\nComputer : ${computer}\nPlayer Win.`;
    }
}

console.log(check(player  , computer));