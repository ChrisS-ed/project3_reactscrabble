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

  selectThisTile: function(x,y) {
    // change this tile's selected tag to true and all other tiles' selected tags to false
    for (var i = 0; i < tilesInPlay.length; i++) {
      if (tilesInPlay[i][0] === x && tilesInPlay[i][1] === y) {
        tilesInPlay[i][3] = true;
      }
      else {
        tilesInPlay[i][3] = false;
      }
    };
  },

  handleRackClick: function(x,y) {
      console.log("Rack X:", x, "Rack Y:", y);
      this.selectThisTile(x,y);
    },

    handleSquareClick: function(x,y) {
        console.log("Board X:", x, "Board Y:", y);

        // abort move if square clicked on already contains a tile - make that tile the new selected tile, remove selected status from old tile
        for (var i = 0; i < tilesInPlay.length; i++) {
          if (tilesInPlay[i][0] === x && tilesInPlay[i][1] === y) {
            console.log("Tile already in that position!");
            this.selectThisTile(tilesInPlay[i][0], tilesInPlay[i][1]);
            return;
          }
        };

        // find tile marked selected true in tilesinplay
        // change tile's X & Y positions to those of square clicked on
        for (var i = 0; i < tilesInPlay.length; i++) {
          if (tilesInPlay[i][3] === true) {
            tilesInPlay[i][0] = x;
            tilesInPlay[i][1] = y;
          }
        };

        this.setState({
          tilesInPlay: tilesInPlay
        });
      },

  render: function() {
  console.log("rendering");
    return (
    <div>
      <h2>GameBox</h2>
      <ScoreBox/>
      <PlayBox 
        data={this.state.tilesInPlay}
        onRackClick={this.handleRackClick}
        onSquareClick={this.handleSquareClick}/>
      <ButtonBox/>
    </div>
    );
  }
});

module.exports = GameBox;