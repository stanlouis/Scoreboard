import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Players } from './../api/players';
import AddPlayer from './AddPlayer';

const renderPlayers = playersList => {
  return playersList.map(function(player) {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={() => handleIncrement(player._id)}>+1</button>
        <button onClick={() => handleDecrement(player._id)}>-1</button>
        <button onClick={() => handleDelete(player._id)}>X</button>
      </p>
    );
  });
};

handleDelete = id => Players.remove({ _id: id });
handleIncrement = id => Players.update({ _id: id }, { $inc: { score: 1 } });
handleDecrement = id => Players.update(id, { $inc: { score: -1 } });

handleSubmit = e => {
  let playerName = e.target.playerName.value;
  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0,
    });
  }
  e.preventDefault();
};

const App = props => {
  let title = 'Score Keep';
  return (
    <div>
      <h1>{title}</h1>
      {renderPlayers(props.players)}
      <AddPlayer handleSubmit={this.handleSubmit} />
    </div>
  );
};

export default withTracker(() => {
  return {
    players: Players.find().fetch(),
  };
})(App);
