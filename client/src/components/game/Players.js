import React from 'react';
import { PLAYERS_SHAPE } from 'constants/shapes';

const Players = ({ players }) => {
  return (
    <div className="players">
      {players.map(({ name, classType }) => (
        <div className="player" key={name}>
          <span>
            {name} <span className="player__class-type">({classType})</span>
          </span>
        </div>
      ))}
    </div>
  );
};

Players.propTypes = {
  players: PLAYERS_SHAPE
};

export default Players;
