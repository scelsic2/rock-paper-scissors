const rpsInput = document.querySelector('.rps-input')
const submitBtn = document.querySelector('.submit-btn')
const responseDiv = document.querySelector('.response-div')
const inputP = document.createElement('p')
const scoreDiv = document.querySelector('.score-div')
const winnerDiv = document.querySelector('.winner-div')
const computerChoices = ['Rock', 'Paper', 'Scissors'];

let word = ''
let response = ''

let userScore = 0;
let computerScore = 0;

// computer random select
function computersResponse () {
    const randomI = Math.floor(Math.random() * computerChoices.length)
    response = computerChoices[randomI]
    console.log('computer response: ' + response)
    const computerP = document.createElement('p')
    computerP.innerText = `Computer's Choice: ` + response
    responseDiv.appendChild(computerP)
}

// must recognize r, p, s
function userInput (letter) {
    const caps = letter.toUpperCase()
    
    console.log('user choice: ' + caps)

    switch (caps) {
        case 'R':
            console.log('valid entry')
            word = 'Rock'
            break;
        case 'P':
            console.log('valid entry')
            word = 'Paper'
            break;
        case 'S':
            console.log('valid entry')
            word = 'Scissors'
            break;
        default:
            console.log('invalid entry')
            letter = null
            console.log(letter)
    }

    if (letter != null) {
        computersResponse()
    } else {
        word = ''
        inputP.innerText = ''
        responseDiv.appendChild(inputP)
    }

    return word
}

function printUserInput() {
    let input = userInput(rpsInput.value);
    console.log('print user input: ' + input)

    if (input === ''){
        inputP.innerText = 'Invalid entry. Please try again.'
        responseDiv.appendChild(inputP)
    } else {
      inputP.innerText = 'My Choice: ' + input
    responseDiv.appendChild(inputP)  
    }
    
    return input
}

function scoreKeeper (user, computer) {
    winnerDiv.innerHTML = ''
    scoreDiv.innerHTML = ''

    let winner = ''

    if (user === '') {
        console.log('error')
    } else if (user === computer) {
        userScore = userScore + 1;
        computerScore = computerScore + 1
        winner = `It's a tie!`
    } else if (user === 'Rock' && computer === 'Paper'){
        computerScore = computerScore + 1
        winner = 'Computer'
    } else if (user === 'Rock' && computer === 'Scissors'){
        userScore = userScore + 1;
        winner = 'I'
    } else if (user === 'Paper' && computer === 'Rock'){
        userScore = userScore + 1;
        winner = 'I'
    } else if (user === 'Paper' && computer === 'Scissors'){
        computerScore = computerScore + 1
        winner = 'Computer'
    } else if (user === 'Scissors' && computer === 'Rock'){
        computerScore = computerScore + 1
        winner = 'Computer'
    } else if (user === 'Scissors' && computer === 'Paper'){
        userScore = userScore + 1;
        winner = 'I'
    }

    const printWinner = document.createElement('p')

    if (winner === `It's a tie!`) {
        printWinner.innerHTML = winner
    } else if (winner === 'Computer') {
        printWinner.innerHTML = winner + ' wins!'
    } else if (winner === 'I') {
        printWinner.innerHTML = winner + ' win!'
    }

    winnerDiv.appendChild(printWinner)

    const printUserScore = document.createElement('p')
    printUserScore.innerHTML = 'My Score: ' + userScore
    scoreDiv.appendChild(printUserScore)

    const printComputerScore = document.createElement('p')
    printComputerScore.innerHTML = `Computer's Score: ` + computerScore
    scoreDiv.appendChild(printComputerScore)

}

function go (e) {
    e.preventDefault()
    responseDiv.innerHTML = ''
    printUserInput();
    rpsInput.value = ''
    scoreKeeper(word, response);
}

submitBtn.addEventListener('click', go)