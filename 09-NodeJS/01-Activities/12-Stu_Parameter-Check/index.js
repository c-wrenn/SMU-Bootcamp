//process.argv
//this is an array
const var1= process.argv[2];
const var2= process.argv[3];

if (var1 === var2) {
    console.log("YES, THEY ARE THE SAME");
    return true;
} else{
    console.log("NO, THEY ARE NOT THE SAME");
    return false;
}


//bash terminal input andd output
//crislyn@CrislynWs-MacBook-Air 12-Stu_Parameter-Check % node index.js hello howdy
//NO, THEY ARE NOT THE SAME
//crislyn@CrislynWs-MacBook-Air 12-Stu_Parameter-Check % node index.js hello hello
//YES, THEY ARE THE SAME
//crislyn@CrislynWs-MacBook-Air 12-Stu_Parameter-Check % 