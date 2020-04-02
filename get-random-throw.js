export default getRandomThrow; 
// const scissors = document.getElementById('scissors');
// const paper = document.getElementById('paper');
// const rock = document.getElementById('rock');

function getRandomThrow() {
    let randomThrow = Math.round(Math.random() * 3);
    if (randomThrow === 1) {
        return 'scissors';
    } else if (randomThrow === 2) {
        return 'paper';
    } else {
        return 'rock';
    }
}
console.log(getRandomThrow());