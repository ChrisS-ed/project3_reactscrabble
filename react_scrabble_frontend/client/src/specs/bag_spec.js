var Bag = require('../Bag');
var assert = require('assert');
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

describe('bag', function(){
  it('should initially contain all available Scrabble letters', function(){
    var bag = new Bag();
    bag.contents.sort();
    assert.deepEqual(bag.contents, englishLetters);
  });

  it('should have letters removed from it after letters taken by player', function(){
    var bag = new Bag();
    originalBagSize = bag.contents.length;
    bag.grabTiles(5);
    assert.equal(bag.contents.length, originalBagSize - 5);
  });
})