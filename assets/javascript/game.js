var wins = 0;
var losses = 0;
var guessedLetter = '';
var lives = 0;
var answerArray = [];
var word = '';
var display;

var words = [
    "cowboy",
    "lariat",
    "horses",
    "bronco",
    "pistol",
    "latigo",
    "saddle",
    "cactus",
    "gaucho",
    "drover",
    "farmer",
    "tieman",
    "peeler",
    "ambush"
    ];
    //pick a random word
    
function gameStart() {
    reset();
    //generate random word
    var word = words[Math.floor(Math.random() * words.length)];
    console.log(word)
    //loop to create underscores and join them to a string
    for ( var i = 0; i < word.length; i++) {
            answerArray[i] = '_';
        }   
    display = answerArray.join('');
    //pushes the string to the DOM
    document.getElementById('word').innerHTML = display;
    //creates the guess function
    function guess() {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === guessedLetter){
                answerArray[i] = guessedLetter;
            }
        }    
        
        lives++;
        
        document.getElementById('lives').innerHTML = lives;
        document.getElementById('word').innerHTML = answerArray.join('');
        
        //set win/loss conditions
        var checking = answerArray.indexOf("_");

        if (checking = 0) {
            alert('You win!')
            wins = wins + 1
            document.getElementById('wins').innerHTML = wins;
        }

        if(lives > 10) {
            alert('You lose!')
            losses = losses + 1
            document.getElementById('losses').innerHTML = losses;
        }
    }
    //listens to keypress, pulls the keycode, converts to string, and runs the guess function
    document.onkeypress = function(e) {
        e = e || window.event;
        var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
        guessedLetter = String.fromCharCode(charCode);
        console.log(guessedLetter)
        guess();
        };
}

function reset () {
        //resets the word and lives areas
        document.getElementById('word').innerHTML = '';
        lives = 0;
        document.getElementById('lives').innerHTML = lives;
}
