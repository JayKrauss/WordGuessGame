function checkKeyPress(key){
var words = ["cowboy", "cattle", "lariat", "pancake" ];
 // Random word generation
 var word = words[Math.floor(Math.random() * words.length)];
 // Set up the answer array
 var answerArray = [];
 for (var j = 0; j < word.length; j++) {
 answerArray[j] = "_";
 }
 var remainingLetters = word.length;
 // Begin the game
 while (remainingLetters > 0) {
 // Show the player their progress
 document.getElementById('word').text = (answerArray.join(" "));
 // Get a guess from the player
 var guess = (key.key)
 if (guess === null) {
 break;
 } else if (guess.length !== 1) {
 alert("Please enter a single letter.");
 } else {

 for (var u = 0; u < word.length; u++) {
 if (word[u] === guess) {
 answerArray[u] = guess;
 remainingLetters--;
 }
 }
 }
 }
}
