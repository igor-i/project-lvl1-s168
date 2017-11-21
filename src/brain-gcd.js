import gamePlay from './';

const description = 'Find the greatest common divisor of given numbers.';
const minNum = 1;
const maxNum = 20;

const getMinNum = (num1, num2) => (num1 < num2 ? num1 : num2);
const getMaxNum = (num1, num2) => (num1 > num2 ? num1 : num2);

const gcd = (num1, num2) => {
  const min = getMinNum(num1, num2);
  const max = getMaxNum(num1, num2);

  const iter = (acc) => {
    if (((min % acc) === 0) && (max % acc) === 0) {
      return acc;
    }
    return iter(acc - 1);
  };

  return iter(min);
};

const getRandomInt = (min = 1, max = 3) => Math.floor(Math.random() * (max - min)) + min;

const question = () => {
  const num1 = getRandomInt(minNum, maxNum);
  const num2 = getRandomInt(minNum, maxNum);

  return `${num1} ${num2}`;
};

const answer = (str) => {
  const [num1, num2] = str.split(' ');
  return gcd(num1, num2);
};

const itemCaseGenerator = () => {
  const q = question();
  const a = answer(q);
  return {
    question: q,
    answer: a,
  };
};

export default () => gamePlay(description, itemCaseGenerator);
