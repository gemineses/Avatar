/*  Engine to create the Game Area */

gameArea = {
    canvas : document.getElementById("canvas"),
	width : gameAreaSetWidth,
	height: gameAreaSetHeight,
    start : function() {
        this.context = this.canvas.getContext("2d");
		/*FPS*/
		globalID = repeatOften();
    },
    clear : function() {
        this.context.clearRect(0, 0, this.width, this.height);
    },
	update : function(){
		paintInterval();
		freeMemory();
    }
}

function repeatOften() {
	updateGameArea();
	currentInterval++;
	globalID = requestAnimationFrame(repeatOften);
}

var updateGameAreaLap = 0;
function updateGameArea() {
	updateGameAreaLap++;
	//console.log("updating");
    gameArea.clear();
    gameArea.update();
}


/*  END Engine to create the Game Area */

/*
-------------------------------------	All display messages methods
*/
function addMessage(msg){
	if(msg.length>30){msg = msg.substring(0,29) + '...'}
	if(currentMessages.msgList.length==5)currentMessages.msgList.shift();
	currentMessages.msgList.push(msg);
	currentMessages.timer = currentInterval;
}

function paintMessages(){
	ctx = gameArea.canvas.getContext("2d");
	ctx.fillStyle = "black";
	ctx.font = fontSizeMessages+"px Arial";
	
	for(var index = 0; index<currentMessages.msgList.length; index++){
		ctx.fillText(currentMessages.msgList[index], 10, 20+(index*10));
	}
}


/*
-------------------------------------	End All display messages methods
*/


/* Print Map */

function paintMap(){
	ctx = gameArea.canvas.getContext("2d");
	ctx.font = fontSizeMap+"px Arial";
	
	for(var indexMap = 0; indexMap < MAPPROCEDURE.length; indexMap++){
		ctx.fillStyle = MAPPROCEDURE[indexMap].ground.color;
		pat = ctx.createPattern(document.getElementById("img"+MAPPROCEDURE[indexMap].ground.name), "repeat");
		ctx.rect(
			MAPPROCEDURE[indexMap].x[0],
			MAPPROCEDURE[indexMap].y[0],
			MAPPROCEDURE[indexMap].x[1],
			MAPPROCEDURE[indexMap].y[1]
		);
		ctx.fillStyle = pat;
		ctx.fill();
	}
	
	for(var index = 0; index<currentMessages.msgList.length; index++){
		ctx.fillText(currentMessages.msgList[index], 10, 20+(index*10));
	}
}

function printCharacters(){
	ctx = gameArea.canvas.getContext("2d");
	ctx.fillStyle = "black";
	ctx.font = fontSizeCharacters+"px Arial";
	for(var i = 0; i < charactersList.length; i++){
		ctx.fillText("0", charactersList[i].x, charactersList[i].y);
		ctx.fillText(charactersList[i].name, 
			(charactersList[i].x - (fontSizeCharacters/2)), 
			(charactersList[i].y - fontSizeCharacters));
		
	}
}

/* End of print Map */





/*
------------------------------------	Reloaded all Visual Content in each interval
*/

function paintInterval(){
	paintMessages();
	paintMap();
	moveCharacters();
	printCharacters();
}

function freeMemory(){
	//free message spam
	if(currentMessages.timer < currentInterval + messagesLongTime){
		currentMessages.msgList.shift();
		currentMessages.msgList.push("");
	}
}

/*
------------------------------------	Reloaded all Visual Content in each interval
*/




