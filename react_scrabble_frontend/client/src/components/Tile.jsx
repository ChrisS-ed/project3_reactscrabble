var React = require('react');

var Tile = React.createClass({
  
  render: function () {
    var letter = this.props.data;
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