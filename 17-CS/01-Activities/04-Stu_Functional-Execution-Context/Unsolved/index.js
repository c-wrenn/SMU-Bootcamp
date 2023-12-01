// returns the average value of an array of numbers
// function avg(array) {
//   function sum() {
//     let total = 0;
//     for(let i = 0; i < array.length; i++) {
//       total += array[i];
//     }
//   }
  //sum(); is never called, so the variables cannot be accessed
//   return total/array.length;
// }

function avg(array) {
    function sum() {
      let total = 0;
      for(let i = 0; i < array.length; i++) {
        total += array[i];
      }
      return total;
    }
  
    return sum()/array.length;
  }


module.exports = avg;
