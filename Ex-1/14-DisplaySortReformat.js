/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

// 1.
for(let i=0; i<myObj.length; i++){
  if(myObj[i]['occupation']== "Programmer"){
    console.log(myObj[i]);
  }
}

// 2.
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

var sortObj = sortByKey(myObj,'age');
console.log(sortObj);                  

// 3.
function objectOfObjects(myObj){
	var finalresult = [];
	var teamLeads = [];
	var programmers = [];
	myObj.forEach(function (item){
	 if(item.occupation == 'Team Leader'){
		 teamLeads.push(item);
	 }else if(item.occupation == 'Programmer'){
      programmers.push(item);
	}
});finalresult.push(teamLeads);
	finalresult.push(programmers);
	
	return finalresult;
}
console.log(objectOfObjects(myObj));

//4.
var mappedArray = myObj.map(obj => obj['name']);
console.log(mappedArray);
