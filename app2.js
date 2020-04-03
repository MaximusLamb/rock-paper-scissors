import checkResult from './check-result.js';
import getRandomThrow from '../get-random-throw.js';

const winsTotal = document.getElementById('winTotal');
const totalsTotal = document.getElementById('totalTotal');
const lossesTotal = document.getElementById('lossTotal');
let button = document.getElementById('play-button');

let wins = 0;
let total = 0;
let losses = 0;

button.addEventListener('click', () => {

    const games = document.querySelector('input[type=radio]:checked');
    let playerChoice = games.value;
    let computerThrow = getRandomThrow();

    checkResult(playerChoice, computerThrow);

    if (checkResult(playerChoice, computerThrow) === 'win') {

        wins ++;
        total ++;
        winsTotal.textContent = wins;
        totalsTotal.textContent = total;
        return 'win';

    } else if (checkResult(playerChoice, computerThrow) === 'lose') {
        losses ++;
        total ++;
        lossesTotal.textContent = wins;
        totalsTotal.textContent = total;
        return 'lose';
    } else {
        total ++;
        totalsTotal.textContent = total;
        return 'draw';
    }
});

//<input type="radio" id="game-board--rock" name="move" value="rock" checked></input>