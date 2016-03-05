var React = require('react');
var BoardBox = require('./BoardBox.jsx');
var RackBox = require('./RackBox.jsx');

var PlayBox = React.createClass({
  render: function() {
    return (
      <div>
        <h3>PlayBox</h3>
        <BoardBox/>
        <RackBox tilePosition={[[16, 0, "A"],[16, 1, "B"],[16, 2, "C"],[16, 3, "D"],[16, 4, "E"],[16, 5, "F"],[16, 6, "G"]]}/>
      </div>
      )
  }
});

module.exports = PlayBox;