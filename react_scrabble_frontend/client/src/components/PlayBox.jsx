var React = require('react');
var BoardBox = require('./BoardBox.jsx');
var RackBox = require('./RackBox.jsx');

var PlayBox = React.createClass({
  render: function() {
    return (
      <div>
        <h3>PlayBox</h3>
        <BoardBox/>
        <RackBox tilePosition={[16, 2]}/>
      </div>
      )
  }
});

module.exports = PlayBox;