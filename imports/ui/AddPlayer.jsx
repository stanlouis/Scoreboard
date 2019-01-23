import React from 'react';

const AddPlayer = ({ handleSubmit }) => {
  return (
    <div className="item">
      <form onSubmit={handleSubmit}>
        <input type="text" name="playerName" placeholder="Player name" />
        <button className="button">Add Player</button>
      </form>
    </div>
  );
};

export default AddPlayer;
