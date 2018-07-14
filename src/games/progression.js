import { cons } from 'hexlet-pairs';
import getGamePlay from '..';
import getRandomNum from '../utils';

const startProgressionMin = 1;
const startProgressionMax = 10;
const stepProgressionMin = 1;
const stepProgressionMax = 5;
const lenghtProgression = 10;

const getGameData = () => {
  const startNum = getRandomNum(startProgressionMin, startProgressionMax);
  const step = getRandomNum(stepProgressionMin, stepProgressionMax);
  const emptyStep = getRandomNum(1, lenghtProgression);
  const emptyNum = startNum + ((emptyStep - 1) * step);

  const iter = (indx, seq) => {
    if (indx > lenghtProgression) {
      return seq;
    }
    if (indx === emptyStep) {
      return iter(indx + 1, `${seq} ..`);
    }
    return iter(indx + 1, `${seq} ${startNum + (step * (indx - 1))}`);
  };
  const strProgression = iter(1, '');
  const strEmptyNum = `${emptyNum}`;
  const question = strProgression;
  const answer = strEmptyNum;
  return cons(question, answer);
};

export default () => {
  getGamePlay('What number is missing in this progression?', getGameData);
};
