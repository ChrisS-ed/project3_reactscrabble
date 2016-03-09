var React = require('react');

var PlayButton = React.createClass({

  handleClick: function() {
    console.log("CLICKED PLAY BUTTON");
    this.props.onPlayButtonClick();
  },

  render: function() {
    return (
      <button onClick={this.handleClick}>Play word</button>
    );
  }
});

var NewTilesButton = React.createClass({

  handleClick: function() {
    console.log("CLICKED PLAY BUTTON");
    this.props.onNewTilesButtonClick();
  },

  render: function() {
    return (
      <button onClick={this.handleClick}>New tiles</button>
    );
  }
});

var ButtonBox = React.createClass({

  render: function() {
    return (
      <div style={
        {marginTop: '15px'}
      }>
        <PlayButton onPlayButtonClick={this.props.onPlayButtonClick}/>
        <NewTilesButton onNewTilesButtonClick={this.props.onNewTilesButtonClick}/>
        <p>{this.props.message}</p>
      </div>
  )}
});

module.exports = ButtonBox;
