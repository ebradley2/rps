let userScore = 0;
let compScore = 0;
let userSelection;

function userRock() {
    userSelection = 'rock'
    console.log(game())
}

function userPaper() {
    userSelection = 'paper'
    console.log(game())
}

function userScissors() {
    userSelection = 'scissors'
    console.log(game())
}

function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3)

    if (rand == 0) return 'rock'
    else if (rand == 1) return 'paper'
    else if (rand == 2) return 'scissors'
}

function playRound(userSelection, computerSelection) {
    let result;

    // Tie
    if(userSelection == computerSelection)
        result = 'Draw'

    // User wins
    if(userSelection == 'rock' && computerSelection == 'scissors'){
        userScore++
        result = 'You Won! Rock beats Scissors'
    }
    if(userSelection == 'paper' && computerSelection == 'rock'){
        userScore++
        result = 'You Won! Paper beats Rock'
    }
    if(userSelection == 'scissors' && computerSelection == 'paper'){
        userScore++
        result = 'You Won! Scissors beats Paper'
    }
    
    // Computer Wins
    if(computerSelection == 'rock' && userSelection == 'scissors'){
        compScore++
        result = 'You Lose, Rock beats Scissors'
    }
    if(computerSelection == 'paper' && userSelection == 'rock'){
        compScore++
        result = 'You Lose, Paper beats Rock'
    }
    if(computerSelection == 'scissors' && userSelection == 'paper'){
        compScore++
        result = 'You Lose, Scissors beats Paper'
    }

    document.getElementById('result').innerHTML = result;
    document.getElementById('userScore').innerHTML = userScore;
    document.getElementById('compScore').innerHTML = compScore;

    return ([result, userScore, compScore])
}

function game() {
    result
    console.log(playRound(userSelection, getComputerChoice()))

    if(userScore == 5 || compScore == 5) {
        document.getElementById('rock').disabled = true
        document.getElementById('paper').disabled = true
        document.getElementById('scissors').disabled = true
        document.getElementById('reset').style.display = 'block'

        if(userScore > compScore) {
            result = 'You Win'
            document.getElementById('result').innerHTML = result
            document.getElementById('result').style.color = 'blue'
        }
        else if (compScore > userScore) {
            result = 'You Lose'
            document.getElementById('result').innerHTML = result
            document.getElementById('result').style.color = 'red'
        }

        return result
    }
}

function resetGame() {
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
    document.getElementById('reset').style.display = 'none';
    compScore = 0;
    userScore = 0;
    document.getElementById('userScore').innerHTML = userScore;
    document.getElementById('compScore').innerHTML = compScore;
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').style.color = 'black'
}

