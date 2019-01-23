import React from 'react';

const AddPlayer = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="playerName" placeholder="Player name" />
      <button>Add Player</button>
    </form>
  );
};

export default AddPlayer;
