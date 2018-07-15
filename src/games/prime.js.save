import { cons } from 'hexlet-pairs';
import getGamePlay from '..';
import getRandomNum from '../utils';

const isPrime = (number) => {
  const iter = (divider) => {
    if (Math.sqrt(number) < divider) {
      return true;
    }
    if (number % divider === 0) {
      return false;
    }
    return iter(divider + 1);
  };
  return iter(2);
};

const getGameData = () => {
  const question = getRandomNum();
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  getGamePlay('Is this number prime?', getGameData);
};
