//WRITE YOUR CODE BELOW
var Students = [
    "Crislyn",
    "Timmy",
    "Ivy"
];
///length counts the number of items  in the student array / logs length of array.
console.log(Students.length);
//Now we need to loop throguh each element.
//i stands for interval
//For loop startes at 0, runs while i is less than length of student array.
//Increments by one
for(var  i=0; i< Students.length; i++) {
    //This staement will run each timeht eloop is executed
    console.log("Great to see you, " + Students[i] + "!");
}