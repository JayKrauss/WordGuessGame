//An array containing the words to be chosen from.
var wordBank = ('horse', 'saddle', 'cowboy', 'cactus', 'cattle', 'revolver', 'railroad', 'desert', 'lariat', 'hat')
var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];



function gameStart() { 
    alert(randWord);

}