var wordBank = ('horse', 'cattle', 'revolver', 'cowboy', 'lariat', 'horseshoe');

var lives = 6;
var wins = 0;
var losses = 0;
var guesses = 0;

//var horse = ('h', 'o', 'r', 's', 'e');

//var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];

document.onkeyup = function(event) {
    userText.textContent = event.key;
}
var pressedKey = event.key;

//function getLives(guesses) {
//    if (lives === 6) {
//        document.getElementById('lives').innerHTML = '♥ ♥ ♥ ♥ ♥ ♥';
//   }
//    else if (lives === 5) {
//        document.getElementById('lives').innerHTML = '♥ ♥ ♥ ♥ ♥';
//    }
//    else if (lives === 4) {
//        document.getElementById('lives').innerHTML = '♥ ♥ ♥ ♥';
//    }
//    else if (lives === 3) {
//        document.getElementById('lives').innerHTML = '♥ ♥ ♥';
//    }
//    else if (lives === 2) {
//        document.getElementById('lives').innerHTML = '♥ ♥';
//    }
//    else if (lives === 1) {
//        document.getElementById('lives').innerHTML = '♥';
//    }
//    else if (lives === 0) {
//        document.getElementById('lives').innerHTML = 'GAME OVER';
//    }
//}
//Function called by pressing Start button
function gameStart() { 
//Random generation of word choice.
//var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var randWord = 'assessment'
//Begin word logic

//Horse logic testing
if (randWord === 'assessment') {
    document.getElementById("word").innerHTML = '_'.repeat(randWord.length);
    
    
    }
}

function checkKeyPress(key){
    console.log(key.key)
   // if (key.keyCode > '65'){
        
    }

var guessedWord = 'Assessment'
var guessedLetter = 's'
var position = 0;

while (guessedWord.indexOf(guessedLetter, position) != -1 ) {
var firstIndex = guessedWord.indexOf(guessedLetter, position)
position = firstIndex + 1
console.log(firstIndex)
}