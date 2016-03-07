var React = require('react');
var BoardBox = require('./BoardBox.jsx');
var RackBox = require('./RackBox.jsx');

var PlayBox = React.createClass({
  render: function() {
    return (
      <div>
        <h3>PlayBox</h3>
        <BoardBox/>
        <RackBox
          data={this.props.data}
          onSquareClick={this.props.onSquareClick}/>
      </div>
    )
  }
});

module.exports = PlayBox;