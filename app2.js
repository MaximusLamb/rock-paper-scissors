import checkResult from './check-result.js';
import getRandomThrow from '../get-random-throw.js';

const winsTotal = document.getElementById('winTotal');
const totalsTotal = document.getElementById('totalTotal');
const lossesTotal = document.getElementById('lossTotal');
let button = document.getElementById('play-button');

let wins = 0;
let total = 0;
let losses = 0;

button.addEventListener('click'), () => {
    const games = document.querySelector ('input:checked');
    let playerChoice = games.value;
    console.log(playerChoice);
    let computerThrow = getRandomThrow();
    checkResult(playerChoice, computerThrow);
    if (checkResult(playerChoice, computerThrow) === 'win') {
        wins++;
        total++;
    } else if (checkResult(playerChoice, computerThrow) === 'lose') {
            losses++;
            total++;
        } else  {
        total++};