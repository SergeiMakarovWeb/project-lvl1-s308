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
  const hiddenIndex = getRandomNum(1, lenghtProgression);
  const hiddenElement = startNum + ((hiddenIndex - 1) * step);

  const iter = (index, seq) => {
    if (index > lenghtProgression) {
      return seq;
    }
    if (index === hiddenIndex) {
      return iter(index + 1, `${seq} ..`);
    }
    return iter(index + 1, `${seq} ${startNum + (step * (index - 1))}`);
  };
  const strProgression = iter(1, '');
  const strhiddenElement = `${hiddenElement}`;
  const question = strProgression;
  const answer = strhiddenElement;
  return cons(question, answer);
};

export default () => {
  getGamePlay('What number is missing in this progression?', getGameData);
};
