/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var array = ["mango", "apple", "banana", "kiwi","banana"];
var result = [];
for (let x=0; x<array.length; x++) {
  let flag=0;
  for (let y=x+1; y<array.length; y++) {
    if(array[x] == array[y]){
      flag++;
    }
  }
  if(flag == 0){
    result.push(array[x]);
  }
}

alert(result);

