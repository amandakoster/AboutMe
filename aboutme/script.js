'use strict';

var name = prompt('what is your name?');
alert('welcome' + name);
console.log('Welcome ' + name + '!');

var answer2 = prompt('Do you think Amanda is a native Seattleite?');
console.log(answer2);
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
  alert('Hmm. For some reason ' + name + ' thinks Amanda is a native Seattleite.');
} else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
  alert ('You\'re correct! Amanda is not originally from Seattle.');
} else {
  alert(name + ' ,' + 'Ya gotta play to get to the end. Humor me!');
}

var answer3 = prompt('Not sure? Ok. Do I use my turn signal while driving?');
console.log(answer3);
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
  alert('Yes, of course!');
} else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
  alert('Nope.');
} else {
  alert('You didn\'t put in an answer!');
}

var answer4 = prompt('Ok. Do I use an umbrella?');
console.log(answer4);
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
  alert('Yes! Even though I\'m not native, I think umbrellas are a pain.');
} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
  alert('Sorry, Gortex is cool.');
} else {
  alert('C\'mon, just answer the question!');
}

var answer5 = prompt('Last question. Do I say sub or hogie??');
console.log(answer5);
if (answer5.toLowerCase() === 'sub' || answer5.toLowerCase() === 'S'){
  alert('Sub.');
} else if (answer5.toLowerCase() === 'hogie' || answer5.toLowerCase() === 'h') {
  alert('The user is unfortunately not ready to rumble.');
} else {
  alert('You didn\'t put in a proper answer!');
}

var step;
for (step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}

for (var i = 0; i < 5; i++){
  var answer = prompt('Pick a number between 1 and 50');
  console.log(typeof answer);
  if (answer == 27){
    alert('Nice job! You guessed right!');
    console.log(answer);
    break;
  } else {
    alert('Sorry, guess again!');
    console.log(answer);
  }
}

for (var i = 0; i < 6; i++){
  var answer = prompt('What is one color of the Romanian flag?');
  var possibleAnswers = ['red','yellow','blue'];
  console.log(typeof answer);
  if (possibleAnswers.includes(answer)){
    alert('Nice job! You guessed right!');
    console.log(answer);
    break;
  }
  else {
    alert('Sorry, guess again!');
    console.log(answer);
  }
  
