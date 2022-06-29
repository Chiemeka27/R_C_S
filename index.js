
/*
let playerChoice = prompt("Please enter Rock, Paper or Scissors").toLowerCase()


function player(playerChoice) {
    
    let decision = " "
    if (playerChoice == "rock") {
        return decision = "rock"
    } else if (playerChoice == "paper") {
        return decision = " paper"
    } else if (playerChoice == "scissors") {
        return decision = "scissors"
    }
    
       
    function computerPlay(){
        let num = randomNumber = Math.floor(Math.random()*3) + 1;
        let choice = " ";
        if (num == 1) {
            return choice = "Rock"
        } else if ( num == 2) {
            return choice = " Paper"
        } else {
            return choice = "Scissors"
        }
        
    }

   

    function round (playerSelection = player(), computerSelection = computerPlay() ) {
   
        
         if ( playerSelection == "rock"  &&  computerSelection == "scissors") {
              console.log(" You win, rock beats scissors")
         } 
         else if ( playerSelection == "rock" &&  computerSelection == "paper") {
                  console.log("You lose, paper beats rock")
        } 
        else if ( playerSelection == "scissors"  &&  computerSelection == "rock" ) {
                  console.log(" You lose, rock beats rock beats scissors")
        } 
        else if ( playerSelection == "scissors"  &&  computerSelection == "paper" ) {
                 console.log ("You win, scissors beats paper")
        } 
        else if ( playerSelection == "paper"  &&  computerSelection == "rock" ) {
                  console.log("You win, paper beats rock")
        } 
        else if ( playerSelection == "paper"  &&  computerSelection == "scissors") {
                 console.log("You lose, scissors beats paper ")
        } 
        else if ( playerSelection ==  computerSelection  ) {
                 console.log("No winner, same answer");
        
        }
    }
}


player()

*/
function computerPlay(){
    let num = randomNumber = Math.floor(Math.random()*3) + 1;
    let choice = " ";
    if (num == 1) {
        return choice = "rock"
    } else if ( num == 2) {
        return choice = " paper"
    } else {
        return choice = "scissors"
    }
    
}

function player() {
    let num = randomNumber = Math.floor(Math.random()*3) + 1;
    let decision = " "
    if (num == 1) {
        return decision = "rock"
    } else if (num == 2) {
        return decision = "paper"
    } else  {
        return decision = "scissors"
    }
}



let playerSelection = player();
let computerSelection = computerPlay();
let game = ""
function me(){
    
if ( playerSelection == "rock"  &&  computerSelection == "scissors") {
    return  game = " You win, rock beats scissors";
} 
else if ( playerSelection == "rock" &&  computerSelection == "paper") {
        return game = "You lose, paper beats rock";
} 
else if ( playerSelection == "rock" &&  computerSelection == "rock") {
    return game = "no winner,rr";
} 
else if ( playerSelection == "scissors"  &&  computerSelection == "rock" ) {
        return game = "You lose, rock beats scissors";
} 
else if ( playerSelection == "scissors"  &&  computerSelection == "paper" ) {
       return game = "You win, scissors beats paper";
} 
else if ( playerSelection == "scissors"  &&  computerSelection == "scissors" ) {
    return game = "no winner, ss";
} 
else if ( playerSelection == "paper"  &&  computerSelection == "rock" ) {
        return game = "You win, paper beats rock";
} 
else if ( playerSelection == "paper"  &&  computerSelection == "scissors") {
       return game = "You lose, scissors beats paper ";
} 
else if ( playerSelection == "paper"  &&  computerSelection == "paper" ) {
    return game = "no winner, pp";
} 
else {
    console.log("nahhhhhh")
}
}

console.log(me())
console.log(playerSelection);
console.log(computerSelection)
console.log(game)

 /*if ( playerSelection == "rock"  &&  computerSelection == "scissors") {
    return  game = " You win, rock beats scissors"
} 
else if ( playerSelection == "rock" &&  computerSelection == "paper") {
        return game = "You lose, paper beats rock"
} 
else if ( playerSelection == "scissors"  &&  computerSelection == "rock" ) {
        return game = " You lose, rock beats rock beats scissors"
} 
else if ( playerSelection == "scissors"  &&  computerSelection == "paper" ) {
       return game = "You win, scissors beats paper"
} 
else if ( playerSelection == "paper"  &&  computerSelection == "rock" ) {
        return game = "You win, paper beats rock"
} 
else if ( playerSelection == "paper"  &&  computerSelection == "scissors") {
       return game = "You lose, scissors beats paper "
} 
else {
       return game = "No winner, same answer"

}
*/