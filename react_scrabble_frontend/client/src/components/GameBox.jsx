var React = require('react');
var ScoreBox = require('./ScoreBox.jsx');

var GameBox = React.createClass({
  render: function() {
    return (
    <div>
      <h2>Game Box</h2>
      <ScoreBox/>
    </div>
    );
  }
});

module.exports = GameBox;