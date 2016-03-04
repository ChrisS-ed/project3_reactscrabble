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

  it('should return only its remaining letters when asked for more letters than it contains', function(){
    var bag = new Bag();
    bag.contents = ["A", "B", "C"];
    console.log(bag.contents);
    var taken = bag.grabTiles(4);
    assert.equal(taken.length, 3);
  });

  it('should be marked empty when all letters removed', function(){
    var bag = new Bag();
    bag.contents = ["A", "B", "C"];
    console.log(bag.contents);
    assert.equal(bag.empty, false);
    var taken = bag.grabTiles(3);
    assert.equal(bag.empty, true);
  });
})