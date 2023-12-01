const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?', //what the user will see
      name: 'username', //what will be stored
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) => //arrow function
    response.confirm === response.password //response is the object all the values are held in.
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
//same function written as a regular function, not an arrow function.
// .then(function(response) {
// if(response.password === response.password) {
  //consolse.log('Success!')
//}else {
  //console.log('You forgot your password already!?')
//})
//});