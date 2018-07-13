import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const attempts = 3;

const getGamePlay = (gameName, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameName);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < attempts; i += 1) {
    const gameData = getGameData();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default getGamePlay;
