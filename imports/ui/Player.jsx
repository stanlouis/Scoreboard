import React from 'react';

const Player = props => {
  const { name, score, _id } = props.playerData;
  return (
    <div>
      <p>
        {name} has {score} point(s).
        <button onClick={() => handleIncrement(_id)}>+1</button>
        <button onClick={() => handleDecrement(_id)}>-1</button>
        <button onClick={() => handleDelete(_id)}>X</button>
      </p>
    </div>
  );
};

export default Player;
