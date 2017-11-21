import readlineSync from 'readline-sync';

const numberOfIters = 3;

const normalize = (str) => {
  const s = String(str);
  return s.trim().toLowerCase();
};

export default (description, itemCaseGenerator) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (count) => {
    if (count === numberOfIters) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const itemCase = itemCaseGenerator();
    console.log(`Question: ${itemCase.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (normalize(itemCase.answer) === normalize(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${itemCase.answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return true;
    }

    return iter(count + 1);
  };

  return iter(0);
};
