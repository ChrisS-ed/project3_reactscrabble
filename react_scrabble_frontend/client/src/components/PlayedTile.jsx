var React = require('react');

var PlayedTile = React.createClass({
  
  render: function () {
    var letter = this.props.letter;
    return (<div style={
      { backgroundColor: 'white',
        color: 'black', 
        width: '50%',
        height: '50%' }
      }> 
      <span>{letter}</span>
    </div>
    );
  }
});

module.exports = PlayedTile;