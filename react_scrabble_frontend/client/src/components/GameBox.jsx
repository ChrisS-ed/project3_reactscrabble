var React = require('react');
var ScoreBox = require('./ScoreBox.jsx');
var PlayBox = require('./PlayBox.jsx');
var ButtonBox = require('./ButtonBox.jsx');
var Bag = require('./../Bag.js');
var bag = new Bag();
var tilesInPlay = [];
var playedTiles = [];
var messageText = "";

var GameBox = React.createClass({
  
  //get seven letters from bag for initial rack
  getInitialState: function(){
    var rackTiles = bag.grabTiles(7);
    for (var i = 0; i < rackTiles.length; i++) {
      tilesInPlay.push([16, i, rackTiles[i], false]);
    };
    playedTiles = [];
    messageText = "Place your letters";
    return {
      tilesInPlay,
      playedTiles,
      messageText
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

  handleSquareClick: function(x,y) {
      console.log("Clicked on Board X:", x, "Board Y:", y);

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

  tilesPositionOnBoardValid: function() {

    // filter out tiles from tilesInPlay that are on board instead of rack
    var onBoard = function(tile) {
        return tile[0] !== 16;
    }
    var tilesOnBoard = tilesInPlay.filter(onBoard);
    console.log(tilesOnBoard);

    // check at least one letter placed on board
    if (tilesOnBoard.length === 0) {
      console.log("Invalid play: no letters placed on board");
      this.setState({
        messageText: "Invalid play: no letters placed on board"
      });
      return;
    };

    // check tiles placed on board are all in same horizontal line or same vertical line. Also set variable to indicate if word is horizontal or vertical
    var horizontalWord = true;
    var verticalWord = true;
    for (var i = 0; i < tilesOnBoard.length; i++) {
      // console.log("tilesOnBoard[i][0] ", tilesOnBoard[i][0]);
      // console.log("tilesOnBoard[0][0] ", tilesOnBoard[0][0]);
      if ((tilesOnBoard[i][0] !== tilesOnBoard[0][0]) && (tilesOnBoard[i][1] !== tilesOnBoard[0][1])) {
        console.log("Invalid play: letters not placed in horizontal or vertical line");
        this.setState({
          messageText: "Invalid play: letters not placed in horizontal or vertical line"
        });
        return;
      }
      if (tilesOnBoard[i][0] !== tilesOnBoard[0][0]) {
        horizontalWord = false;
      };
      if (tilesOnBoard[i][1] !== tilesOnBoard[0][1]) {
        verticalWord = false;
      };
    };
    console.log("Horizontal? ", horizontalWord);
    console.log("Vertical? ", verticalWord);

    // check no blank tiles between tiles place on board (will need to check if any gaps are filled by existing tile on board)


    // sort letters by sequential placing
    for (var i = 0; i < tilesOnBoard.length; i++) {
      console.log("Before sort, letter: ", i, tilesOnBoard[i][2]);
    };
    if (horizontalWord) {
      var sortedWord = tilesOnBoard.sort(function(a, b) {
        return a[1] - b[1];
      })
    };
    if (verticalWord) {
      var sortedWord = tilesOnBoard.sort(function(a, b) {
        return a[0] - b[0];
      })
    };
    for (var i = 0; i < sortedWord.length; i++) {
      console.log("After sort, letter: ", i, sortedWord[i][2]);
    };


    // check spelling

  
    // remove played letters in sortedWord from tilesInPlay
    for (var i = tilesInPlay.length-1; i>=0; i--) {
      var x = tilesInPlay[i][0];
      var y = tilesInPlay[i][1];
      console.log(x,y, tilesInPlay[i][2]);
      for (var j = 0; j < sortedWord.length; j++) {
        if (x === sortedWord[j][0] && y === sortedWord[j][1]) {
          console.log("FOUND ONE: ", tilesInPlay[i][2]);
          tilesInPlay.splice(i,1);
        }
      }
    };
    console.log("After letter removal: tilesInPlay: ", tilesInPlay);
    console.log("After letter removal: sortedWord: ", sortedWord);


    // place letters on board (playedTiles)
    for (var i = 0; i < sortedWord.length; i++) {
      playedTiles.push([sortedWord[i][0], sortedWord[i][1], sortedWord[i][2]]);
    };
    console.log(playedTiles);
    this.setState({
      playedTiles: playedTiles
    });

    // fill empty rack slots with letters from bag

  },

  handlePlayButtonClick: function() {
    console.log("IN GAMEBOX: Clicked play word");
    this.tilesPositionOnBoardValid();
  },

  replaceAllTilesInPlay: function() {
    tilesInPlay = [];
    var rackTiles = bag.grabTiles(7);
    for (var i = 0; i < rackTiles.length; i++) {
      tilesInPlay.push([16, i, rackTiles[i], false]);
    };
    this.setState({
      tilesInPlay: tilesInPlay
    });
  },

  handleNewTilesButtonClick: function() {
    console.log("IN GAMEBOX: Clicked New Tiles");
    this.replaceAllTilesInPlay();
  },

  render: function() {
  console.log("rendering");
    return (
    <div>
      <h2>Scrabble Solitaire</h2>
      <ScoreBox/>
      <PlayBox 
        data={this.state.tilesInPlay}
        playedTiles={this.state.playedTiles}
        onSquareClick={this.handleSquareClick}/>
      <ButtonBox
        message={this.state.messageText}
        onPlayButtonClick={this.handlePlayButtonClick}
        onNewTilesButtonClick={this.handleNewTilesButtonClick}/>
    </div>
    );
  }
});

module.exports = GameBox;