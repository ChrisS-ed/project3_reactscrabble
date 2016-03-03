// bag holds all letters at start of game, and player takes letters from bag. Game ends only after bag is empty

// NEED TO ADD TWO BLANK TILES LATER

var englishLetters = [
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

var grabTiles = function(bag, tilesWanted) {
  var lettersGrabbed = [];
  for (var i = 0; i < tilesWanted; i++) {
    var newLetter = bag.shift();
    console.log(newLetter);
    lettersGrabbed.push(newLetter);
  };
  return lettersGrabbed;
}

// var bag = shuffle(englishLetters);
// console.log(bag, bag.length);
// var test = grabTiles(bag, 7);
// console.log("Letters grabbed", test, test.length);
// console.log("New bag", bag, bag.length);

module.exports = bag;

