//An array containing the words to be chosen from.
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
var randWord = 'horse'
//Begin word logic

//Horse logic testing
if (randWord === 'horse') {
    document.getElementById("slot1").innerHTML = '_';
    document.getElementById("slot2").innerHTML = '_';
    document.getElementById("slot3").innerHTML = '_';
    document.getElementById("slot4").innerHTML = '_';
    document.getElementById("slot5").innerHTML = '_';
    document.getElementById("slot6").innerHTML = '';
    document.getElementById("slot7").innerHTML = '';
    document.getElementById("slot8").innerHTML = '';
    }
}

function checkKeyPress(key){
    if (key.keyCode == '72'){
        document.getElementById("slot1").innerHTML = 'H';
    }
    if (key.keyCode == '79'){
        document.getElementById("slot2").innerHTML = 'O';
    }
    if (key.keyCode == '82'){
        document.getElementById("slot3").innerHTML = 'R';
    }
    if (key.keyCode == '83'){
        document.getElementById("slot4").innerHTML = 'S';
    }
    if (key.keyCode == '69'){
        document.getElementById("slot5").innerHTML = 'E';
    }
    else {
       lives = lives - 1;
    }
}
