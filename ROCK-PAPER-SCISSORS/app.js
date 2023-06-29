const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')

let userChoice
let computerChoice
let result
// userchoice and computer choice
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    // create random number (+ 1) use because we calculate number start form first

    const randomNumber = Math.floor(Math.random() * 3) + 1 //or you can use possibleChoice.length
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!' 
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose!' 
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!' 
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose!' 
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!' 
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose!' 
    }
    resultDisplay.innerHTML = result
}