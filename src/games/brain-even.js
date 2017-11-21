import gamePlay from '..';
import getRandomInt from './../lib';

const description = 'Answer "yes" if number even otherwise answer "no".';
const minNum = 1;
const maxNum = 10;

const isEven = num => (num % 2) === 0;

const question = () => getRandomInt(minNum, maxNum);
const answer = num => (isEven(num) ? 'yes' : 'no');

const itemCaseGenerator = () => {
  const q = question();
  const a = answer(q);
  return {
    question: q,
    answer: a,
  };
};

export default () => gamePlay(description, itemCaseGenerator);
