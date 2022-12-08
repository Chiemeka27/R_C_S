
/*
let playerChoice = prompt("Please enter Rock, Paper or Scissors").toLowerCase()


function player(playerChoice) {
    
    let decision = " "
    if (playerChoice == "rock") {
         decision = "rock"
    } else if (playerChoice == "paper") {
         decision = " paper"
    } else {
         decision = "scissors"
    }
    return decision
}
    
let input = randomNumber = Math.floor(Math.random()*3) ;
    function computerPlay(input){
        
        let choice = " ";
        if (input == 0 ) {
             choice = "Rock"
        } else if ( input == 1) {
             choice = " Paper"
        } else {
             choice = "Scissors"
        }
         return choice
    }

  

    function round (comp,  play) {
         computerPlay();
        const comp = computerPlay();
        let final = " ";
         if ( play == "rock"  &&  comp == "scissors") {
              final = "You win, rock beats scissors";
         } 
         else if ( play == "rock" &&  comp == "paper") {
                  final = "You lose, paper beats rock";
        } 
        else if ( play == "rock"  &&  comp == "rock" ) {
                  final = "You draw both rock";
        } 
        else if ( play == "paper"  &&  comp == "scissors" ) {
                 final = "You lose, scissor beats paper ";
        } 
        else if ( play == "paper"  &&  comp == "rock" ) {
                  final = "You win, paper beats rock";
                        } 
        else if ( play == "paper"  &&  comp == "paper") {
                 final = "draw, both paper";
        } 
        else if ( play == "scissors"  &&  comp == "scissors" ) {
                 final = "You draw both scissors";
    } else if ( play == "scissors"  &&  comp == "rock" ) {
                 final = "You lose, rock beats scissors";
} else if ( play == "scissors"  &&  comp == "paper" ) {
                 final = "You win, scissors beats paper";
}
else {
                 final = "No winner, error";
        
    }

return final
}


const play =  "rock";
console.log(round(comp, play));

*/

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
	if (play == "rock" && comp == "rock" ) {
		final = "You draw both rock ";
	} else if (play == "scissors" && comp == "scissors") {
		final = "You draw both scissors";
	} else if (play == "paper" && comp == "paper") {
		final = "draw, both paper";
	} else if (play == "rock" && comp == "paper") {
		final = "You lose, paper beats rock";
	} else if (play == "rock" && comp =="scissors") {
		final = "You win, rock beats scissors";
	} else if (play == "paper" && comp == "rock") {
		final = "You win, paper beats rock";
	} else if (play == "paper" && comp == " scissors" ) {
		final = " You lose, scissor beats paper";
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
