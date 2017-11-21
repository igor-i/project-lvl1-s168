import gamePlay from '..';
import { getRandomInt, getMinOfArray, getMaxOfArray, sortNumsArray } from './../lib';

const description = 'Balance the given number.';
const minNum = 11;
const maxNum = 1000;

const balance = (num) => {
  const strNum = String(num);
  const arrayNum = strNum.split('');
  const len = arrayNum.length;

  const iter = (acc) => {
    sortNumsArray(acc);
    const max = getMaxOfArray(acc);
    const min = getMinOfArray(acc);
    if ((max - 1) <= min) {
      return acc;
    }
    acc[0] = min + 1;
    acc[len - 1] = max - 1;

    return iter(acc);
  };

  const resultArray = (len < 2) ? arrayNum : iter(arrayNum);
  return resultArray.join('');
};

const itemCaseGenerator = () => {
  const q = getRandomInt(minNum, maxNum);
  return {
    question: q,
    answer: balance(q),
  };
};

export default () => gamePlay(description, itemCaseGenerator);
