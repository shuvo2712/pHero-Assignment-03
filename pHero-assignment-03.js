/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code 

var halfArea = area / 2;
console.log(halfArea)





/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

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

for (i = 1; i <= lastDay; i++) {
    if (i % 3 == 0) {
        console.log(i, ` - medicine`)
    }
    else {
        console.log(i, ` - rest`)
    }
}





/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here

var storeDelete = `Delete`;
var fileType = ``;

// check for type
for (obj of fileName) {
    if (obj == `.`) {
        fileType = ``;
    }
    else {
        fileType += obj;
    }
}

// check for store or delete
if (fileName[0] == `#`) {
  storeDelete = `Store`;
}
else if (fileType == `pdf` || fileType == `docx`) {
    storeDelete = `Store`;
}
    
console.log(storeDelete)





/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here

var studentEmail =
    student.name + student.roll + `.` + student.department + `@ph.ac.bd`;
console.log(studentEmail)





/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

for (i = 0; i < experience; i++) {
    startingSalary += startingSalary * 0.05;
}
console.log(startingSalary.toFixed(2))
console.log();