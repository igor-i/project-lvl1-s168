import gamePlay from '..';
import { getRandomInt } from './../lib';

const description = 'Answer "yes" if number even otherwise answer "no".';
const minNum = 1;
const maxNum = 11;

const itemCaseGenerator = () => {
  const num = getRandomInt(minNum, maxNum);
  return {
    question: num,
    answer: (num % 2) === 0 ? 'yes' : 'no',
  };
};

export default () => gamePlay(description, itemCaseGenerator);
