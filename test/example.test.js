 //IMPORT MODULES under test here:

import checkResult from '../check-result.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
     //Arrange
     // Set up your parameters and expectations
    const playerChoice = 'paper';
    const computerResult = 'rock';
    const expected = 'win';
     //Act 
    //Call the function you're testing and set the result to a const
    const result = checkResult(playerChoice, computerResult);
     //Assert
      //Make assertions about what is expected valid result
    assert.equal(result, expected);
});
checkResult();