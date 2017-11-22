import gamePlay from '..';
import { getRandomInt } from './../lib';

const description = 'If a number is a Prime?';
const minNum = 1;
const maxNum = 99;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const iter = (count) => {
    if ((num % count) === 0) {
      return false;
    }
    if (count > num / 2) {
      return true;
    }
    return iter(count + 1);
  };

  return iter(2);
};

const itemCaseGenerator = () => {
  const num = getRandomInt(minNum, maxNum);
  return {
    question: num,
    answer: isPrime(num) ? 'yes' : 'no',
  };
};

export default () => gamePlay(description, itemCaseGenerator);
