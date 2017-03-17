# project3_reactscrabble

<B>CodeClan course: project 3</B>

<B>Aim of project:</B> to improve understanding and gain experience of the React JavaScript library by using it to create a solitaire Scrabble game.

The game uses React and Node.js to display the board and to deal with the changing state of the tiles on the board and letter tray as the player places and moves them.

I used Pete Hunt’s ‘Thinking in React’ article in the React docs as a guide to structuring the code:
1. Break the user interface into a component hierarchy
2. Build a static version in React (board, tile rack and tiles)
3. Identify the minimal representation of UI state (one set of data representing the tiles available to play for a turn, and one set of data representing the tiles already played)
4. Identify where your state should live (GameBox component is the top level, and deals with all the changes to state for other components)
5. Add inverse data flow (board squares and rack slots detect when they are clicked on and pass x,y positions back up to GameBox)

<B>Flow of data:</B>

The current state of the tiles on the board and rack in the game are passed down to the Board and RackBox components as props for rendering.

To move a tile, a player clicks on a tile to select it, then clicks on a board square to move it to.

The board renders all the squares, and each one has an ‘onClick’ which will pass the square’s position back to the GameBox.

The GameBox will use this position to update the selected tile’s position and then update the game state.

Buttons are also connected to the GameBox with props, which allows the GameBox to take action when the buttons are clicked.

Text messages for the player are also passed down to the ButtonBox as props.
