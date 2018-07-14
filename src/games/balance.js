import { cons } from 'hexlet-pairs';
import getGamePlay from '..';
import { getRandomNum } from '../utils';

const getBalancedNum = (num) => {
  const iter = (balancedStr, getNumSum, numDigits) => {
    if (numDigits === 0) {
      return balancedStr;
    }
    const newNum = (getNumSum - (getNumSum % numDigits)) / numDigits;

    return iter(balancedStr + newNum, getNumSum - newNum, numDigits - 1);
  };

  const getNumSum = (indx, numAcc) => {
    const numToStr = String(num);

    const strLength = numToStr.length;

    if (indx >= strLength) {
      return iter('', numAcc, strLength);
    }

    const position = Number(numToStr[indx]);

    return getNumSum(indx + 1, numAcc + position);
  };

  return getNumSum(0, 0);
};

const getGameData = () => {
  const question = getRandomNum();
  const answer = getBalancedNum(question);
  return cons(question, answer);
};

export default () => {
  getGamePlay('Balance the given number.', getGameData);
};
