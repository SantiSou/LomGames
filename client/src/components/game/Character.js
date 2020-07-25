import React from 'react';
import { CHARACTER_SHAPE } from 'constants/shapes';

const Character = ({
  character: { name, classType, hp, ac, lvl, exp, expToLvl, str, dex, con, int, wis, cha }
}) => {
  return (
    <div className="character d-flex flex-row flex-wrap">
      <div className="character__full-value ">
        <span className="character__name">{name}</span> ({classType})
      </div>
      <div className="character__label">HP:</div>
      <div className="character__value">{hp}</div>
      <div className="character__label">AC:</div>
      <div className="character__value">{ac}</div>
      <div className="character__label">Lvl:</div>
      <div className="character__value">{lvl}</div>
      <div className="character__label">exp:</div>
      <div className="character__value">
        {exp}/{expToLvl}
      </div>
      <div className="character__full-value character__stats">STATS</div>
      <div className="character__label">STR:</div>
      <div className="character__value">{str}</div>
      <div className="character__label">DEX:</div>
      <div className="character__value">{dex}</div>
      <div className="character__label">CON:</div>
      <div className="character__value">{con}</div>
      <div className="character__label">INT:</div>
      <div className="character__value">{int}</div>
      <div className="character__label">WIS:</div>
      <div className="character__value">{wis}</div>
      <div className="character__label">CHA:</div>
      <div className="character__value">{cha}</div>
    </div>
  );
};

Character.propTypes = {
  character: CHARACTER_SHAPE.isRequired
};

export default Character;
