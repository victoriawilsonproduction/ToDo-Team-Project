// function addElement () { 
// var saveList=createNewListElement(listInput.value);
// var addList=document.createElement(saveList, [""]){
// 	console.log("Add List...");

// 	saveList.appendChild(addList);
// 	bindTaskEvents(saveList, addList);

// 	taskInput.value="text";

	var list = document.getElementById("savedLists");
	var add = document.getElementById('btnSave');
	add.addEventListener('click', function(){
		var itemsByTagName = document.getElementsByTagName("li");
		list.innerHTML += '<li><div class="card"><div class="card-body"><h5 class="card-title">Users saved list name</h5><br><a href="../multipleLists" class="btn btn-primary">Check out my list</a></div></div> </li>'
	});
