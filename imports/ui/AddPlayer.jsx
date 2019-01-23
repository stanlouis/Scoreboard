import React from 'react';

const AddPlayer = ({ handleSubmit }) => {
  return (
    <div className="item">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          name="playerName"
          placeholder="Player name"
        />
        <button className="button">Add Player</button>
      </form>
    </div>
  );
};

export default AddPlayer;
