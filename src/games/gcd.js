import { cons } from 'hexlet-pairs';
import getGamePlay from '..';
import { getRandomNum } from '../utils';

const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

const getGameData = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const correctAnswer = getGcd(num1, num2);
  const question = `${num1} ${num2}`;
  const answer = `${correctAnswer}`;
  return cons(question, answer);
};

export default () => {
  getGamePlay('Find the greatest common divisor of given numbers.', getGameData);
};
