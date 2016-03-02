var React = require('react');
var PropTypes = React.PropTypes;
var Square = require('./Square');
var Tile = require('./Tile');

// var Board = React.createClass({

//   renderSquare: function (i) {
//     return (
//       <div key={i}
//       // size for each square is 100/15
//       style={{ width: '6.66666667%', height: '6.66666667%' }}>
//       <Square>
//       <Tile/>
//       </Square>
//       </div>
//     );
//   },

//   render: function () {
//     var squares = [];
//     // 15 x 15 grid = 225 squares
//     for (var i = 0; i < 225; i++) {
//       squares.push(this.renderSquare(i));
//     }
//     return (
//       <div style={{
//         width: '100%',
//         height: '100%',
//         display: 'flex',
//         flexWrap: 'wrap'
//       }}>
//       {squares}
//       </div>
//     );
//   }
// });

var Board = React.createClass({

  renderSquare: function (x,y,index) {
    return (
      <div key={index}
      // size for each square is 100/15
      style={{ width: '6.66666667%', height: '6.66666667%' }}>
      <Square>
      <Tile/>
      </Square>
      </div>
    );
  },

  render: function () {
    var squares = [];
    // 15 x 15 grid = 225 squares
    var index = 0;
    for (var i = 0; i < 15; i++) {
      for (var j = 0; j < 15; j++) {
      squares.push(this.renderSquare(i,j, index));
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
