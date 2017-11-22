import readlineSync from 'readline-sync';
import balance from './games/brain-balance';
import calc from './games/brain-calc';
import even from './games/brain-even';
import gcd from './games/brain-gcd';
import prime from './games/brain-prime';
import progression from './games/brain-progression';

export const welcome = () => {
  console.log('Welcome to the Brain Games!\n');
  console.log('Please, select a game:');
  console.log('1. Brain-even.\n2. Brain-calc.\n3. Brain-gcd.');
  console.log('4. Brain-balanse.\n5. Brain-progression.\n6. Brain-prime.\n');
  console.log('0. Exit.\n');
  console.log('Enter <1-6> to select a game, or <0> to exit.');
  const g = readlineSync.keyIn('Make your choise: ', { limit: '$<0-6>' });
  switch (g) {
    case '1':
      return even();
    case '2':
      return calc();
    case '3':
      return gcd();
    case '4':
      return balance();
    case '5':
      return progression();
    case '6':
      return prime();
    default:
      console.log('Bye. See you later...');
      return true;
  }
};

const numberOfIters = 3;

const normalize = (str) => {
  const s = String(str);
  return s.trim().toLowerCase();
};

export default (description, itemCaseGenerator) => {
  console.log(`\n${description}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (count) => {
    if (count === numberOfIters) {
      console.log(`\nCongratulations, ${userName}!`);
      return welcome();
    }
    const itemCase = itemCaseGenerator();
    console.log(`Question: ${itemCase.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (normalize(itemCase.answer) === normalize(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${itemCase.answer}'`);
      console.log(`\nLet's try again, ${userName}!`);
      return welcome();
    }

    return iter(count + 1);
  };

  return iter(0);
};
