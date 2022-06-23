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










