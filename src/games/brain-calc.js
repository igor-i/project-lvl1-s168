import gamePlay from '..';
import getRandomInt from './../lib';

const description = 'What is the result of the expression?';
const minNum = 1;
const maxNum = 49;

const calc = (num1, num2, operation) => {
  const n1 = Number(num1);
  const n2 = Number(num2);
  switch (operation) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      return false;
  }
};

const question = () => {
  const num1 = getRandomInt(minNum, maxNum);
  const num2 = getRandomInt(minNum, maxNum);
  switch (getRandomInt()) {
    case 1:
      return `${num1} + ${num2}`;
    case 2:
      return `${num1} - ${num2}`;
    default:
      return `${num1} * ${num2}`;
  }
};

const answer = (str) => {
  const [num1, operation, num2] = str.split(' ');
  return calc(num1, num2, operation);
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
