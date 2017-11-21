import readlineSync from 'readline-sync';

const normalize = str => str.trim().toLowerCase();

export default (description = '', quest = '', correctAnswer = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    const q = quest();
    const a = correctAnswer(q);
    console.log(`Question: ${q}`);
    const answer = readlineSync.question('Your answer: ');
    if (a === normalize(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${a}`);
      console.log(`Let's try again, ${userName}!`);
      return true;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};
