// function addElement () { 
// var saveList=createNewListElement(listInput.value);
// var addList=document.createElement(saveList, [""]){
// 	console.log("Add List...");

// 	saveList.appendChild(addList);
// 	bindTaskEvents(saveList, addList);

// 	taskInput.value="text";

	var userInput = document.getElementById('listName');
	var listTitle = document.getElementById('listTitle');

	var alertBox = document.getElementById('alertBox');

	var list = document.getElementById("savedLists");
	var add = document.getElementById('btnSave');

	var lists = [];

	var setTitle = function(){
	listTitle.innerText=userInput.value;
	};

	var alert = function(){
				var box = alertBox.innerHTML += '<div class="alert alert-warning" role="alert"> Please remember to save your list! would you like to continue?' + '<button>No</button><button>Yes</button>' + '<br> This message will disappear in 8 seconds. </div>'
	
	};

	var refresh = function(){
		setTimeout(function(){
		window.location.reload();
		},8000);
		clearTimeout();
		};

	add.addEventListener('click', function(){
		var itemsByTagName = document.getElementsByTagName("li");
		var cards = document.querySelectorAll('.card');

		list.innerHTML += '<li><div class="card"><div class="card-body"><h5 class="card-title">'+ listTitle.innerText +'</h5><br><a href="../multipleLists?id=' + cards.length + '" class="btn btn-primary">Check out my list</a></div></div> </li>'
	});

// var setCardTitle = function(){
// 	var listTitle
// }