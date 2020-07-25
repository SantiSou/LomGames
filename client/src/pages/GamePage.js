import React, { useState, useCallback } from 'react';

import Header from 'components/common/Header';
import Television from 'components/game/Television';
import InfoTabs from 'components/game/InfoTabs';

const GamePage = () => {
  const [messages, setMessages] = useState([
    'La hechizera Megu tenía un montón de poderes espectaculares. Abría nueces sólo con la mirada, se teletransportaba con un mero chasquido; pero un día se dio cuenta que ya no era felíz',
    'Qué debería hacer la hechicera?',
    '1. Estudiar las artes oscuras de la Programación?',
    '2. Llamar a Toto',
    '3. Volver a empezar'
  ]);

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
        <InfoTabs character={character} />
      </div>
      <div className="right-panel">
        <Header />
        <Television messages={messages} onSendMessage={onSend} />
      </div>
    </div>
  );
};

export default GamePage;
