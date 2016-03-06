var React = require('react');
var ScoreBox = require('./ScoreBox.jsx');
var PlayBox = require('./PlayBox.jsx');
var ButtonBox = require('./ButtonBox.jsx');
var Bag = require('./../Bag.js');

var GameBox = React.createClass({

  //get seven letters from bag for initial rack
  getInitialState: function(){
    var bag = new Bag();
    var rackTiles = bag.grabTiles(7);

    var tilesInPlay = [];
    for (var i = 0; i < rackTiles.length; i++) {
      tilesInPlay.push([16, i, rackTiles[i], false]);
    };

    return {
      tilesInPlay
    }
  },

  render: function() {
    
    return (
    <div>
      <h2>GameBox</h2>
      <ScoreBox/>
      <PlayBox data={this.state.tilesInPlay}/>
      <ButtonBox/>
    </div>
    );
  }
});

module.exports = GameBox;