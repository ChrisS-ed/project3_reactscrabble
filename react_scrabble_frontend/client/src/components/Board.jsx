var React = require('react');
var Square = require('./Square.jsx');
var Tile = require('./Tile.jsx');

var Board = React.createClass({

  handleClick: function(x,y) {
    console.log("CLICK");
    console.log(x,y);
    this.props.onSquareClick(x,y);
  },

  renderSquare: function(x,y,index) {
    var squareContents = null;
    for (var i = 0; i < this.props.data.length; i++) {
      var tileX = this.props.data[i][0];
      var tileY = this.props.data[i][1];
      var tileLetter = this.props.data[i][2];
      var selected = this.props.data[i][3];
      var containsTile = (x === tileX && y === tileY);
      if (containsTile) {
        console.log("BOARD HAS TILE AT: ", x, y)
        squareContents = <Tile letter = {tileLetter} />
        break
      }
    };

    return (
      <div 
        key={index}
        style={{ width: '6.66666667%', height: '6.66666667%' }}
        onClick={this.handleClick.bind(this,x,y)}>
          <Square>
            {squareContents}
          </Square>
      </div>
    );
  },

  render: function () {
    var squares = [];
    // 15 x 15 grid
    var index = 0;
    for (var i = 0; i < 15; i++) {
      for (var j = 0; j < 15; j++) {
      squares.push(this.renderSquare(i,j,index));
      index++;
      };
    }
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
      {squares}
      </div>
    );
  }
});

module.exports = Board;
