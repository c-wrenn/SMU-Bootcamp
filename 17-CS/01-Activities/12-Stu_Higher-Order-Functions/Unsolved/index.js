const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    console.log('', accumulator)
    
if(index === array.length - 1) {
    return accumulator/ array.length;
}

    return accumulator + currentValue;
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce();

console.log(gradeAverage);
