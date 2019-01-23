import React from 'react';

const Player = props => {
  const { name, score, _id, position, rank } = props.playerData;
  return (
    <div className="item">
      <div className="player">
        <div>
          <h3 className="player__name">{name}</h3>
          <p className="player__stats">
            {rank} {position} {score} point(s).
          </p>
        </div>
        <div className="player__actions">
          <button
            className="button button--round"
            onClick={() => handleIncrement(_id)}
          >
            +1
          </button>
          <button
            className="button button--round"
            onClick={() => handleDecrement(_id)}
          >
            -1
          </button>
          <button
            className="button button--round"
            onClick={() => handleDelete(_id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
