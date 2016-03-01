var React = require('react');
var PropTypes = React.PropTypes;
var Square = require('./Square');
var Tile = require('./Tile');

var Board = React.createClass({
  render: function () {
    return (
      <div>
        <Square>
          <Tile/>
        </Square>
      </div>
    );
  }
});

module.exports = Board;
