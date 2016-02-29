var React = require('react');
var BoardBox = require('./BoardBox.jsx');
var TrayBox = require('./TrayBox.jsx');

var PlayBox = React.createClass({
  render: function() {
    return (
      <div>
        <h3>PlayBox</h3>
        <BoardBox/>
        <TrayBox/>
      </div>
      )
  }
});

module.exports = PlayBox;