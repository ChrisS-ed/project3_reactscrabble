// bag holds all letters at start of game, and player takes letters from bag. Game ends only after bag is empty

// NEED TO ADD TWO BLANK TILES LATER

englishLetters = [
"A", "A", "A", "A", "A", "A", "A", "A", "A",
"B", "B", "B",
"C", "C",
"D", "D", "D", "D",
"E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
"F", "F",
"G", "G", "G",
"H", "H",
"I", "I", "I", "I", "I", "I", "I", "I", "I",
"J",
"K",
"L", "L", "L", "L",
"M", "M",
"N", "N", "N", "N", "N", "N",
"O", "O", "O", "O", "O", "O", "O", "O",
"P", "P",
"Q",
"R", "R", "R", "R", "R", "R",
"S", "S", "S", "S",
"T", "T", "T", "T", "T", "T",
"U", "U", "U", "U",
"V", "V",
"W", "W",
"X",
"Y", "Y",
"Z" 
];

// Randomize array order using Durstenfeld shuffle algorithm.
var shuffle = function(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var Bag = shuffle(englishLetters);

module.exports = Bag;

