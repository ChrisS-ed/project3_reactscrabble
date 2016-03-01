var React = require('react');
var Tile = require('./../Tile.js');

var BoardBox = React.createClass({
  render: function() {
    return (
      <div>
        <h4>BoardBox</h4>
        <Tile/>
      </div>
      )
  }
});

module.exports = BoardBox;