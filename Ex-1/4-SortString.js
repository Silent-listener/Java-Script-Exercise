/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var input = window.prompt("Enter the String");
// var input = "asdfgh";
var asc = input.split('').sort().join('');

alert("Ascending order:"+ asc);

var desc = asc.split('').reverse().join('');

alert("Descending order:"+ desc);

