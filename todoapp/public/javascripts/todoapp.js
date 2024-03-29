function addLi(){
	var txtVal = document.getElementById('txtVal').value,
		listNode = document.getElementById('list'),
		liNode = document.createElement('LI'),
		txtNode = document.createTextNode(txtVal);

	liNode.appendChild(txtNode);
	listNode.appendChild(liNode);
}

function checkItem(){
	
}
// Get the input field
var input = document.getElementById("new-task");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    addTask();
  }
}); 

// Get the input field
var inputTwo = document.getElementById("incomplete-tasks");

function enterUp (event) {console.log("enter")
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13){
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    var editFunction = editTask.bind(this);
    editFunction(this.innerHTML);
  }
}; 

var taskInput=document.getElementById("new-task");//Add a new task.
var addButton=document.getElementsByTagName("button")[0];//first button
var incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks


//New task list item
var createNewTaskElement=function(taskString){
console.log('add');
	var listItem=document.createElement("li");
	//input (checkbox)
	var checkBox=document.createElement("input");//checkbx
	//label
	var label=document.createElement("label");//label
	//input (text)
	var editInput=document.createElement("input");//text
	//button.edit
	var editButton=document.createElement("button");//edit button
	//button.delete
	var deleteButton=document.createElement("button");//delete button

	label.innerText=taskString;

	//Each elements, needs appending
	checkBox.type="checkbox";
	editInput.type="text";

	editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
	editButton.className="edit";
	//saveButton.innerText="Save";
	//saveButton.className="save";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";



	//and appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



var addTask=function(){
	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	var listItem=createNewTaskElement(taskInput.value);

	//Append listItem to incompleteTaskHolder
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value="";

}

var saveTask=function(){
	var button = document.querySelector(".editMode button.edit")
	if(button.innerHTML=="Edit"){
		button.innerHTML="Save";
	}else{
		button.innerHTML="Edit"
	}
}

//Edit an existing task.

var editTask=function(){
console.log("Edit Task...");
console.log("Change 'edit' to 'save'");

var listItem=this.parentNode;

var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");
		//If class of the parent is .editmode
		if(containsClass){

		//switch to .editmode
		//label becomes the inputs value.
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		//toggle .editmode on the parent.
		listItem.classList.toggle("editMode");
		
		if(this.innerHTML=="Edit"){
		this.innerHTML="Save";
	}else{
		this.innerHTML="Edit"
	}
}

//Delete task.
var deleteTask=function(){
		console.log("Delete Task...");

		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		//Remove the parent list item from the ul.
		ul.removeChild(listItem);

}


//Mark task completed
var taskCompleted=function(){
		console.log("Complete Task...");
	
	//Append the task list item to the #completed-tasks
	var listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindTaskEvents(listItem,taskIncomplete);

}


var taskIncomplete=function(){
		console.log("Incomplete Task...");
//Mark task as incomplete.
	//When the checkbox is unchecked
		//Append the task list item to the #incomplete-tasks.
		var listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
			bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest=function(){
	console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
// addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");
//select ListItems children
	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");
	var saveButton=taskListItem.querySelector("button.save");
	var inputTwo=taskListItem.querySelector("input[type=text]");


			//Bind editTask to edit button.
			if (editButton) editButton.onclick=editTask;
			//Bind saveTask to save button.
			if (saveButton) saveButton.onclick=saveTask;
			if (inputTwo) inputTwo.onkeyup=enterUp;
			//Bind deleteTask to delete button.
			if (deleteButton) deleteButton.onclick=deleteTask;
			//Bind taskCompleted to checkBoxEventHandler.
			if (checkBox) checkBox.onchange=checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
	//for each list item
	for (var i=0; i<incompleteTaskHolder.children.length;i++){

		//bind events to list items chldren(tasksCompleted)
		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	}




//cycle over completedTasksHolder ul list items
	for (var i=0; i<completedTasksHolder.children.length;i++){
	//bind events to list items chldren(tasksIncompleted)
		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	}




// DO NOT DELETE PLZZZZZZ
//var mojito= function popup('urlforimage', popupWindow){
// 	if (! window.focus)return true;
// 	var href;
// 	if ()
// 	window.alert("Mojito time!");
// 		alert("Mojito Time!")};





// addButton.addEventListener(){ 
// 	if (incompleteTaskHolder.children.length=[0] && taskListItem=null)
// 		return (mojito)
// 	}else{ (hide)};
// // no button? click anywhere to dismiss

// <SCRIPT TYPE="text/javascript">
//   function popup(mylink, windowname) { 
//     if (! window.focus)return true;
//     var href;
//     if (typeof(mylink) == 'string') href=mylink;
//     else href=mylink.href; 
//     window.open(href, windowname, 'width=400,height=200,scrollbars=yes'); 
//     return false; 
//   }
// </SCRIPT>


// Read more: https://html.com/javascript/popup-windows/#ixzz5ui0oHvgS












