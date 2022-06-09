document.querySelector('#button').addEventListener('click', choice)
let result = document.querySelector('#result')
let winOrLose = document.querySelector('#win-or-lose')
let playerScore = document.querySelector('#player-score')
let botScore = document.querySelector('#bot-score')

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
    let playerScore = 0
    let botScore = 0
    if (choice === 'rock' && botChoice === 'scissors') {
        playerScore.textContent = playerScore+=
        winOrLose.textContent = 'Ok ok, nice one. Rock smashed Scissors';
        
    } else if (choice === 'paper' && botChoice === 'rock') {
        playerScore.textContent = playerScore+=
        winOrLose.textContent = 'Good for you! Paper covered Rock';
        
    } else if (choice === 'scissors' && botChoice === 'paper') {
        playerScore.textContent = playerScore+=
        winOrLose.textContent = 'Solid guess. Scissors cut Paper';
        
    } else if ((choice === 'rock' && botChoice === 'rock') || 
    (choice === 'paper' && botChoice === 'paper') || 
    (choice === 'scissors' && botChoice === 'scissors')) {
        winOrLose.textContent = 'Draw';
        
    } else if (choice === 'rock' && botChoice === 'paper') {
        botScore +=
        winOrLose.textContent = 'Paper covered Rock. Loser!';
        
    } else if (choice === 'paper' && botChoice === 'scissors') {
        botScore +=
        winOrLose.textContent = 'Scissors cut Paper. You are garbage!';
        
    } else if (choice === 'scissors' && botChoice === 'rock') {
        botScore +=
        winOrLose.textContent = 'Rock broke Scissors. Yikes!';
    }
}
