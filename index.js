var userName = prompt('Hi! What\'s your name?');
alert('Welcome to my site, ' + userName + '. I\'d like to play a quick guessing game to help us get acquainted, ' + userName + '. Let\'s see how well you know me!');

var questionOne = prompt ('Was I born in Pennsylvania?', 'Yes or no...');
questionOne = questionOne.toLowerCase();
if (questionOne === 'yes' || questionOne === 'y') {
  alert('Correct! I was born in a suburb of Philadelphia called Lansdale.');
} else if (questionOne === 'no' || questionOne === 'n') {
  alert('Even though I don\'t have the accent I actually was born near Philly.');
} else {
  var altOne = prompt('To play the game you\'ve got to follow the rules! Yes or no please.');
  altOne = altOne.toLowerCase();
  if (altOne === 'yes' || altOne === 'y') {
    alert('Correct! I was born in a suburb of Philadelphia called Lansdale.');
  } else if (altOne === 'no' || altOne === 'n') {
    alert('Even though I don\'t have the accent I actually was born near Philly.');
  } else {
    var wowOne = prompt('Are you drunk?');
    wowOne = wowOne.toLowerCase();
    if (wowOne === 'yes' || wowOne === 'y') {
      alert('It\'s impolite not to share...');
    } else {
      alert('I\'m not sure what to say.');
    }
  }
}; //I can't wait to learn how to do this more elegantly!
var questionTwo = prompt ('Is soccer my favorite sport?', 'Yes or no...');
questionTwo = questionTwo.toLowerCase();
if (questionTwo === 'yes' || questionTwo === 'y') {
  alert ('Yes! There\'s a reason why they call it the beautiful game!');
} else if (questionTwo === 'no' || questionTwo === 'no') {
  alert ('I know, I probably fooled you when I talked about ping pong in my intro. That\'s a close runner up!');
} else {
  var altTwo = prompt ('Sorry, no shades of gray allowed. Yes or no only, please.');
  altTwo = altTwo.toLowerCase();
  if (altTwo === 'yes' || altTwo === 'y') {
    alert('You got it! I still try to play twice a week in an adult leage I\'ve been a part of since I moved to Seattle!');
  } else if (altTwo === 'no' || altTwo === 'n'){
    alert('It get\'s a lot of criticism for being boring because so few goals are scored but every second is exciting if you know what to watch for!');
  } else {
    alert('Yes or no. It\'s so simple!');
  }
};
var questionThree = prompt ('Do I live in Fremont?', 'Yes or no...');
questionThree = questionThree.toLowerCase();
if (questionThree === 'yes' || questionThree === 'y') {
  alert ('Yep. Got a nice little one bedroom condo right there in the Center of the Universe.');
} else if (questionThree === 'no' || questionThree === 'no') {
  alert ('Can\'t imagine living anywhere else!');
} else {
  alert ('Still don\'t have it down by now, huh? A simple yes or no will do!');
};
var questionFour = prompt ('Do I play a musical instrument?', 'Yes or no...');
questionFour = questionFour.toLowerCase();
if (questionFour === 'yes' || questionFour === 'y') {
  alert ('I learned how to play guitar in high school and still make noise with it now and again.');
} else if (questionFour === 'no' || questionFour === 'no') {
  alert ('OK...just because I\'m not very good at it doesn\'t mean that I don\'t \'play\' it!');
} else {
  alert ('Real slow on the uptake, eh? Please, for the love of god, just a yes or a no.');
};
//I used page 79 of the JS text as a reference for these scripts
var hello = 'Welcome to me, ';

var heyThere = hello + userName + '!';

var hi = document.getElementById('welcome');
hi.textContent = heyThere;

var answerMessageOne = 'You answered ' + questionOne + '.';
var pa = document.getElementById('born');
pa.textContent = answerMessageOne;

var answerMessageTwo = 'You answered ' + questionTwo + '.';
var gol = document.getElementById('sport');
gol.textContent = answerMessageTwo;

var answerMessageThree = 'You answered ' + questionThree + '.';
var troll = document.getElementById('live');
troll.textContent = answerMessageThree;

var answerMessageFour = 'You answered ' + questionFour + '.';
var hendrix = document.getElementById('musical');
hendrix.textContent = answerMessageFour;