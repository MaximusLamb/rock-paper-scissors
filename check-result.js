export default checkResult;


function checkResult(playerChoice, computerResult){
    if (playerChoice === computerResult) {
        return 'draw';
    } else if (playerChoice === 'scissors' && computerResult === 'rock') {
        return 'lose';
    } else if (playerChoice === 'paper' && computerResult === 'scissors') {
        return 'lose';
    } else if (playerChoice === 'rock' && computerResult === 'paper') {
        return 'lose';
    } else {
        return 'win';
    }

};