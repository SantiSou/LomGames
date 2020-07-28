import React, { useState, useCallback } from 'react';

import Header from 'components/common/Header';
import Television from 'components/game/Television';
import InfoTabs from 'components/game/InfoTabs';
import { ROOM_SHAPE } from 'constants/shapes';

const GamePage = ({ room: { name: roomName } }) => {
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
    cha: 17,
    equipment: [
      { qty: 560, type: 'gold' },
      { qty: 1, name: 'Death Sword', type: 'sword', dice: '2d4' },
      { qty: 5, name: 'HP potion', type: 'hp', hp: 20 },
      { qty: 2, name: 'Mana potion', type: 'mp', mp: 20 }
    ]
  });

  const [players] = useState([
    { name: 'Hackerman', classType: 'Knight' },
    { name: 'AguZero', classType: 'Thief' },
    { name: 'Drumsetto', classType: 'Demon' },
    { name: 'Lazerth', classType: 'Mage' },
    { name: 'Rizero', classType: 'Thief' },
    { name: 'Zetru', classType: 'Furry' }
  ]);

  return (
    <div className="panels d-flex flex-row">
      <div className="left-panel">
        <nav className="navigation">
          <a>&lt; Rooms</a> <span>{roomName}</span>
        </nav>
        <InfoTabs character={character} players={players} />
      </div>
      <div className="right-panel">
        <Header />
        <Television messages={messages} onSendMessage={onSend} />
      </div>
    </div>
  );
};

GamePage.propTypes = {
  room: ROOM_SHAPE.isRequired
};

export default GamePage;
