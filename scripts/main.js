/*CORE VARIABLES, DONTTTTT TOUCH!!*/

function startGame() {
	setCharacters();
	generateMap();
    gameArea.start();
	addMessage('test');
}



function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
}