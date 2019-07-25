function addElement () { 
var saveList=createNewListElement(listInput.value);
var addList=document.createElement(saveList, [""]){
	console.log("Add List...");

	saveList.appendChild(addList);
	bindTaskEvents(saveList, addList);

	taskInput.value="text";


//   var newContent = document.createTextNode(href='/layout.ejs'); 
//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);  

//   // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(newDiv, currentDiv); 
// }