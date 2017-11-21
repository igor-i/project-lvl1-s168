import gamePlay from './';

const description = 'Answer "yes" if number even otherwise answer "no".';
const minNum = 1;
const maxNum = 10;

const isEven = num => (num % 2) === 0;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const question = () => getRandomInt(minNum, maxNum);
const correctAnswer = num => (isEven(num) ? 'yes' : 'no');

export default () => gamePlay(description, question, correctAnswer);
