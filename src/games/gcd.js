import { cons } from 'hexlet-pairs';
import getGamePlay from '..';

const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

const getGameData = () => {
  const num1 = Math.floor(Math.random() * 101);
  const num2 = Math.floor(Math.random() * 101);
  const correctAnswer = getGcd(num1, num2);
  const question = `${num1} ${num2}`;
  const answer = `${correctAnswer}`;
  return cons(question, answer);
};

export default () => {
  getGamePlay('Find the greatest common divisor of given numbers.', 3, getGameData);
};
