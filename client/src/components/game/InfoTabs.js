import React, { useCallback, useState, useMemo } from 'react';

import Character from 'components/game/Character';
import InfoTabsSelector from 'components/game/InfoTabsSelector';
import { CHARACTER_SHAPE } from 'constants/shapes';
import { INFO_TABS } from 'constants/constants';

const InfoTabs = ({ character }) => {
  const [infoTab, setInfoTab] = useState(INFO_TABS.stats);
  const onStatsTab = useCallback(() => setInfoTab(INFO_TABS.stats), [setInfoTab]);
  const onEquipTab = useCallback(() => setInfoTab(INFO_TABS.equip), [setInfoTab]);
  const onPlayersTab = useCallback(() => setInfoTab(INFO_TABS.players), [setInfoTab]);

  const currentTab = useMemo(() => {
    switch (infoTab) {
      case INFO_TABS.stats:
        return <Character character={character} />;
      case INFO_TABS.equip:
        return <div className="players-tab" />;
      case INFO_TABS.players:
        return <div className="players-tab" />;
      default:
        return null;
    }
  }, [character, infoTab]);

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
      {currentTab}
    </div>
  );
};

InfoTabs.propTypes = {
  character: CHARACTER_SHAPE
};

export default InfoTabs;
