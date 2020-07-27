import React, { useCallback } from 'react';
import { CHARACTER_SHAPE } from 'constants/shapes';

const Equipment = ({ character: { equipment } }) => {
  const getEquipDescription = useCallback(({ type, qty, name, dice, hp, mp }) => {
    switch (type) {
      case 'gold':
        return `+${qty} gold`;
      case 'hp':
        return `${qty}x ${name} +${hp}hp`;
      case 'mp':
        return `${qty}x ${name} +${mp}mp`;
      default:
        return `${qty}x ${name} ${dice}`;
    }
  }, []);

  return (
    <div className="equipment">
      {equipment.map(equip => (
        <p key={equip.name}>{getEquipDescription(equip)}</p>
      ))}
    </div>
  );
};

Equipment.propTypes = {
  character: CHARACTER_SHAPE.isRequired
};

export default Equipment;
