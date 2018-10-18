/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var sum = 0;

for(let i=0; i<students.length; i++){
  sum = sum + students[i][1];
}
var ave = sum/students.length;

function getGrade(avg){
  let grade;
  if (avg < 60){
    grade = "Grade : F";      
  } 
  else if (avg < 70) {
    grade = "Grade : D";      
  } 
  else if (avg < 80) 
  {
    grade = "Grade : C";      
  } 
  else if (avg < 90) {
    grade = "Grade : B";      
  }
  else if (avg < 100) {
    grade = "Grade : A";      
  }
  return grade;
}  
alert(getGrade(ave));

/*
Exception: SyntaxError: missing } after function body
@Scratchpad/12:41
*/