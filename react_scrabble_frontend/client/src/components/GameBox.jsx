var React = require('react');
var ScoreBox = require('./ScoreBox.jsx');
var PlayBox = require('./PlayBox.jsx');
var ButtonBox = require('./ButtonBox.jsx');

var GameBox = React.createClass({

  //place seven letters from bag on rack
  // getInitialState: function(){
  //     var rackTiles = grabTiles(7);
  //     return {
  //       racktiles
  //     }
  //   },

  render: function() {
    return (
    <div>
      <h2>GameBox</h2>
      <ScoreBox/>
      <PlayBox/>
      <ButtonBox/>
    </div>
    );
  }
});

module.exports = GameBox;