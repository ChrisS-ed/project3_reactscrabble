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

  handleSquareClick: function(X,Y) {
      console.log("Rack X:", X, "Rack Y:", Y);
      this.setState({
        
      });
    },

  render: function() {
    
    return (
    <div>
      <h2>GameBox</h2>
      <ScoreBox/>
      <PlayBox 
        data={this.state.tilesInPlay}
        onSquareClick={this.handleSquareClick}/>
      <ButtonBox/>
    </div>
    );
  }
});

module.exports = GameBox;