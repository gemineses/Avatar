/*CORE VARIABLES, DONTTTTT TOUCH!!*/
var isTyping = false;
var tmpText = "";
/*General functions*/
window.addEventListener('keydown', handleKeyPress);
function handleKeyPress(e) { 
	//console.log(e.key)
	if(isTyping){
		if(e.key.toLowerCase()=="enter"){
			chat();
		}else{
			tmpText += e.key;
		}
	}else{
		switch(e.key.toLowerCase()){
			case "f":
				addMessage('praying respect');
			break;
			case "t":
				isTyping = true;
			break;
		}
	}
}

/* Open Chat Messanger */
function chat(){
	isTyping = false;
	addMessage(tmpText);
	tmpText = "";
}

/*deactivate right click*/
document.addEventListener('contextmenu', function(e){
	e.preventDefault();
	
	var rect = canvas.getBoundingClientRect();
	mousePosition = {
		x : e.clientX - rect.left,
		y : e.clientY - rect.top
	}
});