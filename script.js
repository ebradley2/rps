function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3)

    if (rand == 0) return 'rock'
    else if (rand == 1) return 'paper'
    else if (rand == 2) return 'scissors'

}

var userPts = 0
var compPts = 0


function playRound(playerSelection, computerSelection) {
    // Tie
    if (playerSelection == computerSelection) console.log("It's a Tie. You both Coose " + computerSelection )

    // Uesr wins
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        userPts++;
        console.log('You Win! Rock beats Scissors');
    }
        
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        userPts++;
        console.log('You Win! Paper beats Rock');
    }
        
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        userPts++;
        console.log('You Win! Scissors beats Paper');
    }

    // Computer wins
    if (computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') {
        compPts++;
        console.log('You Lose! Rock beats Scissors');
    }
        
    else if (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock') {
        compPts++;
        console.log('You Lose! Paper beats Rock');
    }
        
    else if (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper') {
        compPts++;
       console.log('You Lose! Scissors beats Paper');
    } 
        
}



function game() {

    for(let i = 0; i <= 5;i++) {
        const playerSelection = prompt('Choose Rock, Paper, or Scissors: ')
        const computerSelection = getComputerChoice()

        console.log('You chose ' + playerSelection + ' the computer chose ' + computerSelection)

        console.log(playRound(playerSelection, computerSelection))

        console.log('You have ' + userPts + ' | Computer has ' + compPts)
    }

    if (userPts > compPts) console.log('You Win the Game!')
    if (userPts < compPts) console.log('You Lose the Game...Computer Wins!')
    if (userPts == compPts) console.log('Draw')
    
}

game()

