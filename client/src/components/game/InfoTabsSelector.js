import React from 'react';
import { func, string, bool } from 'prop-types';
import cn from 'classnames';

const InfoTabSelector = ({ name, onClick, selected = false }) => (
  <a onClick={onClick} className={cn({ selected })}>
    {name}
  </a>
);

InfoTabSelector.propTypes = {
  name: string.isRequired,
  onClick: func.isRequired,
  selected: bool
};

export default InfoTabSelector;
