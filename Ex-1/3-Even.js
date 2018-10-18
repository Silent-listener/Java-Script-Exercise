/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var input;
input = window.prompt("Enter the number: ", 0);
var str = input.toString();
var result = [str[0]];

for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 == 0)&&(str[x]%2 == 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));
alert(result.join(''));
