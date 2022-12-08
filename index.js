
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

const button1 = document.querySelector('#btn1')
const button2 = document.querySelector('#btn2')
const button3 = document.querySelector('#btn3')

button1.addEventListener(onclick, ()  => {


     round()

     while (playerChoice != "quit") {
          playerChoice = prompt(
               "Please enter Rock, Paper or Scissors or type 'quit' to quit",
          ).toLowerCase();
     
          input = randomNumber = Math.floor(Math.random() * 3);
     
          result = round(computerPlay(input), player(playerChoice));
     
          playerChoice == "quit" ? alert("thank exe for playing :") : alert(result);
          console.log(result);
     }
     
} )

button2.addEventListener(onclick, computerPlay())











let playerChoice;

function player(playerChoice) {
	let decision = " ";
	if (playerChoice == "rock") {
		decision = "rock";
	} else if (playerChoice == "paper") {
		decision = " paper";
	} else {
		decision = "scissors";
	}
	return decision;
}

let input = (randomNumber = Math.floor(Math.random() * 3));
function computerPlay(input) {
	let choice = "";
	if (input == 0) {
		choice = "rock";
	} else if (input == 1) {
		choice = " paper";
	} else {
		choice = "scissors";
	}
	return choice;
}
function round(comp, play) {
	if (play == "rock" && comp == "scissors") {
		final = "You win, rock beats scissors";
	} else if (play == "rock" && comp == "paper") {
		final = "You lose, paper beats rock";
	} else if (play == "rock" && comp == "rock") {
		final = "You draw both rock";
	} else if (play == "paper" && comp == "scissors") {
		final = "You lose, scissor beats paper ";
	} else if (play == "paper" && comp == "rock") {
		final = "You win, paper beats rock";
	} else if (play == "paper" && comp == "paper") {
		final = "draw, both paper";
	} else if (play == "scissors" && comp == "scissors") {
		final = "You draw both scissors";
	} else if (play == "scissors" && comp == "rock") {
		final = "You lose, rock beats scissors";
	} else if (play == "scissors" && comp == "paper") {
		final = "You win, scissors beats paper";
	} else {
		final = "No winner, error";
	}
	return final;
}

while (playerChoice != "quit") {
	playerChoice = prompt(
		"Please enter Rock, Paper or Scissors or type 'quit' to quit",
	).toLowerCase();

	input = randomNumber = Math.floor(Math.random() * 3);

	result = round(computerPlay(input), player(playerChoice));

	playerChoice == "quit" ? alert("thank exe for playing :") : alert(result);
	console.log(result);
}

console.log("Thank exe for playing :");
