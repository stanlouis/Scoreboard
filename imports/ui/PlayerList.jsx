import React from 'react';
import Player from './Player';

const PlayerList = props => {
  const { playersList, handleDelete, handleIncrement, handleDecrement } = props;

  return playersList.length === 0 ? (
    <div className="item">
      <p className="item__message">Add first player to start.</p>
    </div>
  ) : (
    playersList.map(player => {
      return (
        <Player
          key={player._id}
          playerData={player}
          handleDelete={handleDelete}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      );
    })
  );
};

export default PlayerList;
