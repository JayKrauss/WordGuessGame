//An array containing the words to be chosen from.
var wordBank = ('horse')
var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];

document.onkeyup = function(event) {
    userText.textContent = event.key;
}

var pressedKey = event.key;

//Function called by pressing Start button
function gameStart() { 
//Random generation of word choice.
//var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var randWord = 'horse'
//Begin word logic
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

if (pressedKey === 'h'){
   document.getElementById("slot1").innerHTML = 'H';
        
            }
}
