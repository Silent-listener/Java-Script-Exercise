/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var number1,number2,number3,number4,number5,largest;
// number1 = 12121;
// number2 = 2;
// number3 = 3;
// number4 = 4;
// number5 = 5;

number1 = window.prompt("Enter the 1st number: ",0);
number2 = window.prompt("Enter the 2nd number: ",0);
number3 = window.prompt("Enter the 3rd number: ",0);
number4 = window.prompt("Enter the 4th number: ",0);
number5 = window.prompt("Enter the 5th number: ",0);
largest = 0;

if (+number1 > +largest){
		largest = number1;
	   console.log(largest);
}

if (+number2 > +largest){
		largest = number2;
	   console.log(largest);
}

if (+number3 > +largest){
		largest = number3;
	 console.log(largest);
}
if (+number4 > +largest){
		largest = number4;
	 console.log(largest);
}

if (+number5 > +largest){
		largest = number5;
	 console.log(largest);
}

alert("The largest number is: "+largest);
