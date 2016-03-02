var React = require('react');

var Tile = React.createClass({
  render: function () {
    return (<div style={
      { backgroundColor: 'red',
        color: 'white', 
        width: '50%',
        height: '50%' }
      }> 
      <span>T</span>
    </div>
    );
  }
});

module.exports = Tile;