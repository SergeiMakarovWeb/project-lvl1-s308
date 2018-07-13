import { cons } from 'hexlet-pairs';
import getGamePlay from '..';
import { getRandomNum } from '../utils';

const isEven = num => num % 2 === 0;

const getGameData = () => {
  const question = getRandomNum();
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  getGamePlay('Answer "yes" if number even otherwise answer "no".', getGameData);
};
