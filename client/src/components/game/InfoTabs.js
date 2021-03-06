import React, { useCallback, useState, useMemo } from 'react';

import Character from 'components/game/Character';
import Equipment from 'components/game/Equipment';
import Players from 'components/game/Players';
import InfoTabsSelector from 'components/game/InfoTabsSelector';
import { CHARACTER_SHAPE, PLAYERS_SHAPE } from 'constants/shapes';
import { INFO_TABS } from 'constants/constants';

const InfoTabs = ({ character, players }) => {
  const [infoTab, setInfoTab] = useState(INFO_TABS.stats);
  const onStatsTab = useCallback(() => setInfoTab(INFO_TABS.stats), [setInfoTab]);
  const onEquipTab = useCallback(() => setInfoTab(INFO_TABS.equip), [setInfoTab]);
  const onPlayersTab = useCallback(() => setInfoTab(INFO_TABS.players), [setInfoTab]);

  const currentTab = useMemo(() => {
    switch (infoTab) {
      case INFO_TABS.stats:
        return <Character character={character} />;
      case INFO_TABS.equip:
        return <Equipment character={character} />;
      case INFO_TABS.players:
        return <Players players={players} />;
      default:
        return null;
    }
  }, [character, infoTab, players]);

  return (
    <div className="tabs">
      <div className="tabs__selector">
        <InfoTabsSelector
          name="STATS"
          onClick={onStatsTab}
          selected={infoTab === INFO_TABS.stats}
        />
        <span className="tab-selector-separator">|</span>
        <InfoTabsSelector
          name="EQUIP"
          onClick={onEquipTab}
          selected={infoTab === INFO_TABS.equip}
        />
        <span className="tab-selector-separator">|</span>
        <InfoTabsSelector
          name="PLAYERS"
          onClick={onPlayersTab}
          selected={infoTab === INFO_TABS.players}
        />
      </div>
      <div className="tabs__tab d-inline-block">{currentTab}</div>
    </div>
  );
};

InfoTabs.propTypes = {
  character: CHARACTER_SHAPE,
  players: PLAYERS_SHAPE
};

export default InfoTabs;
