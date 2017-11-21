import gamePlay from '..';
import { getRandomInt } from './../lib';

const description = 'What is the result of the expression?';
const minNum = 1;
const maxNum = 49;

const calc = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const getOperation = () => {
  switch (getRandomInt()) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};

const itemCaseGenerator = () => {
  const num1 = getRandomInt(minNum, maxNum);
  const num2 = getRandomInt(minNum, maxNum);
  const operation = getOperation();

  return {
    question: `${num1} ${operation} ${num2}`,
    answer: calc(num1, num2, operation),
  };
};

export default () => gamePlay(description, itemCaseGenerator);
