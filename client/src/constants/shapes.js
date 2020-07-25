import { shape, string, number } from 'prop-types';

export const CHARACTER_SHAPE = shape({
  name: string.isRequired,
  classType: string.isRequired,
  hp: number.isRequired,
  ac: number.isRequired,
  lvl: number.isRequired,
  exp: number.isRequired,
  expToLvl: number.isRequired,
  str: number.isRequired,
  dex: number.isRequired,
  con: number.isRequired,
  int: number.isRequired,
  wis: number.isRequired,
  cha: number.isRequired
});
