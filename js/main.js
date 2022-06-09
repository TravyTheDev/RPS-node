document.querySelector('#button').addEventListener('click', choice)
let result = document.querySelector('#result')

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

    // if (playerSelection === 'rock' && computerSelection === 'Scissors') {
    //     ++playerScore;
    //     let win = 'Ok ok, nice one. Rock smashed Scissors';
    //     return win; 
    // } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
    //     ++playerScore;
    //     let win = 'Good for you! Paper covered Rock';
    //     return win; 
    // } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
    //     ++playerScore;
    //     let win = 'Solid guess. Scissors cut Paper';
    //     return win; 
    // } else if ((playerSelection === 'rock' && computerSelection === 'Rock') || 
    // (playerSelection === 'paper' && computerSelection === 'Paper') || 
    // (playerSelection === 'scissors' && computerSelection === 'Scissors')) {
    //     let tie = 'Draw';
    //     return tie; 
    // } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
    //     ++computerScore;
    //     let lose = 'Paper covered Rock. Loser!';
    //     return lose; 
    // } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
    //     ++computerScore;
    //     let lose = 'Scissors cut Paper. You are garbage!';
    //     return lose; 
    // } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
    //     ++computerScore;
    //     let lose = 'Rock broke Scissors. Yikes!';
    //     return lose; 
    // } else {
    //     let error = 'Please click Rock, Paper or Scissors';
    //     return error; 
    // }
}
