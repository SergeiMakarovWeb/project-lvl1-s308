import { cons } from 'hexlet-pairs';
import getGamePlay from '..';
import { getRandomNum } from '../utils';

const getOperator = () => {
  let operator;
  const randomNum = getRandomNum();
  switch (randomNum) {
    case 1:
      operator = '+';
      break;
    case 2:
      operator = '-';
      break;
    default:
      operator = '*';
      break;
  }
  return operator;
};

const makeOperation = (num1, num2, operator) => {
  if (operator === '*') {
    return num1 * num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  return num1 + num2;
};

const getGameData = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const operator = getOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = makeOperation(num1, num2, operator);
  const answer = `${correctAnswer}`;
  return cons(question, answer);
};

export default () => {
  getGamePlay('What is the result of the expression?', getGameData);
};
