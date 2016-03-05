var React = require('react');
var RackSlot = require('./RackSlot.jsx');
var Tile = require('./Tile.jsx');

var RackBox = React.createClass({

  renderSlot: function(index) {
    console.log(index);
    var tileX = this.props.tilePosition[index][0];
    var tileY = this.props.tilePosition[index][1];
    var tileLetter = this.props.tilePosition[index][2];
    var slotContents = (tileX === 16 && tileY === index) ?
        <Tile data = {tileLetter}/> :
        null;

    return (
      <div key={index}
        // seven slots
        style={{ width: '14%', height: '20px' }}>
        <RackSlot>
          {slotContents}
        </RackSlot>
      </div>
    );
  },

  render: function () {
    var slots = [];
    for (var i = 0; i < 7; i++) {
      slots.push(this.renderSlot(i));  
    }
    return (
      <div style={{
        marginTop: '20px',
        width: '100%',
        height: '100%',
        display: 'block-inline',
      }}>
      {slots}
      </div>
    );
  }
});

module.exports = RackBox;