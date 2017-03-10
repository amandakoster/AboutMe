'use strict';

var correct = 0;
var name = prompt('what is your name?');
alert('Welcome ' + name + '!');
console.log('Welcome ' + name + '!');

function answer2() {
var answer2 = prompt('Do you think Amanda is a native Seattleite?');
console.log(answer2);
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
  alert('Hmm. For some reason ' + name + ' thinks Amanda is a native Seattleite.');
} else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
  alert ('You\'re correct! Amanda is not originally from Seattle.');
  correct++;
} else {
  alert(name + ' ,' + 'Ya gotta play to get to the end. Humor me!');
}
}
answer2();

function turnSignal() {
var answer3 = prompt('Not sure? Ok. Do I use my turn signal while driving?');
console.log(answer3);
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
  alert('Yes, of course!');
  correct++;
} else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
  alert('Nope.');
} else {
  alert('You didn\'t put in an answer!');
}
}
turnSignal()

function umbrella() {
var answer4 = prompt('Ok. Do I use an umbrella?');
console.log(answer4);
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
  alert('Yes! Even though I\'m not native, I think umbrellas are a pain.');
  correct++;
} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
  alert('Sorry, Gortex is cool.');
} else {
  alert('C\'mon, just answer the question!');
}
}
umbrella();

function sub() {
var answer5 = prompt('Last question. Do I say sub or hogie??');
console.log(answer5);
if (answer5.toLowerCase() === 'sub' || answer5.toLowerCase() === 'S'){
  alert('Sub.');
  correct++;
} else if (answer5.toLowerCase() === 'hogie' || answer5.toLowerCase() === 'h') {
  alert('The user is unfortunately not ready to rumble.');
} else {
  alert('You didn\'t put in a proper answer!');
}
}
sub();

function twentySeven() {
for (var i = 0; i < 5; i++){
  var answer = prompt('Pick a number between 1 and 50');
  console.log(typeof answer);
  if (answer == 27){
    alert('Nice job! You guessed right!');
    correct++;
    console.log(answer);
    break;
  } else {
    alert('Sorry, guess again!');
    console.log(answer);
  }
}
}
twentySeven();

function color() {
for (var i = 0; i < 6; i++){
  var answer = prompt('What is one color of the Romanian flag?');
  var possibleAnswers = ['red','yellow','blue'];
  console.log(typeof answer);
  if (possibleAnswers.includes(answer)){
    alert('Nice job! You guessed right!');
    correct++;
    console.log(answer);
    break;
  }
  else {
    alert('Sorry, guess again!');
    console.log(answer);
  }
}
}
color();

alert('The colors of the Romanian flag are red, yellow, blue!');
alert('Awesome, ' + name + '! You got ' + correct + ' out of 7 questions correct!');
