var React = require('react');
var RackSlot = require('./RackSlot.jsx');
var Tile = require('./Tile.jsx');

var RackBox = React.createClass({
  handleClick: function(X,Y) {
    console.log("CLICK");
    console.log(X,Y);
    this.props.onSquareClick(
          X,Y
    );
  },

  renderSlot: function(index) {
    var tileX = this.props.data[index][0];
    var tileY = this.props.data[index][1];
    var tileLetter = this.props.data[index][2];
    var selected = this.props.data[index][3];

    var slotContents = (tileX === 16 && tileY === index) ?
        <Tile data = {[tileX, tileY, tileLetter, selected]}/> :
        null;

    return (
      <div key={index}
        // seven slots
        style={{ width: '14%', height: '20px' }}
        onClick={this.handleClick.bind(this,tileX,tileY)}>
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