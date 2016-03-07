var React = require('react');
var Board = require('./Board.jsx');

var BoardBox = React.createClass({
  render: function() {
    return (
      <div>
        <h4>BoardBox</h4>
        <Board 
          tilePosition={[2, 2, "A", false]}
          data={this.props.data}
          onSquareClick={this.props.onSquareClick}/>
      </div>
      )
  }
});

module.exports = BoardBox;