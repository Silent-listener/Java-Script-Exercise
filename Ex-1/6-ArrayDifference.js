/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var arr1 = ["mango", "apple", "banana", "kiwi"];
var arr2 = ["apple", "kiwi"];
function arrayDifference(arrA,arrB){ 
var result =  arrA.filter(x => !arrB.includes(x)).concat(arrB.filter(x => !arrA.includes(x)));
return result;
}
console.log(arrayDifference(arr1,arr2));
alert(arrayDifference(arr1,arr2));

