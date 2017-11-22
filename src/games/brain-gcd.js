import gamePlay from '..';
import { getRandomInt } from '../lib';

const description = 'Find the greatest common divisor of given numbers.';
const minNum = 1;
const maxNum = 21;

const gcd = (num1, num2) => {
  const iter = (acc) => {
    if (((num1 % acc) === 0) && (num2 % acc) === 0) {
      return acc;
    }
    return iter(acc - 1);
  };

  return iter(num1 < num2 ? num1 : num2);
};

const itemCaseGenerator = () => {
  const num1 = getRandomInt(minNum, maxNum);
  const num2 = getRandomInt(minNum, maxNum);
  return {
    question: `${num1} ${num2}`,
    answer: gcd(num1, num2),
  };
};

export default () => gamePlay(description, itemCaseGenerator);
