import chalk from 'chalk';
import inquirer, { Answers, QuestionCollection } from 'inquirer';
import Choices from 'inquirer/lib/objects/choices.js';


const questions: QuestionCollection = [{
    name: 'num1',
    type: 'number',
    message: 'Enter num1: '
}, {
    name: 'num2',
    type: 'number',
    message: 'Enter num2:'
}, {
    name: 'operations',
    type: 'list',
    message: 'Enter operation:',
    choices: ["*", "+", "-", "/", "**"]
}]
var answers: Promise<Answers> = inquirer.prompt(questions); // it return promise, inquerer.prompt()=> is a promise
answers.then((answer: Answers) => { //if promise resolves
    switch (answer.operations) {
        case "*":
            console.log("num1 * num2 = ", answer.num1 * answer.num2);
            break;
        case "+":
            console.log("num1 + num2 = ", answer.num1 + answer.num2);
            break;
        case "-":
            console.log("num1 - num2 = ", answer.num1 - answer.num2);
            break;
        case "/":
            console.log("num1 / num2 =", answer.num1 / answer.num2);
            break;
        case "**":
            console.log("num1^num2 =", answer.num1 ** answer.num2);
            break;
    }
    console.log("answer", answer);
}).catch((error) => {
    console.log("Error", error);
});