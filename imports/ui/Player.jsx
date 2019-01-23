import React from 'react';

const Player = props => {
  const { name, score, _id } = props.playerData;
  return (
    <div className="item">
      <p>
        {name} has {score} point(s).
      </p>
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
  );
};

export default Player;
