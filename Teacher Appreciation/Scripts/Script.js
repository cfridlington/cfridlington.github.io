
//Get the Mouse Position within the Window

//var body = document.getElementsByTagName("body")

var translateX = 0;
var translateY = 0;

var currentTranslationX = 0;
var currentTranslationY = 0;

function pageLoad() {
	var translateImages = setInterval(translateItems, 10);
}

window.addEventListener('mousemove', function (position) {
	
	var mouseX = position.clientX;
	var mouseY = position.clientY;
	
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	
	var centerPointX = windowWidth / 2;
	var centerPointY = windowHeight / 2;
	
	translateX = (centerPointX - mouseX) / 100;
	translateY = (centerPointY - mouseY) / 100;
	
	//document.getElementById("demo").innerHTML = `Distance from Center X: ${translateX} Distance from Center Y: ${translateY}`;
						
});

function translateItems() {
	
	var teachers = document.getElementsByClassName("Teacher-Container");
	var messageContainer = document.getElementsByClassName("Message-Container");
	
	for (i = 0; i < teachers.length; i++) { 
  		teachers.item(i).style = `transform: translate( ${currentTranslationX + translateX}px, ${currentTranslationY + translateY}px);`
	}
	
	for (i = 0; i < messageContainer.length; i++) { 
  		messageContainer.item(i).style = `transform: translate( ${currentTranslationX + translateX}px, ${currentTranslationY + translateY}px);`
	}
	
	currentTranslationX = currentTranslationX + translateX;
	currentTranslationY = currentTranslationY + translateY;
	
	translateX = translateX/1.02;
	translateY = translateY/1.02;
	
	if (translateX && translateY < 0.00001) {
	
		setTimeout(resetView(), 10000);
	}
	
}

function resetView() {
	
	/*
	if (translateX && translateY < 0.00001) {
		
		var teachers = document.getElementsByClassName("Teacher-Container");
	
		translateX = 0;
		translateY = 0;
		currentTranslationX = 0;
		currentTranslationY = 0;
		
		for (i = 0; i < teachers.length; i++) { 
  			teachers.item(i).style = `transform: translate(0px, 0px);`
		}
	}
	
	*/
	
}

function decodeJSON () {
	
	var JSON = "Data/Data.json"
	var decodedData = JSON.parse()
	
}