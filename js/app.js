'use strict';
var numRight = 0
function popQuiz(){
  var questions = ['Do I own a car?', 'Is JavaScript my first programming language?', ' Have I ever jumped out of an airplane?', 'Have I ever swam with dolphins?', 'Am I comfortable talking about myself?']
  var answersLong = ['no', 'no', 'no', 'yes', 'no']
  var answersShort = ['n', 'n', 'n', 'y', 'n']
  for (var i = 0; i < questions.length; i++) {
    var answer = prompt(questions[i]).toLowerCase().trim();
    if (answer === answersShort[i] || answer === answersLong[i]) {
      console.log('User answered: ' + answer + ' \, was correct.');
      numRight +=1;
    } else {
      console.log('User answered: ' + answer + ' \, was wrong.');
    }
  }
  if (numRight >= 3) {
    alert('You\'re doing great so far, you\'ve got ' + numRight + ' right!  Let\'ts move on.');
  } else {
    alert('You\'ve got ' + numRight + ' right so far.  Let\'s move on.');
  }
  console.log('Numer Correct: ' + numRight);
}
function howManyBikes(){
  var correct = 0;
  var numBikes = 3;
  var numTries = 1;
  while (numTries <5) {
    var answer = prompt('How many bikes have I owned? (as an adult)').toLowerCase().trim();
    answer = parseInt(answer);
    if (answer > numBikes) {
      alert('Your answer was too high, guess again!');
      numTries +=1;
    } else if (answer < numBikes) {
      alert('Your answer was too low, guess again!');
      numTries +=1;
    } else if (answer === numBikes) {
      alert('You are correct!  You got it in ' + numTries + ' tries.');
      numTries +=5;
      correct +=1;
      numRight +=1;
      console.log('Number Correct: ' + numRight);
    } else {
      alert('We won\'t count that one, but please enter a numeric digit, e.g. "2" instead of "two".');
    }
  }
  if (numTries === 5 && correct < 1){
    alert('Sorry, you\'re all out of guesses!');
  }
  console.log('Number Correct: ' + numRight);
}
function guessingGame(){
  var bikeBrands = ['trek', 'kona', 'cannondale'];
  var guesses = 6;
  var correctBrands = 0;
  while (guesses >= 1 && correctBrands === 0) {
    var input = prompt('What brands of bikes have I owned?').toLowerCase().trim();
    var i = 0;
    while (i < bikeBrands.length) {
      if (input === bikeBrands[i] ) {
        alert('Correct!  I\'ve had a Trek and a Cannondale, and now I have a Kona');
        //guesses -=6;
        correctBrands +=1;
        numRight +=1;
        break;
      } else {
        i +=1;
      } if (i >= bikeBrands.length) {
        guesses -=1;
        alert('incorrect, you have ' + guesses + ' guesses left.');
      }
    }
    if (guesses <1) {
      alert('Sorry, you\'re all out of guesses.  I\'ve had a Trek, Cannondale, and a Kona');
    }
  }
  console.log('Number Correct: ' + numRight);
  alert('Congratulations!  You got ' + numRight + ' correct out of 7 questions!');
}
popQuiz();
howManyBikes();
guessingGame();