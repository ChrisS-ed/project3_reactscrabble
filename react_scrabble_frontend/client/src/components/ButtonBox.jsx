var React = require('react');

var PlayButton = React.createClass({
  // getInitialState: function() {
  //   //return {liked: false};
  // },

  handleClick: function(event) {
    //this.setState({liked: !this.state.liked});
    console.log("CLICKED PLAY BUTTON");
  },

  render: function() {
    return (
      <button onClick={this.handleClick}>Play word</button>
    );
  }
});

var ButtonBox = React.createClass({
  render: function() {
    return (
      <div>
        <h3>ButtonBox</h3>
        <PlayButton/>
      </div>
  )}
});

module.exports = ButtonBox;