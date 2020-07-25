import React, { useState, useCallback } from 'react';

import Header from 'components/common/Header';
import Television from 'components/game/Television';
import Character from 'components/game/Character';

const GamePage = () => {
  const [messages, setMessages] = useState([]);
  const onSend = useCallback(
    message => {
      messages.push(message);
      setMessages(messages);
    },
    [messages, setMessages]
  );
  const [character] = useState({
    name: 'Hackerman',
    classType: 'Knight',
    hp: 43,
    ac: 19,
    lvl: 8,
    exp: 340,
    expToLvl: 700,
    str: 12,
    dex: 7,
    con: 15,
    int: 7,
    wis: 10,
    cha: 17
  });

  return (
    <div className="panels d-flex flex-row">
      <div className="left-panel">
        <div className="tabs">
          <div className="tabs__selector">
            <a className="info-tab-selector selected">STATS</a>
            <span className="tab-selector-separator">|</span>
            <a className="equip-tab-selector">EQUIP</a>
            <span className="tab-selector-separator">|</span>
            <a className="players-tab-selector">PLAYERS</a>
          </div>
          <div className="info-tab">
            <Character character={character} />
          </div>
          <div className="players-tab" />
        </div>
      </div>
      <div className="right-panel">
        <Header />
        <Television messages={messages} onSendMessage={onSend} />
      </div>
    </div>
  );
};

export default GamePage;
