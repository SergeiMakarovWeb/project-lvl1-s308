import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name?');

const greeting = () => {
    return console.log(`Hello, ${userName}!`);
};

const evenGame = () => {
    for (let i = 0; i < 3; i += 1) {
        const number = Math.floor(Math.random() * 101);
        const isNumEven = number % 2 === 0 ? 'yes' : 'no';
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer? ');
        if (userAnswer !== isNumEven) {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isNumEven}. Let's try again, ${userName}`);
            return;
        }
        console.log('Correct!');
    }
    return console.log(`Congratulations, ${userName}!`);
};

export { greeting, evenGame };