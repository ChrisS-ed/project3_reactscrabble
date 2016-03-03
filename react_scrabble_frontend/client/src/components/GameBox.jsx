var React = require('react');
var ScoreBox = require('./ScoreBox.jsx');
var PlayBox = require('./PlayBox.jsx');
var ButtonBox = require('./ButtonBox.jsx');
var Bag = require('./../Bag.js');

var GameBox = React.createClass({

  //place seven letters from bag on rack
  getInitialState: function(){
    var bag = new Bag();
    var rackTiles = bag.grabTiles(bag.contents, 7);
      return {
        rackTiles
      }
    },

  render: function() {
    return (
    <div>
      <h2>GameBox</h2>
      <ScoreBox/>
      <PlayBox/>
      <ButtonBox/>
    </div>
    );
  }
});

// var bag = new Bag();
// console.log(bag.contents);
// var firstTiles = bag.grabTiles(bag.contents, 7);
// console.log("firstTiles", firstTiles);
//console.log("New bag", bag.contents, bag.contents.length);
//console.log("IN GAMEBOX:", bag.contents, bag.contents.length);

module.exports = GameBox;