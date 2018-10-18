/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var inputString = "gmail.com";
var letter ='m';
function countNumberOfOccurrence(string,char){
  let flag=0;
  for(let i=0; i<string.length; i++){
    if(string[i] == char){
      flag++;
    }
  }
  return flag;
}

alert(countNumberOfOccurrence(inputString,letter));
