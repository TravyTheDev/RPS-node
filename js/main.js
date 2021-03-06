document.querySelector('#button').addEventListener('click', choice)
let result = document.querySelector('#result')
let winOrLose = document.querySelector('#win-or-lose')
let userScore = document.querySelector('#player-score')
let computerScore = document.querySelector('#bot-score')

let playerScore = 0
let botScore = 0

async function choice(){
    const choice = document.querySelector('#choice').value
    const res = await fetch(`/api?choice=${choice}`)
    const data = await res.json()
    console.log(data)
    
    
    let botChoice = ""
    if(data.computerChoice === 1){
        botChoice = 'rock'
    }else if(data.computerChoice === 2){
        botChoice = 'paper'
    }else if(data.computerChoice === 3){
        botChoice = 'scissors'
    }
    result.textContent = botChoice
    
    if (choice === 'rock' && botChoice === 'scissors') {
        playerScore += 1
        userScore.textContent = playerScore
        winOrLose.textContent = 'Ok ok, nice one. Rock smashed Scissors';
        
    } else if (choice === 'paper' && botChoice === 'rock') {
        playerScore += 1
        userScore.textContent = playerScore
        winOrLose.textContent = 'Good for you! Paper covered Rock';
        
    } else if (choice === 'scissors' && botChoice === 'paper') {
        playerScore += 1
        userScore.textContent = playerScore
        winOrLose.textContent = 'Solid guess. Scissors cut Paper';
        
    } else if ((choice === 'rock' && botChoice === 'rock') || 
    (choice === 'paper' && botChoice === 'paper') || 
    (choice === 'scissors' && botChoice === 'scissors')) {

        winOrLose.textContent = 'Draw';
        
    } else if (choice === 'rock' && botChoice === 'paper') {

        botScore += 1
        computerScore.textContent = botScore
        winOrLose.textContent = 'Paper covered Rock. Loser!';
        
    } else if (choice === 'paper' && botChoice === 'scissors') {

        botScore += 1
        computerScore.textContent = botScore
        winOrLose.textContent = 'Scissors cut Paper. You are garbage!';
        
    } else if (choice === 'scissors' && botChoice === 'rock') {

        botScore += 1
        computerScore.textContent = botScore
        winOrLose.textContent = 'Rock broke Scissors. Yikes!';
    }
}
