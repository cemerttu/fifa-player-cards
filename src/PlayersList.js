// src/PlayersList.js
import React from 'react';
import Player from './Player';
import players from './players'; // Import the players data

const PlayersList = () => {
  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  };

  return (
    <div style={listStyle}>
      {players.map((player, index) => (
        <Player key={index} {...player} /> // Using spread operator to pass all player attributes as props
      ))}
    </div>
  );
};

export default PlayersList;