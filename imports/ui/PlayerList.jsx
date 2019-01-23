import React from 'react';
import Player from './Player';

const PlayerList = props => {
  const { playersList, handleDelete, handleIncrement, handleDecrement } = props;

  return playersList.map(player => {
    return (
      <Player
        key={player._id}
        playerData={player}
        handleDelete={handleDelete}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    );
  });
};

export default PlayerList;
