/*CORE VARIABLES, DONTTTTT TOUCH!!*/
var players = {
	me : [
		{
			name: 'jss',
			x: 100,
			y: 100,
			status:'',
			properties:{
				speed: 1, // TODO: Set speed based on movements per seconds instead of movements per frame	
			}
			
		}
	],
	ia : [
		{
			name: 'ia',
			x: 150,
			y: 120,
			status:'',
			properties:{
				speed: 1	
			}
		}
	]
}

var environment = {
	/*
		Rocks sizes -> small 1unit 
	*/
	rocks: [
		{}
	]
}