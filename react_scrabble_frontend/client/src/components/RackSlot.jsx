var React = require('react');

var RackSlot = React.createClass({
  render: function() {
    return (
      <div style={
        { backgroundColor: 'brown', 
          border: '2px solid black',
          width: '50px',
          minHeight: '20px' }
        }> 
        {this.props.children}
      </div>
    );
  }
});

module.exports = RackSlot;