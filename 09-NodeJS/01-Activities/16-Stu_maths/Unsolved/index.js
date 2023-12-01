// TODO: Import `maths.js`
const math = require('./maths');
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
const numOne = process.argv[3];
const numTwo = process.argv[4]
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
let result;
switch (operation) {
    
    case 'add':
        //parseInt converts the value of each variable into an integer before solving.
      result =  math.sum(parseInt(numOne),parseInt(numTwo));
        break;
    case 'subtract':
        result = math.difference(parseInt(numOne),parseInt(numTwo));
        break;
    case 'divide':
        result = math.quotient(parseInt(numOne),parseInt(numTwo));
        break;
    case 'multiply':
        result = math.product(parseInt(numOne),parseInt(numTwo));
        break;
    default:
        console.log("You didn't pass a valid operation!");

}
console.log("RESULT: ", result);