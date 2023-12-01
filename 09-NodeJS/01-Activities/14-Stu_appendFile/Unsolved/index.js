// TODO: What are we importing?
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) => //\n means new line.
// if there is an error pass it in to later console.log it.
//appendFile adds a file to the log.text file
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
  //Ternary operator takes in a condition follower by a question mark
  // then an expression to execute if the condition is truthy followed by a colon(:)
  // and finally the expression to execute if the condition is falsy.
  //this operator is frequently used as a shortcut for the if statement.
);
