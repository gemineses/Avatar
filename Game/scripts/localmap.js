/*Steps Units: with 1000 steps units require 16.6 minutes to cross all the map at 1 point of speed*/

var sizeMapX = gameAreaSetWidth/fontSizeMap; //how many grounds characters fit inside of x
var sizeMapY = (gameAreaSetHeight/fontSizeMap)*2;//how many grounds characters fit inside of y
var groundsType = [
	{
		name: "sand",
		icon: "░",
		color: "#ffecb3"
		
	},
	{
		name: "water",
		icon: "~",
		color: "#b3e6ff"
	},
	{
		name: "grass",
		icon: "▒",
		color: "#009900"
	}
	]
function generateMap(){
	MAPPROCEDURE = [{
		ground: groundsType[0],
		x:[0, 500],
		y:[0, 100]
	},{
		ground: groundsType[1],
		x:[0, 500],
		y:[100, 200]
	},{
		ground: groundsType[2],
		x:[0, 500],
		y:[200, 300]
	}
	];
	
	//Generating patterns
	for(var index = 0; index< MAPPROCEDURE.length; index++){
		tmpElement = document.createElement("img");
		tmpElement.setAttribute("src", "texture/"+MAPPROCEDURE[index].ground.name+".png");
		tmpElement.setAttribute("id", "img"+MAPPROCEDURE[index].ground.name);
		document.getElementById("images").appendChild(tmpElement);
		
	}
	
}