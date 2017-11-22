import gamePlay from '..';
import { getRandomInt } from '../lib';

const description = 'What number is missing in this progression?';
const minNum = 1;
const maxNum = 10;
const progLength = 10;

const getProgressionArray = () => {
  const startNum = getRandomInt(minNum, maxNum);
  const step = getRandomInt(minNum, maxNum);

  const iter = (count, acc) => {
    if (count === progLength) {
      return acc;
    }
    acc.push(startNum + (count * step));
    return iter(count + 1, acc);
  };

  return iter(1, [startNum]);
};

const itemCaseGenerator = () => {
  const progArray = getProgressionArray();
  const skipKey = getRandomInt(0, progLength + 1);
  const a = progArray[skipKey];
  const q = progArray.map((value, key) => (key === skipKey ? '..' : value));
  return {
    question: q.join(' '),
    answer: a,
  };
};

export default () => gamePlay(description, itemCaseGenerator);
