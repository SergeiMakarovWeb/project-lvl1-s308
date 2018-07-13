import { cons } from 'hexlet-pairs';
import { getGamePlay } from '..';

const getOperator = () => {
  let operator;
  const randomNum = Math.floor((Math.random() * 3) + 1);
  if (randomNum === 1) {
    operator = '+';
  } else if (randomNum === 2) {
    operator = '-'
  } else {
    operator = '*'
  }
  return operator;
};

const makeOperation = (num1, num2, operator) => {
  if (operator === '*') {
    return num1 * num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else {
    return num1 + num2;
  }
};

const getGameData = () => {
  const num1 = Math.floor(Math.random() * 101);
  const num2 = Math.floor(Math.random() * 101);
  const operator = getOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = makeOperation(num1, num2, operator);
  const answer = `${correctAnswer}`;
  return cons(question, answer);
};

export const startCalcGame = () => getGamePlay('What is the result of the expression?', 3, getGameData);
