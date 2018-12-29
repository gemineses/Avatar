/*TO scrips/display.js*/
/*CORE VARIABLES, DONTTTTT TOUCH!!*/
var globalID;
var gameArea; // WHERE EVERYTHING HAPPENS
var currentInterval = 0; // START
/*END OF CORE VARIABLES, DONTTTTT TOUCH!!*/

/*ENVIOREMENT VARIABLES*/
var gameAreaSetWidth = 500; //GAME AREA WIDTH
var gameAreaSetHeight = 300; // GAME AREA HEIGHT
var intervalPerSeconds = 10; // HOW MANY LOOPS PER SECONDS, FPS
/*END ENVIOREMENT VARIABLES*/

/* All configurations for display
	Before start all we need to setup some variables */
	
var currentMessages = {
	msgList : [], // LIST OF MESSAGES
	timer : 0 // NUMBER OF LOOP WHEN THE MESSAGE WAS CREATED
};
var fontSizeMessages = 10;
var fontSizeMap = 8; // SIZE OF EACH PARTICLE OF GROUND IN THE MAP 1 is 1 STEPS UNITS, so i recomend to be 4 to adjust object minimal size
var fontSizeCharacters = 10; // 1pixel is 1 step unit, like 20cm, so i recomend to be 6-8 like a 1.40  - 1.80 hight of the characters 
var messagesLongTime = intervalPerSeconds*500; // TIME TO DISPLAY A MESSAGE LOOPS*60SEC
/*end TO scrips/display.js*/

/*-----------------------------------------------------------------------------------*/

/*to scripts/localmap.js*/
var LOCALMAP;

tmpLocalMap = []
/*end scripts/localmap.js*/