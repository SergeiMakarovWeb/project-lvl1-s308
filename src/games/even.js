import { cons } from 'hexlet-pairs';
import getGamePlay from '..';

const isEven = (num) => {
  if ((num % 2) === 0) {
    return 'yes';
  }
  return 'no';
};

const getGameData = () => {
  const question = Math.floor(Math.random() * 101);
  const answer = isEven(question);
  return cons(question, answer);
};

export default () => {
  getGamePlay('Answer "yes" if number even otherwise answer "no".', 3, getGameData);
};
