import { cons } from 'hexlet-pairs';
import getGamePlay from '..';
import getRandomNum from '../utils';

const calculateSum = (num) => {
  let value = num;
  let sum = 0;
  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }
  return sum;
};

const getBalancedNum = (num) => {
  const sum = calculateSum(num);
  const lengthStr = String(num).length;
  const average = Math.floor(sum / lengthStr);
  const remainder = sum % lengthStr;
  let balancedStr = '';
  for (let i = 0; i < lengthStr; i += 1) {
    if (i < remainder) {
      balancedStr = `${balancedStr}${average + 1}`;
    } else {
      balancedStr = `${average}${balancedStr}`;
    }
  }
  return balancedStr;
};

const getGameData = () => {
  const numForQuestion = getRandomNum();
  const question = `${numForQuestion}`;
  const answer = getBalancedNum(numForQuestion);
  return cons(question, answer);
};

export default () => {
  getGamePlay('Balance the given number.', getGameData);
};
