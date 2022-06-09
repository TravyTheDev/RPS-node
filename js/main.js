document.querySelector('#button').addEventListener('click', choice)
let result = document.querySelector('#result')

async function choice(){
    const choice = document.querySelector('#choice').value
    const res = await fetch(`/api?choice=${choice}`)
    const data = await res.json()
    console.log(data)
    result.textContent = data.computerChoice

}
// if(computerChoice === 1){
//     return 'rock'
// }else if(computerChoice === 2){
//     return 'paper'
// }else{
//     return 'scissors'
// }