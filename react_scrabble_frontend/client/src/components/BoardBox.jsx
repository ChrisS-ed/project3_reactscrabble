var React = require('react');
var Tile = require('./../Tile.js');
var Square = require('./../Square.js');

var BoardBox = React.createClass({
  render: function() {
    return (
      <div>
        <h4>BoardBox</h4>
        <Square>
          <Tile/>
        </Square>
      </div>
      )
  }
});

module.exports = BoardBox;