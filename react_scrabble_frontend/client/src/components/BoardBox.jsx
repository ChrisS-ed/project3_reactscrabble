var React = require('react');
var Board = require('./../Board.js');

var BoardBox = React.createClass({
  render: function() {
    return (
      <div>
        <h4>BoardBox</h4>
        <Board tilePosition={[2, 2]}/>
      </div>
      )
  }
});

module.exports = BoardBox;