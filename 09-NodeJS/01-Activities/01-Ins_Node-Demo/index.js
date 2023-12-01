// Run this from the command line using 'node index.js'
//this is just a function getting called immediatly.
(function () {
  console.log(this);
})();

// an IMMEDIATLY INVOKED FUNCTION EXPRESSION, called an iffe.
//(function someFunction(params) {
  //some stuff here
//})()  
//the yellow () you see here will invoke/call the function. 
//You can also insert parameters there.