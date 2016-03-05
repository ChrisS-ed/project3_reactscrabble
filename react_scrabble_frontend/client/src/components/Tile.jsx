var React = require('react');

var Tile = React.createClass({
  
  render: function () {
    var xPos = this.props.data[0];
    var yPos = this.props.data[1];
    var letter = this.props.data[2];
    return (<div style={
      { backgroundColor: 'red',
        color: 'white', 
        width: '50%',
        height: '50%' }
      }> 
      <span>{letter}</span>
    </div>
    );
  }
});

module.exports = Tile;