var canvas = document.createElement('canvas');
var winW = window.innerWidth;
var winH = window.innerHeight;

document.body.appendChild(canvas);

new Processing(canvas, function (processing) {

	processing.setup = function () {
		processing.size(winW, winH);
		processing.background(255, 255, 255);
	};
	
	function draw () {
		var mouseX = processing.mouseX;
		var mouseY = processing.mouseY;
		processing.fill(
			mouseX / winW * 255, 
			mouseY / winH * 255, 
			mouseY / winH * 255
		);
		processing.stroke(
			mouseX / winW * 255, 
			mouseX / winW * 255, 
			mouseX / winW * 255
		);
		processing.ellipse(
			mouseX, 
			mouseY, 
			mouseX / 5, 
			mouseX / 5
		);
	};

	processing.draw = function () {
		draw();
	};		
});