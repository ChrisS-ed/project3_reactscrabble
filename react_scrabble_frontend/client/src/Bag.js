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

// var grabTiles = function(bag, tilesWanted) {
//   var lettersGrabbed = [];
//   for (var i = 0; i < tilesWanted; i++) {
//     var newLetter = bag.shift();
//     console.log(newLetter);
//     lettersGrabbed.push(newLetter);
//   };
//   return lettersGrabbed;
// }

var Bag = function() {
  this.contents = shuffle(englishLetters);
  this.empty = false;
}

// Bag.prototype = {
//   grabTiles: function(contents, tilesWanted) {
//     var lettersGrabbed = [];
//     for (var i = 0; i < tilesWanted; i++) {
//       var newLetter = contents.shift();
//       console.log(newLetter);
//       lettersGrabbed.push(newLetter);
//     };
//     return lettersGrabbed;
//   }
// }

Bag.prototype = {
  grabTiles: function(tilesWanted) {
    var lettersGrabbed = [];
    if (this.contents.length <= tilesWanted) {
      tilesWanted = this.contents.length;
      this.empty = true;
    }
    for (var i = 0; i < tilesWanted; i++) {
      var newLetter = this.contents.shift();
      console.log(newLetter);
      lettersGrabbed.push(newLetter);
    };
    return lettersGrabbed;
  }
}

// var bag = new Bag();
// originalBagSize = bag.contents.length;
// console.log(originalBagSize);
// bag.grabTiles(5);
// console.log(bag.contents);
// console.log(bag.contents.length);

module.exports = Bag;

