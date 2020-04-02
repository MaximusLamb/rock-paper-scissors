import randomThrow from './get-random-throw.js';
import checkResult from './check-result.js';
import getRandomThrow from './get-random-throw.js';

const winsTotal = document.getElementById('winTotal');
const totalsTotal = document.getElementById('totalTotal');
const lossesTotal = document.getElementById('lossTotal');
let button = document.getElementById('RPS');

let wins = 0;
let total = 0;

button.addEventListener('click'), () => {
    let computerThrow = getRandomThrow();
    const playerChoice = document.querySelector('input:checked');
    checkResult(playerChoice, computerThrow);
};
