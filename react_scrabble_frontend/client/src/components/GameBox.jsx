var React = require('react');
var ScoreBox = require('./ScoreBox.jsx');
var PlayBox = require('./PlayBox.jsx');
var ButtonBox = require('./ButtonBox.jsx');
var Bag = require('./../Bag.js');
var tilesInPlay = [];

var GameBox = React.createClass({
  
  //get seven letters from bag for initial rack
  getInitialState: function(){
    var bag = new Bag();
    var rackTiles = bag.grabTiles(7);
    for (var i = 0; i < rackTiles.length; i++) {
      tilesInPlay.push([16, i, rackTiles[i], false]);
    };
    return {
      tilesInPlay
    }
  },

  handleSquareClick: function(x,y) {
      console.log("Rack X:", x, "Rack Y:", y);
      console.log("Tilesinplay (before):", tilesInPlay);

      // change this tile's selected tag to true and all other tiles' selected tags to false
      for (var i = 0; i < tilesInPlay.length; i++) {
        if (tilesInPlay[i][0] === x && tilesInPlay[i][1] === y) {
          tilesInPlay[i][3] = true;
        }
        else {
          tilesInPlay[i][3] = false;
        }
        
      };
      console.log("Tilesinplay (after):", tilesInPlay);


      // (highlight square)
      // set state of tilesInPlay

      // this.setState({
        
      // });
    },

  render: function() {
 console.log("rendering")
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