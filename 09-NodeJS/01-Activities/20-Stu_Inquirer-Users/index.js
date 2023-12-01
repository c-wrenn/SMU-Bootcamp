const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: "input",
        message: "What is your name?",
        name:"username" // where value is stored
    },
    {
        type: "checkbox",
        message: "What languages do you know?",
        choices:["JavaScript", "HTML", "CSS", "C#", "Java"],
        name: "userLanguages"
    },
    {
        type: "list", //inquirer documentation
        message: "What is your preferred method of communication?",
        choices: ["Yahoo", "Text Message", "Twitter", "Phone call"], // where value is stored
        name: "userCommunication"
    }
];
inquirer
.prompt(questions)
.then((answers) => {
    console.log(JSON.stringify(answers));
    writeFile(answers);
});
function writeFile(answers) {
    const fileContents = 
    `
    Name:                         ${answers.username}
    Languages:                    ${answers.userLanguages}
    Preferred Communication:      ${answers.userCommunication}
    `;

    //writeFile function will create a file called answers.txt, txt file
    //pass in fileContents variable.
    fs.writeFile('ansers.txt', fileContents, (err) => {
        if (err) {
            console.error(err);
        }else {
            console.log("SUCCESS!");
        }
    })
}