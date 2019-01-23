import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Players, calculatePlayerPositions } from './../api/players';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import TitleBar from './TitleBar';

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
  const title = 'Score Keep';
  const subtitle = 'Created by Stanley Louis';
  return (
    <div>
      <TitleBar title={title} subtitle={subtitle} />
      <div className="wrapper">
        <PlayerList
          playersList={props.players}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
        />
        <AddPlayer handleSubmit={this.handleSubmit} />
      </div>
    </div>
  );
};

export default withTracker(() => {
  let players = Players.find({}, { sort: { score: -1 } }).fetch();
  let positionedPlayers = calculatePlayerPositions(players);
  return {
    players: positionedPlayers,
  };
})(App);
