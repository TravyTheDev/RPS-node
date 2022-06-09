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
}
