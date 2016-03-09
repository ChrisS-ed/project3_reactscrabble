var React = require('react');
var Board = require('./Board.jsx');

var BoardBox = React.createClass({
  render: function() {
    return (
      <div>
        <Board 
          data={this.props.data}
          onSquareClick={this.props.onSquareClick}/>
      </div>
      )
  }
});

module.exports = BoardBox;