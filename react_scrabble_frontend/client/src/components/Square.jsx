var React = require('react');

var Square = React.createClass({
  render: function () {
    return (<div style={
      { backgroundColor: 'green',
        color: 'white', 
        border: '2px solid black',
        width: '100%',
        minHeight: '20px' }
      }> 
        {this.props.children}
    </div>
    );
  }
});

module.exports = Square;