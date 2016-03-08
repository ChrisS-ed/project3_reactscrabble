var React = require('react');
var RackSlot = require('./RackSlot.jsx');
var Tile = require('./Tile.jsx');

var RackBox = React.createClass({
  handleClick: function(x,y) {
    console.log("CLICK");
    console.log(x,y);
    this.props.onSquareClick(x,y);
  },

  renderSlot: function(index) {
    var slotContents = null;
    for (var i = 0; i < this.props.data.length; i++) {
      var tileX = this.props.data[i][0];
      var tileY = this.props.data[i][1];
      var tileLetter = this.props.data[i][2];
      var containsTile = (16 === tileX && index === tileY);
      if (containsTile) {
        slotContents = <Tile letter = {tileLetter} />
        break
      }
    };

    return (
      <div key={index}
        // seven slots
        style={{ width: '14%', height: '20px' }}
        onClick={this.handleClick.bind(this,16,index)}>
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