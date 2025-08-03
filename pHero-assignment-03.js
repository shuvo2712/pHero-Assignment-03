/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code 
console.log(`~~~~~~~~~~ Problem 01 ~~~~~~~~~~ `);

var halfArea = area / 2;
console.log(halfArea)



/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
console.log(`~~~~~~~~~~ Problem 02 ~~~~~~~~~~ `);

if (money >= 25000) {
    console.log(`Laptop`)
}
else if (money >= 10000) {
    console.log(`Cycle`)
}
else {
    console.log(`Chocolate`)
}



/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
console.log(`~~~~~~~~~~ Problem 03 ~~~~~~~~~~`);

for (i = 1; i <= lastDay; i++) {
    if (i % 3 == 0) {
        console.log(i, ` ~ medicine`)
    }
    else {
        console.log(i, ` ~ rest`)
    }
}



/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
console.log(`~~~~~~~~~~ Problem 04 ~~~~~~~~~~`);




/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhanku" , roll: 1014 ,department: "cse" };
//write your code here
console.log(`~~~~~~~~~~ Problem 05 ~~~~~~~~~~`);

studentEmail =
    student.name + student.roll + `.` + student.department + `@ph.ac.bd`;
console.log(studentEmail)
console.log(student)



/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
console.log(`~~~~~~~~~~ Problem 06 ~~~~~~~~~~`);

for (i = 0; i < experience; i++) {
    startingSalary = startingSalary + startingSalary * 0.05;
}
console.log(startingSalary.toFixed(2))